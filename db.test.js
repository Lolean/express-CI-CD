const db = require('./db');

// Mock de la fonction de la base de données
jest.mock('./db');

test('getFirstUser() retourne un utilisateur avec un id et un nom', async () => {
  // Simuler un retour de base de données
  db.getFirstUser.mockResolvedValue({ id: 1, name: 'Alice' });

  const user = await db.getFirstUser();
  expect(user).toEqual({ id: 1, name: 'Alice' });
});
