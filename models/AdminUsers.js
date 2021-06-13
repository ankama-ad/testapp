const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminUsers', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'Id'
      }
    },
    AdminRoleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'AdminRoles',
        key: 'ID'
      }
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
    tableName: 'AdminUsers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AdminUsers",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
