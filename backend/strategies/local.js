const passport=require("passport")
const localStretegy= require("passport-local")
const UserService = require('../services/user_service')

passport.serializeUser((user,done)=>{
    console.log(user)
    console.log("serialize")
    done(null,user)
})

passport.deserializeUser(async (username,done)=>{
    console.log(username)
    try{
        //const user= await UserService.find(username.userName)
        done(null,username)
    }catch(err){
        done(err,false)
    }
})

passport.use(new localStretegy(
    async (username,password,done)=>{
        try{
            const user= await UserService.findByUserName(username)
            if(user){
                if(username!=user.userName)
                    done(null,false)
                else if(username==user.userName && password==user.password)
                    done(null,{id:user._id,username:user.userName})
                else
                    done(null,false)
            }else
                done(null,false)
        }catch(err){
            done(err,false)
        }
    }
))