
var url =require("url");
var http =require("http");
var fs = require('fs');

 var server= http.createServer(function(req,res)
  {
	var pathname =url.parse(req.url).pathname;
	if(pathname === '/')
	{
	   res.writeHead(200, {"content-Type":"text/plain"});
	   res.end("Home page");	
	}
	else if(pathname ==='/post' || pathname ==='/post/')
	{
       res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
	   var newPost = fs.readFileSync('views/post/new.html');
	   res.end(newPost);	
	}
	else if(pathname ==='/contact')
	{
      res.writeHead(200, {"content-Type":"text/plain"});
	   res.end("contacts page");
	}
	else if(pathname ==='/welcome')
	{
	   res.writeHead(301, {"Location":"/post"});
	    var newPost = fs.readFileSync('views/post/new.html');
	   res.end(newPost);	
	}
	else 
	{
	   res.writeHead(404, {"content-Type":"text/plain"});
	   res.end("page not found");	
	}
  });
  server.listen(8000);
  console.log("server run on http://localhost:8000/");