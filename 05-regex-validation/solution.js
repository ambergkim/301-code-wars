function validateUsr(username) {
  return  (new RegExp(/^[a-z0-9_]{4,15}$/, 'g')).test(username);
}