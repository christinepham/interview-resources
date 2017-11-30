//write a function that acts as a rate limiter, meaning if something is called more than 10 times in 10 seconds --> return true

var ipAddressMap = new Map();
 
function rateLimit(ipAddress, timeStamp) {
    //ipAddress and timeStamp is invalid
    if (ipAddress === null || timeStamp === null) {
        return false;
    }
    var timeStampSize = [];
    var arr =  ipAddressMap.get(ipAddress);
    //ipAddress has not been called yet
    if(!ipAddressMap.get(ipAddress)) {
        ipAddressMap.set(ipAddress, [timeStamp]);
    } else if(ipAddressMap.get(ipAddress)) {
        //not 10 times
        timeStampSize = ipAddressMap.get(ipAddress).length;
        if (timeStampSize !== 10) {
            arr.push(timeStamp);
            ipAddressMap.set(ipAddress, arr);
        } else {
            var firstEntry = ipAddressMap.get(ipAddress)[0]; // 1 --> 5
            var lastEntry = ipAddressMap.get(ipAddress)[9]; // 14 --> 14
            var timeInterval = lastEntry - firstEntry;
            arr.shift();
            if(timeInterval <= Date.now() - 10000) {
                return true;
            }
        }
    }
    
    return false;
}

var ipAddress1 = "test";
var ipAddress2 = "foo";

console.log(rateLimit(ipAddress1, Date.now()));
console.log(rateLimit(ipAddress1, Date.now()));
console.log(rateLimit(ipAddress1, Date.now()));
console.log(rateLimit(ipAddress1, Date.now()));
console.log(rateLimit(ipAddress1, Date.now()));
console.log(rateLimit(ipAddress1, Date.now()));
console.log(rateLimit(ipAddress1, Date.now()));
console.log(rateLimit(ipAddress1, Date.now()));
console.log(rateLimit(ipAddress1, Date.now()));
console.log(rateLimit(ipAddress1, Date.now()));
console.log(rateLimit(ipAddress2, Date.now()));
console.log(rateLimit(ipAddress1, Date.now()));

//ip: carl , 1
//ip: carl , 5
//ip: carl , 5
//ip: carl , 5
//ip: carl , 5
//ip: carl , 5
//ip: carl, 14
//ip: carl, 14
//ip: carl, 14
//ip: carl, 14
//ip: carl, 14
//ip: carl, 14 

