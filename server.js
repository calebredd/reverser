const express=require("express"),
	server=express();

server.get('/',(req,res)=>{
res.status(200).json({
	message:"welcome to the homepage!"
})
})

module.exports=server;
