import { test, expect } from '@playwright/test';

const heroHeadingSelector = 'main .hero h1';
test.describe('Homepage experience', () => {
  test('renders hero highlights', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator(heroHeadingSelector)).toContainText('Marco');
    await expect(page.locator('.hero__typing')).toBeVisible();
    await expect(page.locator('.hero__highlight')).toHaveCount(3);
  });

  test('language toggle switches to English copy', async ({ page }) => {
    await page.goto('/');
    await page.click('[data-locale-target]');
    await page.waitForURL('**/en/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator(heroHeadingSelector)).toContainText("Hi, I'm Marco.");
  });

  test('theme toggle flips between dark and light modes', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    const initialTheme = (await html.getAttribute('data-theme')) ?? 'dark';
    await page.click('[data-theme-toggle]');
    const expectedTheme = initialTheme === 'light' ? 'dark' : 'light';
    await expect(html).toHaveAttribute('data-theme', expectedTheme);
  });
});
