const passport = require('passport');
const LocalStrategy = require('passport-local')
const Auth = require('../Services/AuthService');
const logger = require('morgan');
const { User } = require('../db');
const bcrypt = require('bcrypt')

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(logger('combined'))

    passport.serializeUser((user, done) => {
        
        return done(null, user.id)
    })


    passport.deserializeUser((id, done) => {
        User.findByPk(id).then(user => {
            
            return done(null, { id })
        })
    })
        
        
    

    passport.use('local', new LocalStrategy(async function verify(username, password, done) {
        await User.findOne({ where: { username: username } }).then((user) => {
            if (user) {
                console.log('User Found!')
                console.log(user instanceof User)
                console.log(user)
                console.log(user.username, user.password, password)
            }
            user.validatePassword(password, user.password, ((function (err, isMatch) {
                if (err) { throw err.message }
                console.log(password, isMatch)
                if (isMatch) {
                    return done(null, user)
                }
                    
                    
            })
            )
                
            )
            
        })
    })
        
        
        
)
    
        
                
                    
    return passport
                
    }