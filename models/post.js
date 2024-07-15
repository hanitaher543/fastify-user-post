const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");
const User = require ('../models/user');



const Post = sequelize.define ('Post',{
    id :{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    content :{
        type: DataTypes.STRING,
        allowNull : false,
    },
    userId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : 'Users',
            key : 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
});

// Définir l'association
//Post.belongsTo(User, { foreignKey: 'userId' });
Post.associate = (models) => {
    Post.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};


module.exports = Post;