const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportCategoryMaster', {
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CategoryName: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DepartmentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Departments',
        key: 'DepartmentID'
      }
    },
    Description: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    IsActive: {
      type: DataTypes.SMALLINT,
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
    tableName: 'ReportCategoryMaster',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportCategoryMaster",
        unique: true,
        fields: [
          { name: "CategoryId" },
        ]
      },
    ]
  });
};
