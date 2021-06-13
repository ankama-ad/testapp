const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccessLevelDesignations', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AlId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'AccessLevel',
        key: 'Id'
      }
    },
    DepartmentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Departments',
        key: 'DepartmentID'
      }
    },
    DesignationId: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'AccessLevelDesignations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AccessLevelDesignations",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
