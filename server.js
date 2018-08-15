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
    res.end(urllib.parse(req.url,true).toString());
}).listen(8080);
