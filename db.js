// Simule l'accès à la base de données
async function getFirstUser() {
    // Normalement ici on ferait une vraie requête SQL
    return { id: 1, name: 'Alice' };
  }
  
  module.exports = { getFirstUser };
  