const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Approval_master', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ApprovalUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ReportId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Reports',
        key: 'Id'
      }
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
    tableName: 'Approval_master',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Approval_master",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
