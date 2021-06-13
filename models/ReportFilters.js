const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportFilters', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Reports',
        key: 'Id'
      }
    },
    FilterKey: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    FilterValue: {
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
    tableName: 'ReportFilters',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportFilters",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
