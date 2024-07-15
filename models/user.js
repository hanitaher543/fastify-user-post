const {DataTypes} = require ('sequelize');
const sequelize = require ('../config/database');
const Post = require ('../models/post')



const User = sequelize.define('User',{
    id :{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    fullname :{
        type: DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique: true,
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    telephone : {
        type : DataTypes.STRING,
        allowNull : false,
    }
});

// Définir l'association : OneToMany
//User.hasMany(Post, { foreignKey: 'userId' });
User.associate = (models) => {
    User.hasMany(models.Post, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = User;