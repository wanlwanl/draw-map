var fs = require('fs');
var net = require('net');

var PORT = 32030;
var HOST = 'pub-vrs.adsbexchange.com';

// tcp客户端
var client = net.createConnection(PORT, HOST);

client.on('connect', function(){
    console.log('客户端：已经与服务端建立连接');
});



client.on('close', function(data){
    console.log('客户端：连接断开');
});

client.end('你好，我是客户端');