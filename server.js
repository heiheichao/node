/**
 * Created by heiheichao
 2018/8/15.
 Good Luck
 */

const http=require('http');
const fs=require('fs');
const query=require('querystring');
const urllib=require('url');
http.createServer(function(req,res){
    var obj=urllib.parse(req.url,true);
    [url,json]=[obj.pathname,obj.query];
    var str='';
    req.on('data',function(data){
        str+=data;
    })
    req.on('end',function(){
         const post=query.parse(str);
    })
    fs.readFile('./www'+url,(err,data)=>{
        res.end(data);
    })
}).listen(8080);
