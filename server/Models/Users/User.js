const { DataTypes, Model, } = require('sequelize');
const bcrypt = require('bcryptjs');
const SALT = 10


        
module.exports = (sequelize, Sequelize) => {
    class UserModel extends Model {


        validatePassword(canidatePassword,hash, cb) {
            bcrypt.compare(canidatePassword, hash,  function (err, isMatch) {
                if (err) return cb(err)
                cb(null, isMatch)
            })
        }
        
        static async userExist(username, email) {
            let user = await this.findOne({ where: { username: username } });
            if (user) { return { username: 'This username already taken ' } };
            user = await this.findOne({ where: { email: email } });
            if (user) { return { email: 'This email address is already associated with another user' } };
            return false
        }
    
}
         





    
    UserModel.init({
        
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            
        },

        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        role: {
            type: DataTypes.ENUM({
                values: ['ADMIN', 'EMP', 'CUSTOMER']
            }),
            allowNull: false
        }
    },
      
        {
            
            hooks: {
                beforeSave: hashPassword =  (user, options) => {
                      bcrypt.genSalt(SALT, function (err, salt) {
                            if (err) { return next(err) }
                        
                         bcrypt.hash(user.password, salt, function (err, hash){
                            if (err) { return next(hash)}
                            console.log(hash)
                            user.password = hash
                            next()
                            
                        })
                        console.log(user.password)
                        console.log(user.isNewRecord)
                    })
                }

            },
            sequelize, modelName: 'User'
        })
        

    return UserModel
}
