const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminTypes', {
    AdminTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TypeName: {
      type: DataTypes.STRING(256),
      allowNull: true
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
    tableName: 'AdminTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AdminTypeID",
        unique: true,
        fields: [
          { name: "AdminTypeID" },
        ]
      },
    ]
  });
};
