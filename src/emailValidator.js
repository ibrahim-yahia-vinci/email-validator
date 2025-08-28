function hasDomainDotNotLast(domain) {
  const lastDot = domain.lastIndexOf('.');
  return lastDot > 0 && lastDot < domain.length - 1;
}

function validateEmail(email) {
  if (typeof email !== 'string') return false;
  if (!email.includes('@')) return false;

  const [local, domain] = email.split('@');
  // domaine avec un point, pas en dernier — autres règles à venir
  if (!hasDomainDotNotLast(domain)) return false;

  return true;
}
module.exports = validateEmail;
