const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    UserName: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    DepartmentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Departments',
        key: 'DepartmentID'
      }
    },
    CoWorkerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Designation: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    ReportingManagerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate')
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate')
    },
    ModifiedBy: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('suser_sname')
    },
    CreatedBy: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('suser_sname')
    }
  }, {
    sequelize,
    tableName: 'Users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Users",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
