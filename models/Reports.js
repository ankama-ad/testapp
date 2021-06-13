const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reports', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PBIReportId: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    ReportName: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    PBIReportAppId: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    ReportPrefix: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    PBIWorkspaceId: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    DepartmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Departments',
        key: 'DepartmentID'
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ReportCategoryMaster',
        key: 'CategoryId'
      }
    },
    ReportDescription: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    ReportType: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "1 --> powerBI  2 ---> Cognos"
    },
    CognosLink: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Notes: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    HasDataLevelSecurity: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'Reports',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Reports",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
