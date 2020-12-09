// Exemples de tests simples (à supprimer à terme)

import request from 'supertest';
import Server from '../src/server';

describe('Truth test', () => {
  it('should test than true == true', () => {
    expect(true).toBe(true);
  });
  it('should test that true != false', () => {
    expect(true).not.toBe(false);
  });
});

describe('Simple API test', () => {
  const app = new Server(3000).getExpress();
  it('should return "Hello World !"', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello world !');
  });
});
