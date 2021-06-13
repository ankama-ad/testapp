const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Constants', {
    ConstantID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ConstantName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    ConstantValue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('suser_sname')
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate')
    },
    ModifiedBy: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('suser_sname')
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate')
    }
  }, {
    sequelize,
    tableName: 'Constants',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Constants",
        unique: true,
        fields: [
          { name: "ConstantID" },
        ]
      },
    ]
  });
};
