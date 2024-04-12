import http from "http";
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'content-type':"application/JSON"});
    res.end(JSON.stringify({
        data:"HELLO WORLD"}
        ));
});
    server.listen(5000, ()=>{
        console.log("server running successfully in http://localhost:5000");
    });