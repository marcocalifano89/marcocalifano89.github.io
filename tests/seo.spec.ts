import { test, expect } from '@playwright/test';

test.describe('SEO artifacts', () => {
  test('serves robots.txt with sitemap reference', async ({ request }) => {
    const response = await request.get('/robots.txt');
    const body = await response.text();

    expect(response.ok()).toBeTruthy();
    expect(body).toContain('User-agent: *');
    expect(body).toContain('Allow: /');
    expect(body).toContain('Sitemap: https://marcocalifano89.github.io/sitemap.xml');
  });

  test('serves sitemap.xml with localized URLs', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    const body = await response.text();

    expect(response.ok()).toBeTruthy();
    expect(body).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(body).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
    expect(body).toContain('<loc>https://marcocalifano89.github.io/</loc>');
    expect(body).toContain('<loc>https://marcocalifano89.github.io/en/</loc>');
    expect(body).toContain(
      '<xhtml:link rel="alternate" hreflang="it" href="https://marcocalifano89.github.io/" />'
    );
    expect(body).toContain(
      '<xhtml:link rel="alternate" hreflang="en" href="https://marcocalifano89.github.io/en/" />'
    );
  });
});
