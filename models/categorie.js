module.exports = (sequelize, DataTypes) => sequelize.define(
    'Categorie',
    {
      name: DataTypes.STRING,
    },
    {
      modelName: 'Categories',
      timestamps: false,
    },
  );
