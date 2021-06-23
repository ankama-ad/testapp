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
       
    items.forEach((i) => {
      model[i.constantName] = i.constantValue;
    });
    return model;
};
