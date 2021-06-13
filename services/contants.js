var contex = require("./sequalize.service");
const { Op } = require("sequelize");

exports.fillConstants = async (model) => {
    let keys = Object.keys(model);
    let items = await contex.getContext().Constants.findAll({
        where: {
            ConstantName:{
        [Op.in]: keys
            }
    }
    });
    
    console.log('model',model,keys, items);
    items.forEach((i) => {
      model[i.ConstantName] = i.ConstantValue;
    });
    console.log('******************* after update ***********************');
    console.log('after update',model,keys, items);
    return model;
};
