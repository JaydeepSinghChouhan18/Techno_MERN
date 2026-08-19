const cloudinary = require("../middleware/upload_cloud_Middleware")

const uploadBuffer = (buffer,folder="demo-cloud") => { 
    return new Promise((res,rej) => { 
        const stream = cloudinary.uploader.upload_stream({ 
            folder , resource_type:"image"
        } , (error,result) => {   
            
        })
    })
}; 


 

