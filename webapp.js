import http from "http";
import url from "url";

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === "/" && req.method === "GET"){
        res.writeHead(200,{"content-Type":'text/html'});
        res.end("<h1>Welcome to the Homepage<h1>")
    }
    else if (parsedUrl.pathname === "/about" && req.method === "GET"){
        res.writeHead(200,{"content-Type":'text/html'});
        res.end("<h1>About us<h1>");
    }
    else{
        res.writeHead(404,{"content-Type":'text/html'});
        res.end("<h1>Page not found</h1>");
    }
});
server.listen(5000,()=>{
    console.log("server running at http://localhost:5000")
    
});
