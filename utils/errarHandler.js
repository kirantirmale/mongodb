exports.errorHandler = (req,res)=>{
    return res.status(404).json({message: "Api not found !!"})
 }