
var graph = require('@microsoft/microsoft-graph-client');
require('isomorphic-fetch');

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
//const GRAPH_ENDPOINT_M = 'https://graph.microsoft.com/v1.0/departments';
const GRAPH_ENDPOINT_USERS = 'https://graph.microsoft.com/v1.0/users';  //?$select=department,givenName
// const GRAPH_ENDPOINT_M = 'https://graph.microsoft.com/v1.0/users/anudeep@powerbiaxes.onmicrosoft.com?$select=department, ';

exports.getUserDetails = async (userEmail, accessToken) => {
   
    // Get report info by calling the PowerBI REST API
    let url = GRAPH_ENDPOINT_USERS + '/' + userEmail;

    // graph api result 
    //let token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6ImRRbjFiZjlpQXJPMHI5a0UwLVlIemtmNlNUSF9hRUtMSGVYMzE2d05RY3MiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yNjdkY2FjZC0wNzU3LTQ1NmUtOTNhYi04OWQ3MDY4ZWY2YjQvIiwiaWF0IjoxNjIzNDA5OTgxLCJuYmYiOjE2MjM0MDk5ODEsImV4cCI6MTYyMzQxMzg4MSwiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iLCJ1cm46bWljcm9zb2Z0OnJlcTEiLCJ1cm46bWljcm9zb2Z0OnJlcTIiLCJ1cm46bWljcm9zb2Z0OnJlcTMiLCJjMSIsImMyIiwiYzMiLCJjNCIsImM1IiwiYzYiLCJjNyIsImM4IiwiYzkiLCJjMTAiLCJjMTEiLCJjMTIiLCJjMTMiLCJjMTQiLCJjMTUiLCJjMTYiLCJjMTciLCJjMTgiLCJjMTkiLCJjMjAiLCJjMjEiLCJjMjIiLCJjMjMiLCJjMjQiLCJjMjUiXSwiYWlvIjoiQVVRQXUvOFRBQUFBMHpYVnJiRk84WkZYTVdvNEtUSTBxZWhUV0o2NFdmOFZvYW5lVFlHVnI0ODl3M3RVdG5yUlNpMExmSlVjN0tpaHR5SGtDK0NCK0RXclU1TDZrSU9sOUE9PSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiU1NPIiwiYXBwaWQiOiIzNjMyZmJmMy0xMTQ5LTRhZDUtOGZjNS05ZDhiNzljZDhlMTUiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Imt1bWFyIiwiZ2l2ZW5fbmFtZSI6ImFqYXkiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI0OS4yMDUuMTEzLjI0MiIsIm5hbWUiOiJhamF5Iiwib2lkIjoiN2M4ZjMyOGEtMzNmNC00NTRhLTkxZjYtNTY0MTMyMWVhMGZmIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxM0VENDYyRDEiLCJyaCI6IjAuQVh3QXpjcDlKbGNIYmtXVHE0blhCbzcydFBQN01qWkpFZFZLajhXZGkzbk5qaFY4QU9rLiIsInNjcCI6IkF1ZGl0TG9nLlJlYWQuQWxsIERpcmVjdG9yeS5BY2Nlc3NBc1VzZXIuQWxsIERpcmVjdG9yeS5SZWFkLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBlbWFpbCBHcm91cC5SZWFkLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIHByb2ZpbGUgVGVhbS5DcmVhdGUgVGVhbS5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZCBVc2VyLlJlYWQuQWxsIFVzZXIuUmVhZEJhc2ljLkFsbCBVc2VyLlJlYWRXcml0ZS5BbGwgVXNlckFjdGl2aXR5LlJlYWRXcml0ZS5DcmVhdGVkQnlBcHAgb3BlbmlkIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiOU1LR1VIQXh0LVhYNlZjaTZXQzMwVHJxVTI3cnNtSDlaUkJkSTZnNk5JUSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjI2N2RjYWNkLTA3NTctNDU2ZS05M2FiLTg5ZDcwNjhlZjZiNCIsInVuaXF1ZV9uYW1lIjoiYWpheUBwb3dlcmJpYXhlcy5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhamF5QHBvd2VyYmlheGVzLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6InNWdmZkb0d2OVV1aDRYbUxJSWVRQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiem1ob040M0lnNUFjelBhSEtoOGx1MlNON05ZQnYzRGUyQW5PYXRDNnRsTSJ9LCJ4bXNfdGNkdCI6MTYyMDY3MDYxN30.Nqg2kxyE1heV-MXkVRz-lCc95MkJWKbrXc_0Y0Qb5XckK6JKkjkr6vkTfw-jpzjaXpJzGNxf20qS8ABS34Rx_LXnd132zqGBu8ualitZfHVM5xQ35CPQQWx_FIYuNITtQoQOgsMzUeDNVCzOfiFgr4HemHV2d8XG1FM1BooAf0Rk1NdsIb9SZ8V9VgeF-5_xQ8nhmeJTEN13_tJ7Udw7EC-Ddg6v8scQPxZkilfVfvQQ_HCwVdsFp5xaUVFSUbTVYWmqc1V3AVEGxeltXRHut9vblen5Gg0aHvbkDyAQpjKhnw6IO_7rG5WvOZ0vNJCLMrJ_CUlGd-oYZzwIB061NA";
    const client = graph.Client.init({
        // Use the provided access token to authenticate
        // requests
        authProvider: (done) => {
            done(null, accessToken);
        }
    });

    const user = await client.api(url).get();
    return user;

}


