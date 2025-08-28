function validateEmail(email) {
  if (typeof email !== 'string') return false;
  return email.includes('@'); // on ajoute les autres règles dans les prochains commits
}
module.exports = validateEmail;
