const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Feedback', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DepartmentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Departments',
        key: 'DepartmentID'
      }
    },
    Topic: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    Feedback: {
      type: DataTypes.STRING(256),
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
    tableName: 'Feedback',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Feedback",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
