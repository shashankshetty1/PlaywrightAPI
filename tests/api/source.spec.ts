import { test, expect } from '@playwright/test';

test.describe('GET /backend/sources', () => {
  test('returns 200 with source profiling summary', async ({ request }) => {
    const response = await request.get('https://cw.vriodigital.com/backend/sources');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();

    expect(Array.isArray(body.sources)).toBe(true);

    expect(body).toEqual(
      expect.objectContaining({
        registered_count: expect.any(Number),
        connected_sources: expect.any(Number),
        profiled_tables: expect.any(Number),
        profiled_columns: expect.any(Number),
        profiled_documents: expect.any(Number),
        profiled_entities: expect.any(Number),
        profiled_today: expect.any(Number),
        profiled_today_date: expect.any(String),
      })
    );

    expect(body.profiled_today_date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
