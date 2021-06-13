const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportSubscription', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReportId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Reports',
        key: 'Id'
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'Id'
      }
    },
    Frequency: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    WeekDay: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    DateOfMonth: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    SheduledTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EndDate: {
      type: DataTypes.DATEONLY,
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
    tableName: 'ReportSubscription',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportSubscription",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
