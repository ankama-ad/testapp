const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportRequests', {
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
    RequestedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Comments: {
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
    tableName: 'ReportRequests',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportRequests",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
