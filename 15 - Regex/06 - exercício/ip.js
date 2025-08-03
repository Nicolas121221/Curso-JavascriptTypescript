const { ips } = require("../base");

regExp = /([1-255]+|0)\.([1-255]+|0)\.([1-255]+|0)\.([1-255]+|0)/g; 
regExp1 = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)/g; 

console.log(ips.match(regExp));
console.log(ips.match(regExp1));

for(let i = 0 ; i <=300; i++){
    const ip = `${i}.${i}.${i}.${i}`
    console.log(ip, ip.match(regExp1))
}