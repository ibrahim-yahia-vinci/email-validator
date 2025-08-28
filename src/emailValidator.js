function hasNoSpaces(s) {
  return !/\s/.test(s);   // retourne true si aucun espace
}

function hasDomainDotNotLast(domain) {
  const lastDot = domain.lastIndexOf('.');
  return lastDot > 0 && lastDot < domain.length - 1;
}

function validateEmail(email) {
  if (typeof email !== 'string') return false;

  // règle 1 : pas d'espaces
  if (!hasNoSpaces(email)) return false;

  // règle 2 : présence du @
  if (!email.includes('@')) return false;

  // éviter plusieurs @
  const parts = email.split('@');
  if (parts.length !== 2) return false;

  const [local, domain] = parts;

  // règle 3 : domaine doit contenir un '.' qui n’est pas le dernier caractère
  if (!hasDomainDotNotLast(domain)) return false;

  return true;
}

module.exports = validateEmail;
