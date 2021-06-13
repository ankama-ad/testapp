const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminRoles', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RolePrefix: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    RoleName: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    AdminRoleType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'AdminTypes',
        key: 'AdminTypeID'
      }
    },
    Description: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    MaxNoOfRolesOnSameDept: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LimitReportTo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LimitUsersTo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsEnableToCrtSecAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsEnableToCrtUserGroups: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsEnableToCrtUserRoles: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsEnableToAddNewReport: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsAbleToAssignReportSecAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsAbleToReportRequestAccess: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ModifiedBy: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AdminRoles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AdminRolesID",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
