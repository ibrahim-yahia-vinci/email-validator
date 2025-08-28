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
function hasNoSpaces(s) { return !/\s/.test(s); }

function validateEmail(email) {
  if (typeof email !== 'string') return false;
  if (!hasNoSpaces(email)) return false;
  if (!email.includes('@')) return false;

  const parts = email.split('@');
  if (parts.length !== 2) return false; // éviter plusieurs @
  const [local, domain] = parts;

  if (!hasDomainDotNotLast(domain)) return false;

  return true;
}
module.exports = validateEmail;
