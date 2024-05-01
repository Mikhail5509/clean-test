export function calculateHealthStatus(character) {
  const healthy = 'healthy';
  const wounded = 'wounded';
  const critical = 'critical';
  
  if (character.health > 50) {
    return 'healthy';
  } else if (character.health >= 15 && character.health <= 50) {
    return 'wounded';
  } else {
    return 'critical';
  }
}