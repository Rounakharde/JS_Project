const accountId=101;
let accountEmai="rounaharde86@gmail.com"
var accountPassword="12345"
accouncity="Nagpur";

//accountId=2;
accountEmai="ramharde@gmail.com";
accountPassword="2233";
accouncity="Pune";
/*
Prefer not to use var because of issue in block scope and functional scope 

*/ 
console.log(accountId);
console.log(accountEmai);
console.log(accountPassword);
console.log(accouncity);

console.table([accountId,accountEmai,accountPassword,accouncity])