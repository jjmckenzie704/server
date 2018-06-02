var http = require("http");

var PORT1 = 7000;
var PORT2= 7500;

var server1 = http.createServer(function(request, response) {
    console.log(request);
    response.end("Rock n Roll");

})

var server2 = http.createServer(function(request, response) {
    console.log(request);
    response.end("Your not doing well are you");

})

server1.listen(PORT1, function() {
    console.log("Server running on http://localhost:" + PORT1)
})

server2.listen(PORT2, function() {
    console.log("Server running on http://localhost:" + PORT2)
})

