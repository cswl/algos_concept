const  entityMap = { 
  '&'  : '&amp;', 
  '<'  : '&lt;' , 
  '>'  : '&gt;' , 
  '"'  : '&quot;',   
  '\'' : '&apos;', 
};

function convertHTML(str) {
  // &colon;&rpar;
 
  return str.split('').map(e=> {
    if(entityMap[e]) {
      return entityMap[e];
    }
     return e;
  }).join('');
}

convertHTML("Dolce & Gabbana");
