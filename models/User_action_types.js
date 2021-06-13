const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User_action_types', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    action_Desc: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ModifiedBy: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'User_action_types',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_User_action_types",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
