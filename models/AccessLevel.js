const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccessLevel', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ALName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(256),
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
    tableName: 'AccessLevel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AccessLevel",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
