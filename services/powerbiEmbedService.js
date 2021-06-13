// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

//const auth = require(__dirname + "../src/authentication.js");
//const config = require(__dirname + "./config/config.json");
// const utils = require("../src/utils");
const PowerBiReportDetails = require(__dirname + "/../models/embedReportConfig.js");
const EmbedConfig = require(__dirname + "/../models/embedConfig.js");
const fetch = require('node-fetch');

/**
 * Generate embed token and embed urls for reports
 * @return Details like Embed URL, Access token and Expiry
 */
 async function getEmbedInfo(workspaceId, reportId, params) {

    // Get the Report Embed details
    try {

        // Get report details and embed token
        const embedParams = await getEmbedParamsForSingleReport(workspaceId, reportId, null, params);
        // return embedParams;
        return {
            'accessToken': embedParams.embedToken.token,
            'embedUrl': embedParams.reportsDetail,
            'expiry': embedParams.embedToken.expiration,
            'status': 200
        };
    } catch (err) {
        return {
            'status': err.status,
            'error': `${err.message}`
        }
    }
}

/**
 * Get embed params for a single report for a single workspace
 * @param {string} workspaceId
 * @param {string} reportId
 * @param {string} additionalDatasetId - Optional Parameter
 * @return EmbedConfig object
 */
async function getEmbedParamsForSingleReport(workspaceId, reportId, additionalDatasetId, params) {
    const reportInGroupApi = `https://api.powerbi.com/v1.0/myorg/groups/${workspaceId}/reports/${reportId}`;
    const headers = await getRequestHeader();    
    // Get report info by calling the PowerBI REST API
    const result = await fetch(reportInGroupApi, {
        method: 'GET',
        headers: headers,        
    })

    if (!result.ok) {
        throw result;
    }

    // Convert result in json to retrieve values
    const resultJson = await result.json();

    // Add report data for embedding
    const reportDetails = new PowerBiReportDetails(resultJson.id, resultJson.name, resultJson.embedUrl);
    const reportEmbedConfig = new EmbedConfig();

    // Create mapping for report and Embed URL
    reportEmbedConfig.reportsDetail = [reportDetails];

    // Create list of datasets
    let datasetIds = [resultJson.datasetId];

    // Append additional dataset to the list to achieve dynamic binding later
    if (additionalDatasetId) {
        datasetIds.push(additionalDatasetId);
    }

    // Get Embed token multiple resources
    reportEmbedConfig.embedToken = await getEmbedTokenForSingleReportSingleWorkspace(reportId, datasetIds, workspaceId, params);
    return reportEmbedConfig;
}



/**
 * Get Request header
 * @return Request header with Bearer token
 */
 async function getRequestHeader() {

    // Store authentication token
    let tokenResponse;

    // Store the error thrown while getting authentication token
    let errorResponse;

    // Get the response from the authentication request
    try {
        tokenResponse = await getAccessToken();
    } catch (err) {
        if (err.hasOwnProperty('error_description') && err.hasOwnProperty('error')) {
            errorResponse = err.error_description;
        } else {

            // Invalid PowerBI Username provided
            errorResponse = err.toString();
        }
        return {
            'status': 401,
            'error': errorResponse
        };
    }

    // Extract AccessToken from the response
    const token = tokenResponse.accessToken;
    return {
        'Content-Type': "application/json",
        'Authorization': "Bearer ".concat(token)
    };
}

/**
 * Get Embed token for single report, multiple datasets, and an optional target workspace
 * @param {string} reportId
 * @param {Array<string>} datasetIds
 * @param {string} targetWorkspaceId - Optional Parameter
 * @return EmbedToken
 */
 async function getEmbedTokenForSingleReportSingleWorkspace(reportId, datasetIds, targetWorkspaceId, params) {

    // Add report id in the request
    //     let formData = {
    //     'reports': [{
    //         'id': reportId
    //     }],
    // ,
    //     "identities": [{
    //         "username": "john@powerbiaxes.onmicrosoft.com",
    //         "roles": [],
    //         "datasets": []          
    //     }]        
    // };
    let formData = {
        'reports': [{
            'id': reportId
        }]
    };

    // if(params && params.length){
    //     formData['identities'][0]['roles'] = [];
    //     params.forEach( (c) => {
    //         formData['identities'][0]['roles'].push(c.FilterValue);
    //     });                    
    // }

    // Add dataset ids in the request
    formData['datasets'] = [];
    
    for (const datasetId of datasetIds) {
        formData['datasets'].push({
            'id': datasetId
        });      
    }

    // Add targetWorkspace id in the request
    if (targetWorkspaceId) {
        formData['targetWorkspaces'] = [];
        formData['targetWorkspaces'].push({
            'id': targetWorkspaceId
        })
    }

    const embedTokenApi = `https://api.powerbi.com/v1.0/myorg/groups/${targetWorkspaceId}/reports/${reportId}/generatetoken`;
    const headers = await getRequestHeader();

    // Generate Embed token for single report, workspace, and multiple datasets. Refer https://aka.ms/MultiResourceEmbedToken
    const result = await fetch(embedTokenApi, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formData)
    });

    if (!result.ok)
        throw result;
    return result.json();
}

async function getAccessToken () {

    // Use ADAL.js for authentication
    let adal = require("adal-node");

    let AuthenticationContext = adal.AuthenticationContext;

    // Create a config variable that store credentials from config.json
    let config = require(__dirname + "./config/config.json");
    
    //let constants =  require("../api/contants");
    // config = await constants.fillConstants(config);

    let authorityUrl = config.authorityUri;

    // Check for the MasterUser Authentication
    //if (config.authenticationMode.toLowerCase() === "masteruser") {
        let context = new AuthenticationContext(authorityUrl);

        return new Promise(
            (resolve, reject) => {
                context.acquireTokenWithUsernamePassword(config.scope, config.pbiUsername, config.pbiPassword, config.clientId, function (err, tokenResponse) {

                    // Function returns error object in tokenResponse
                    // Invalid Username will return empty tokenResponse, thus err is used
                    if (err) {
                        reject(tokenResponse == null ? err : tokenResponse);
                    }
                    resolve(tokenResponse);
                })
            }
        );
       
    //} 
}

module.exports = {
    getEmbedInfo: getEmbedInfo
}