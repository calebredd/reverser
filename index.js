const express=require('express'),
	port=process.env.PORT || 4000,
	server=require('./server.js');
server.use(express.json());
server.listen(port,()=>{
console.log("server running on port:"+port);
})
