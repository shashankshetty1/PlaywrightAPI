import { test, expect } from '@playwright/test';

test.describe('GET /backend/settings', () => {
  test('returns 200 with users and personas', async ({ request }) => {
    const response = await request.get('https://cw.vriodigital.com/backend/settings');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();

    expect(Array.isArray(body.users)).toBe(true);
    expect(body.users.length).toBeGreaterThan(0);

    for (const user of body.users) {
      expect(user).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          email: expect.any(String),
          role_id: expect.any(String),
          role_label: expect.any(String),
        })
      );
    }

    const loggedInUser = body.users.find(
      (user: { email: string }) => user.email === 'adaeze.okonjo@vriodigital.com'
    );
    expect(loggedInUser).toBeDefined();
    expect(loggedInUser.role_id).toBe('platform_admin');

    expect(Array.isArray(body.personas)).toBe(true);
    expect(body.personas.length).toBeGreaterThan(0);

    for (const persona of body.personas) {
      expect(persona).toEqual(
        expect.objectContaining({
          role_id: expect.any(String),
          label: expect.any(String),
          nav: expect.any(Object),
        })
      );
    }
  });
});
