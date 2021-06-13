const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User_actions', {
    id: {
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
    page_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    ActionType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User_action_types',
        key: 'Id'
      }
    },
    ActionDesc: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    old_value: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    new_value: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    timestamp: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    user_browser_details: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    CreatedBy: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'User_actions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_User_actions",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
