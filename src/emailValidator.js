function hasNoSpaces(s) {
  return !/\s/.test(s);   // true si aucun espace
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

  // split au niveau de @ et vérifier qu'il n'y en a qu'un
  const parts = email.split('@');
  if (parts.length !== 2) return false;

  const [local, domain] = parts;

  // règle 3 : non vide avant et après @
  if (!local || !domain) return false;

  // règle 4 : domaine doit contenir un '.' qui n’est pas le dernier caractère
  if (!hasDomainDotNotLast(domain)) return false;

  return true;
}

module.exports = validateEmail;
