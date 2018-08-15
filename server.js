/**
 * Created by heiheichao
 2018/8/15.
 Good Luck
 */

const http=require('http');
const fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('1.php','utf-8',function(err,data){
        if(err){
            res.end(err);
        }else{
            res.end(data);
        }
    })
}).listen(8080);
