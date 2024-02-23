const User= require('../../../models/user');


module.exports.signUp=async(req,res)=>{
    try{
        if(req.query.password!==req.query.confirmPassword){
            return res.status(202).json({
                message:"password and confirm password dont match!"
            })
        };
        const user=await User.findOne({email: req.query.email});
        if(!user){
            const userCreated=await User.create(req.query);
            return res.status(200).json({
                message:"User Added!!"
                })
        }else{
            console.log('user Already exist!!');
            return res.status(200).json({
                message:"User already created please sign-in!!"
            })
        }
        
       
    }catch(err){
        return res.status(500).json({
            message:"Internal Server Error!!"
        })
    }
}