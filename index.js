//FS,OS,PATH,URL MODULE:

//FS MODULE:
//CREATE FILE:

{/*const fs = require("fs");
fs.writeFile("read.txt", "welcome to nodejs file system", (err) => {
  if (err) throw err;
  console.log("file created successfully");
});
*/}

//APPEND FILE:
{/*const fs=require("fs")
fs.appendFile("read.txt"," \n this is appended text",(err)=>{
    if(err) throw err;
    console.log("file appended successfully");

})*/}

//READ FILE:
{/*const fs=require("fs")
fs.readFile("read.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})*/}

//RENAME FILE:
{/*const fs=require("fs")
fs.rename("read.txt","readwrite.txt",(err)=>{
    if(err) throw err;
    console.log("file renamed successfully");
})*/}

//DELETE FILE:
{/*const fs=require("fs")
fs.unlink("readwrite.txt",(err)=>{
    if(err) throw err;
    console.log("file deleted successfully");
})*/}




//PATH MODULE:
{/*const path=require("path")
console.log(path.dirname("C:/Users/hp/OneDrive/Desktop/nodejs/index.js"));
console.log(path.extname("C:/Users/hp/OneDrive/Desktop/nodejs/index.js"));
console.log(path.basename("C:/Users/hp/OneDrive/Desktop/nodejs/index.js"));
console.log(path.parse("C:/Users/hp/OneDrive/Desktop/nodejs/index.js"));
console.log(path.join(__dirname,"/nodejs/index.js"));
console.log(path.join(__dirname,"/nodejs","/read.txt"));
console.log(path.resolve(__dirname,"/nodejs","/read.txt"));
console.log(path.isAbsolute("C:/Users/hp/OneDrive/Desktop/nodejs/index.js"));
console.log(path.isAbsolute("./nodejs/index.js"));
console.log(path.relative("C:/Users/hp/OneDrive/Desktop/nodejs","C:/Users/hp/OneDrive/Desktop/nodejs/index.js"));
console.log(path.sep);
console.log(path.delimiter);
console.log(path.format({
    dir:"C:/Users/hp/OneDrive/Desktop/nodejs",
    base:"index.js"
}));
console.log(path.toNamespacedPath("C:/Users/hp/OneDrive/Desktop/nodejs/index.js"));
*/}


//OS MODULE:
{/*const os=require("os")
console.log(os.arch());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.platform()); 
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.networkInterfaces());
console.log(os.tmpdir());                       //More to know
*/}





//URL MODULE:
const url=require("url")
const myurl=new URL("https://www.example.com:8000/path/name?search=test#hash");
console.log(myurl.href);
console.log(myurl.toString());
console.log(myurl.protocol);
console.log(myurl.host);
console.log(myurl.hostname);
console.log(myurl.port);
console.log(myurl.pathname);
console.log(myurl.search);
console.log(myurl.hash);
console.log(myurl.origin);                   //More to know



