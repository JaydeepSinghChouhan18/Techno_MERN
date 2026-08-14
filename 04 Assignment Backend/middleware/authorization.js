const authorization = (...allowedUser) => { 
    return (req ,res ,next )=>{ 
        if(!roles.includes(req.user.roles)){ 
            res.status(401).json({ 
                success : false , 
                message : "Unauthorized Access"
            })
        }
    }
};

module.exports = authorization;