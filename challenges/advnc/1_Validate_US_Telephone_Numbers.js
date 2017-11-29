const valid_formats = {
  // without country codes
  local: [
    '###-###-####',
    '##########',
    '(###)###-####'
  ],
  // with country codes
  inter: [
    '# ###-###-####',
    '#(###)###-####',
    '# (###) ###-####',
    '# ### ### ####',
  ]
};

function telephoneCheck(str) {
  var format = str.slice().replace(/[0-9]/g, '#');

  if (valid_formats.local.includes(format)) {
    return true;
  }
  if (valid_formats.inter.includes(format)) {
    return str[0] === '1';
  }
  return false;
}



telephoneCheck("555-555-5555");
