const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserGroups', {
    TeamID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TeamName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    DeptId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Departments',
        key: 'DepartmentID'
      }
    },
    ParentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('suser_sname')
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate')
    },
    ModifiedBy: {
      type: DataTypes.STRING(250),
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
    tableName: 'UserGroups',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UserGroups",
        unique: true,
        fields: [
          { name: "TeamID" },
        ]
      },
    ]
  });
};
