const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Departments', {
    DepartmentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DepartmentName: {
      type: DataTypes.STRING(256),
      allowNull: true
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
    tableName: 'Departments',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Departments",
        unique: true,
        fields: [
          { name: "DepartmentID" },
        ]
      },
    ]
  });
};
