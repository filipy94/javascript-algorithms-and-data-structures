function checkCashRegister(price, cash, cid) {  
    //every currency x10 to previne sum problems
    const denominator = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1,];
    //a func to calc the change
    function calcChange(price, cash, cid) {
      let totalChange = (cash - price) * 100;    //determine the change to the client
      let clientChange = [                       //an array of client change
      ["ONE HUNDRED", 0], 
      ["TWENTY", 0], 
      ["TEN", 0], 
      ["FIVE", 0], 
      ["ONE", 0], 
      ["QUARTER", 0], 
      ["DIME", 0], 
      ["NICKEL", 0], 
      ["PENNY", 0],
    ];  
    let availCid = [...cid].reverse().map(e => [e[0], e[1] * 100]);   //receive cid arg, reverse to decreasing order and multiply by 100 like denominator variable
    let sumOfCid = availCid.reduce((a, b) => (a + b[1]),0) / 100;     //sum cid and after divide by 100
    if (sumOfCid === totalChange / 100) {        //first case: when change is equal total cid
      return {status: "CLOSED", change: [...cid]};
    }  
    else for (let i = 0; i < availCid.length; i++) {       //second case: check if cid can pay change 
        while (denominator[i] <= totalChange && availCid[i][1] > 0) {
          clientChange[i][1] += denominator[i];        
          totalChange -= denominator[i];        
          availCid[i][1] -= denominator[i];
        }
      };    
     
      let change = clientChange    
                      .map(e => [e[0], e[1] / 100])    
                      .filter(e => e[1] !== 0);    //eliminate null currency from array
      let changeTotal = change.reduce((a, b) => (a + b[1]),0);    
      if (changeTotal < totalChange) {            //case don't have money to pay change
          return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change};            //case has
    }

    let clientChange = calcChange(price, cash, cid);  
    return clientChange;
  };
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));