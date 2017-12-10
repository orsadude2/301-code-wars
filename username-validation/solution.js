function validateUsr(username) {
  res = /[abcdefghijklmnopqrstuvwxyz123456789_]/g.test(username) 
  return res;
  }