const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportAccess', {
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
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'Id'
      }
    },
    DepartmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Departments',
        key: 'DepartmentID'
      }
    },
    TeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserGroups',
        key: 'TeamID'
      }
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AccessLeveId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsShare: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsSubscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsExportPdf: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsExportExcel: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsScreenShot: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('suser_sname')
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate')
    },
    ModifiedBy: {
      type: DataTypes.STRING(50),
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
    tableName: 'ReportAccess',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportAccess",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
