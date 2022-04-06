<<<<<<< HEAD
=======
const {
    // Model is a sequelize class
    Model,
    DataTypes
} = require('sequelize');
// bcrypt is a hashing package to encrypt password
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model that takes on attributes from Model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    // bcrypt has methods to decrypt the password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// create fields/columns for User model using Sequelize
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // username is uncommon to use nowadays - just use email
    // username: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
}, {
    hooks: {
        // set up beforeCreate lifecycle "hook" functionality to intercept the below
        // hash password without storing it in the db
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },

        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

module.exports = User;
>>>>>>> 4aca77babb8f5c7ce5bd36cec40694ca5ce02b34
