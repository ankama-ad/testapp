const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GroupMembers', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'Id'
      }
    },
    TeamId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'UserGroups',
        key: 'TeamID'
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
    tableName: 'GroupMembers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GroupMembers",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
