import express from "express";
const a = express();

a.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>");
});
a.get("/about",(req,res)=>{
    res.send("<h1>Welcome</h1>");
});
a.use((req,res)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
});
a.listen(3000,()=>{
    console.log("Running at http://localhost:3000");
}); 