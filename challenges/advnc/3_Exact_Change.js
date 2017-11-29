// everything is x100, cause floating point is basic for rounding error
// 
const deno_map = new Map([
  ['ONE HUNDRED', 10000],
  ['TWENTY', 2000],
  ['TEN', 1000],
  ['FIVE', 500],
  ['ONE', 100],
  ['QUARTER', 25],
  ['DIME', 10],
  ['NICKEL', 5],
  ['PENNY', 1]
]);

function checkCashRegister(price, cash, cid) {
  var change = (floatT2H(cash)) - (floatT2H(price));
  var change_flt = change / 100;

  var total = 0;

  // turn cid into how much money we has..
  var registar = new Map(cid.map(([deno, totes]) => {
    var flated = floatT2H(totes);
    total += flated;
    return [deno, flated / deno_map.get(deno)];
  }));

  // early cases 
  if (total < change) {
    return "Insufficient Funds";
  }

  if (change === total) {
    return "Closed";
  }


  var result = new Map();
  deno_map.forEach((value, d) => {
    while (change >= value && change !== 0) {
      if (registar.get(d) !== 0) {
        registar.set(d, registar.get(d) - 1);
        (result.has(d)) ? result.set(d, result.get(d) + 1): result.set(d, +1);
        change -= value;
      } else {
        break;
      }
    }
  });

  var change_ret = [];
  var change_total = 0;

  // convert to moneys back
  result.forEach((c, d) => {
    const change_money = floatH2T(c * deno_map.get(d));
    change_ret.push([d, change_money]);
    change_total += change_money;
  });

  if (change_flt > change_total) {
    return "Insufficient Funds";
  }


  console.log(change_ret);
  return change_ret;
}


function floatT2H(float) {
  return +(float.toFixed(2) + '').replace('.', '');
}

function floatH2T(hundreth) {
  return parseFloat((hundreth / 100).toFixed(2));
}