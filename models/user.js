const db = require('../config/connection');

const User = db.sequelize.define('user',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: db.Sequelize.STRING,
        allowNull: true,
        unique: false
    }
})

User.sync();
module.exports = User;