exports.getUserDetailsByToken = async (accessToken) => {
   
    // Get report info by calling the PowerBI REST API
    let url = GRAPH_ENDPOINT;

    // graph api result 
    //let token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6ImRRbjFiZjlpQXJPMHI5a0UwLVlIemtmNlNUSF9hRUtMSGVYMzE2d05RY3MiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yNjdkY2FjZC0wNzU3LTQ1NmUtOTNhYi04OWQ3MDY4ZWY2YjQvIiwiaWF0IjoxNjIzNDA5OTgxLCJuYmYiOjE2MjM0MDk5ODEsImV4cCI6MTYyMzQxMzg4MSwiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iLCJ1cm46bWljcm9zb2Z0OnJlcTEiLCJ1cm46bWljcm9zb2Z0OnJlcTIiLCJ1cm46bWljcm9zb2Z0OnJlcTMiLCJjMSIsImMyIiwiYzMiLCJjNCIsImM1IiwiYzYiLCJjNyIsImM4IiwiYzkiLCJjMTAiLCJjMTEiLCJjMTIiLCJjMTMiLCJjMTQiLCJjMTUiLCJjMTYiLCJjMTciLCJjMTgiLCJjMTkiLCJjMjAiLCJjMjEiLCJjMjIiLCJjMjMiLCJjMjQiLCJjMjUiXSwiYWlvIjoiQVVRQXUvOFRBQUFBMHpYVnJiRk84WkZYTVdvNEtUSTBxZWhUV0o2NFdmOFZvYW5lVFlHVnI0ODl3M3RVdG5yUlNpMExmSlVjN0tpaHR5SGtDK0NCK0RXclU1TDZrSU9sOUE9PSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiU1NPIiwiYXBwaWQiOiIzNjMyZmJmMy0xMTQ5LTRhZDUtOGZjNS05ZDhiNzljZDhlMTUiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Imt1bWFyIiwiZ2l2ZW5fbmFtZSI6ImFqYXkiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI0OS4yMDUuMTEzLjI0MiIsIm5hbWUiOiJhamF5Iiwib2lkIjoiN2M4ZjMyOGEtMzNmNC00NTRhLTkxZjYtNTY0MTMyMWVhMGZmIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxM0VENDYyRDEiLCJyaCI6IjAuQVh3QXpjcDlKbGNIYmtXVHE0blhCbzcydFBQN01qWkpFZFZLajhXZGkzbk5qaFY4QU9rLiIsInNjcCI6IkF1ZGl0TG9nLlJlYWQuQWxsIERpcmVjdG9yeS5BY2Nlc3NBc1VzZXIuQWxsIERpcmVjdG9yeS5SZWFkLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBlbWFpbCBHcm91cC5SZWFkLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIHByb2ZpbGUgVGVhbS5DcmVhdGUgVGVhbS5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZCBVc2VyLlJlYWQuQWxsIFVzZXIuUmVhZEJhc2ljLkFsbCBVc2VyLlJlYWRXcml0ZS5BbGwgVXNlckFjdGl2aXR5LlJlYWRXcml0ZS5DcmVhdGVkQnlBcHAgb3BlbmlkIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiOU1LR1VIQXh0LVhYNlZjaTZXQzMwVHJxVTI3cnNtSDlaUkJkSTZnNk5JUSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjI2N2RjYWNkLTA3NTctNDU2ZS05M2FiLTg5ZDcwNjhlZjZiNCIsInVuaXF1ZV9uYW1lIjoiYWpheUBwb3dlcmJpYXhlcy5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhamF5QHBvd2VyYmlheGVzLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6InNWdmZkb0d2OVV1aDRYbUxJSWVRQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiem1ob040M0lnNUFjelBhSEtoOGx1MlNON05ZQnYzRGUyQW5PYXRDNnRsTSJ9LCJ4bXNfdGNkdCI6MTYyMDY3MDYxN30.Nqg2kxyE1heV-MXkVRz-lCc95MkJWKbrXc_0Y0Qb5XckK6JKkjkr6vkTfw-jpzjaXpJzGNxf20qS8ABS34Rx_LXnd132zqGBu8ualitZfHVM5xQ35CPQQWx_FIYuNITtQoQOgsMzUeDNVCzOfiFgr4HemHV2d8XG1FM1BooAf0Rk1NdsIb9SZ8V9VgeF-5_xQ8nhmeJTEN13_tJ7Udw7EC-Ddg6v8scQPxZkilfVfvQQ_HCwVdsFp5xaUVFSUbTVYWmqc1V3AVEGxeltXRHut9vblen5Gg0aHvbkDyAQpjKhnw6IO_7rG5WvOZ0vNJCLMrJ_CUlGd-oYZzwIB061NA";
    const client = graph.Client.init({
        // Use the provided access token to authenticate
        // requests
        authProvider: (done) => {
            done(null, accessToken);
        }
    });

    const user = await client.api(url).get();
    return user;

}