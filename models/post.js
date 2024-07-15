const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");



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


module.exports = Post;