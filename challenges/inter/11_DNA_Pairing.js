// use an object as lookup for pairs..
const pairLookup = {
A : 'T', T : 'A',
C : 'G', G : 'C'
}

function pairElement(str) {
  const pairs = [];
  str.split('').map(e=> {
    pairs.push([e, pairLookup[e]]);
  })
  return pairs;
}

pairElement("GCG");
