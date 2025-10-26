import { test, expect } from '@playwright/test';

const heroHeadingSelector = 'main .hero h1';
const projectsSectionSelector = '#projects';

test.describe('Homepage experience', () => {
  test('renders hero, highlights and projects section', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator(heroHeadingSelector)).toContainText('Marco');
    await expect(page.locator('.hero__typing')).toBeVisible();
    await expect(page.locator('.hero__highlight')).toHaveCount(3);

    await expect(page.locator(projectsSectionSelector)).toBeVisible();
    await expect(page.locator(`${projectsSectionSelector} .project-card`)).toHaveCount(3);
  });

  test('language toggle switches to English copy', async ({ page }) => {
    await page.goto('/');
    await page.click('[data-locale-target]');
    await page.waitForURL('**/?lang=en');
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
