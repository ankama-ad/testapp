const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportSubscriptionLogs', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReportSubscriptionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ReportSubscription',
        key: 'Id'
      }
    },
    GeneratedTime: {
      type: DataTypes.DATE,
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
    tableName: 'ReportSubscriptionLogs',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportSubscriptionLogs",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
