module.exports = (sequelize, DataTypes) => sequelize.define('Category',
    { name: DataTypes.STRING },
    { modelName: 'Categories', timestamps: false });
