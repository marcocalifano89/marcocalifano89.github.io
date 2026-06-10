import { test, expect } from '@playwright/test';

const heroHeadingSelector = 'main .hero h1';
test.describe('Homepage experience', () => {
  test('renders a simplified hero with one clear proof treatment', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator(heroHeadingSelector)).toContainText('Marco');
    await expect(page.locator('.hero__typing')).toBeVisible();
    await expect(page.locator('.typing')).toHaveText(/.+/);
    await expect(page.locator('.hero__proof-strip')).toHaveCount(1);
    await expect(page.locator('.hero__proof-signal')).toHaveCount(3);
    await expect(page.locator('.hero__actions .button')).toHaveCount(1);
    await expect(page.locator('.hero__proof-card')).toHaveCount(0);
    await expect(page.locator('.hero__note-card')).toHaveCount(0);
    await expect(page.locator('.hero__focus-tag')).toHaveCount(0);
    await expect(page.locator('.hero__highlight')).toHaveCount(0);
    await expect(page.locator('.hero__image-frame source[type="image/avif"]')).toHaveCount(1);
    await expect(page.locator('.hero__image-frame source[type="image/webp"]')).toHaveCount(1);
  });

  test('renders a compact proof strip below the hero portrait', async ({ page }) => {
    await page.goto('/en/');

    const strip = page.locator('.hero__visual .hero__proof-strip');
    await expect(strip).toBeVisible();
    await expect(strip.locator('.hero__proof-signal')).toHaveCount(3);
    await expect(strip).toContainText('10+ years in enterprise delivery');
    await expect(strip).toContainText('AWS / Azure / GCP');
  });

  test('integrates the proof strip directly into the hero portrait module', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 960 });
    await page.goto('/en/');

    const frameBox = await page.locator('.hero__image-frame').boundingBox();
    const stripBox = await page.locator('.hero__proof-strip').boundingBox();

    expect(frameBox).not.toBeNull();
    expect(stripBox).not.toBeNull();

    const frameBottom = (frameBox?.y ?? 0) + (frameBox?.height ?? 0);
    const stripTop = stripBox?.y ?? 0;
    const stripWidth = stripBox?.width ?? 0;
    const frameWidth = frameBox?.width ?? 0;

    expect(Math.abs(stripTop - frameBottom)).toBeLessThan(4);
    expect(Math.abs(stripWidth - frameWidth)).toBeLessThan(4);
  });

  test('keeps certification cards on a single desktop row at wide widths', async ({ page }) => {
    await page.setViewportSize({ width: 1512, height: 982 });
    await page.goto('/en/');
    await page.locator('#certifications').scrollIntoViewIfNeeded();
    await page.waitForTimeout(250);

    const columns = await page.locator('.card-grid--cert').evaluate((element) =>
      getComputedStyle(element).gridTemplateColumns.split(' ').filter(Boolean).length
    );

    const firstBox = await page.locator('.cert-card').first().boundingBox();
    const lastBox = await page.locator('.cert-card').last().boundingBox();

    expect(columns).toBe(5);
    expect(firstBox).not.toBeNull();
    expect(lastBox).not.toBeNull();
    expect(Math.abs((firstBox?.y ?? 0) - (lastBox?.y ?? 0))).toBeLessThan(8);
  });

  test('exposes impact and approach in navigation and updates the active section', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.site-nav a[href="#impact"]')).toHaveCount(1);
    await expect(page.locator('.site-nav a[href="#approach"]')).toHaveCount(1);

    await page.evaluate(() => {
      document.querySelector('#approach')?.scrollIntoView({ block: 'start', behavior: 'instant' });
    });
    await page.waitForTimeout(400);
    await expect(page.locator('.site-nav a[href="#approach"]')).toHaveAttribute('aria-current', 'location');
  });

  test('applies active navigation state on deep-link loads', async ({ page }) => {
    await page.goto('/en/#impact');

    await page.waitForTimeout(400);
    await expect(page.locator('.site-nav a[href="#impact"]')).toHaveAttribute('aria-current', 'location');
  });

  test('accent typing copy starts with an uppercase letter in both locales', async ({ page }) => {
    for (const path of ['/', '/en/']) {
      await page.goto(path);

      const phrasesData = await page.locator('script[data-phrases]').getAttribute('data-phrases');
      const phrases = JSON.parse(phrasesData ?? '[]') as string[];
      expect(phrases.length).toBeGreaterThan(0);
      expect(phrases.every((phrase) => /^[A-Z]/.test(phrase))).toBe(true);

      const typingText = ((await page.locator('.typing').textContent()) ?? '').trim();
      expect(typingText).toMatch(/^[A-Z]/);
    }
  });

  test('keeps the impact section visually separated from the hero', async ({ page }) => {
    await page.goto('/');

    const heroBox = await page.locator('#about').boundingBox();
    const impactHeadingBox = await page.locator('#impact .section-heading').boundingBox();

    expect(heroBox).not.toBeNull();
    expect(impactHeadingBox).not.toBeNull();

    const heroBottom = (heroBox?.y ?? 0) + (heroBox?.height ?? 0);
    const impactTop = impactHeadingBox?.y ?? 0;

    expect(impactTop - heroBottom).toBeGreaterThan(16);
    expect(impactTop - heroBottom).toBeLessThan(120);
  });

  test('emits valid structured data', async ({ page }) => {
    await page.goto('/');

    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toBeTruthy();

    const structuredData = JSON.parse(jsonLd ?? '{}');
    expect(structuredData['@context']).toBe('https://schema.org');
    expect(structuredData['@type']).toBe('ProfilePage');
    expect(structuredData.url).toBe('https://marcocalifano89.github.io/');
    expect(structuredData.inLanguage).toBe('it');
    expect(structuredData.mainEntity['@type']).toBe('Person');
    expect(structuredData.mainEntity.name).toContain('Marco');
  });

  test('emits canonical and social metadata', async ({ page }) => {
    await page.goto('/en/');

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://marcocalifano89.github.io/en/'
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content',
      'https://marcocalifano89.github.io/en/'
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://marcocalifano89.github.io/assets/img/profile.jpeg'
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary_large_image'
    );
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      'content',
      'https://marcocalifano89.github.io/assets/img/profile.jpeg'
    );
  });

  test('language toggle preserves the current section hash', async ({ page }) => {
    await page.goto('/#contact');

    await expect(page.locator('[data-locale-target]')).toHaveAttribute('href', '/en/#contact');
    await page.click('[data-locale-target]');
    await page.waitForURL('**/en/#contact');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator(heroHeadingSelector)).toContainText("Hi, I'm Marco.");
  });

  test('explicit locale urls are not overridden by stored locale preference', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('locale', 'it'));

    await page.goto('/en/#contact');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveURL(/\/en\/#contact$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('fallback italian route is not overridden by stored english preference', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('locale', 'en'));

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'it');
    await expect(page.locator(heroHeadingSelector)).toContainText('Ciao, sono Marco.');
    await expect(page.locator('.site-nav a').first()).toContainText('Chi sono');
  });

  test('theme toggle flips between dark and light modes', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    const initialTheme = (await html.getAttribute('data-theme')) ?? 'dark';
    await page.click('[data-theme-toggle]');
    const expectedTheme = initialTheme === 'light' ? 'dark' : 'light';
    await expect(html).toHaveAttribute('data-theme', expectedTheme);
  });

  test('supports keyboard navigation across skill tabs', async ({ page }) => {
    await page.goto('/');

    const section = page.locator('#skills');
    await section.scrollIntoViewIfNeeded();

    const firstTab = page.locator('#skills-tab-0');
    const secondTab = page.locator('#skills-tab-1');

    await firstTab.focus();
    await page.keyboard.press('ArrowRight');

    await expect(secondTab).toBeFocused();
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#skills-pane-1')).toHaveAttribute('aria-hidden', 'false');
  });

  test('persists the selected skill tab in the URL and restores it on load', async ({ page }) => {
    await page.goto('/en/?skill=leadership-and-governance#skills');

    await expect(page.locator('#skills-tab-3')).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#skills-pane-3')).toHaveAttribute('aria-hidden', 'false');

    await page.locator('#skills-tab-1').click();
    await expect(page).toHaveURL(/\/en\/\?skill=genai-and-data#skills$/);
    await expect(page.locator('#skills-tab-1')).toHaveAttribute('aria-selected', 'true');
  });

  test('restores skill tabs through browser back and forward navigation', async ({ page }) => {
    await page.goto('/en/#skills');

    await page.locator('#skills-tab-1').click();
    await expect(page).toHaveURL(/\/en\/\?skill=genai-and-data#skills$/);

    await page.locator('#skills-tab-3').click();
    await expect(page).toHaveURL(/\/en\/\?skill=leadership-and-governance#skills$/);

    await page.locator('#skills-tab-0').click();
    await expect(page).toHaveURL(/\/en\/#skills$/);
    await expect(page.locator('#skills-tab-0')).toHaveAttribute('aria-selected', 'true');

    await page.goBack();
    await expect(page).toHaveURL(/\/en\/\?skill=leadership-and-governance#skills$/);
    await expect(page.locator('#skills-tab-3')).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#skills-pane-3')).toHaveAttribute('aria-hidden', 'false');

    await page.goBack();
    await expect(page).toHaveURL(/\/en\/\?skill=genai-and-data#skills$/);
    await expect(page.locator('#skills-tab-1')).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#skills-pane-1')).toHaveAttribute('aria-hidden', 'false');

    await page.goForward();
    await expect(page).toHaveURL(/\/en\/\?skill=leadership-and-governance#skills$/);
    await expect(page.locator('#skills-tab-3')).toHaveAttribute('aria-selected', 'true');
  });

  test('renders experience cards with explicit portfolio context lines', async ({ page }) => {
    await page.goto('/en/#experience');
    await page.locator('#experience').scrollIntoViewIfNeeded();

    await expect(page.locator('.timeline-card__context')).toHaveCount(3);
    await expect(page.locator('.timeline-card__context').first()).toContainText('generative AI');
    await expect(page.locator('.timeline-card__context').nth(1)).toContainText('Banking');
    await expect(page.locator('.timeline-card__context').nth(2)).toContainText('Media');
  });

  test('uses a structured full-width skills layout on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 960 });
    await page.goto('/en/#skills');
    await page.locator('#skills').scrollIntoViewIfNeeded();

    await expect(page.locator('.skills-pane.is-active .skills-pane__title')).toBeVisible();

    const list = page.locator('.skills-pane.is-active .skills-pane__list');
    const activeItems = page.locator('.skills-pane.is-active .skills-signal');
    const panelBox = await page.locator('.skills-panel').boundingBox();
    const listBox = await list.boundingBox();
    const firstItemBox = await activeItems.first().boundingBox();
    const lastItemBox = await activeItems.last().boundingBox();

    expect(panelBox).not.toBeNull();
    expect(listBox).not.toBeNull();
    expect(firstItemBox).not.toBeNull();
    expect(lastItemBox).not.toBeNull();
    expect((listBox?.width ?? 0) / (panelBox?.width ?? 1)).toBeGreaterThan(0.55);
    expect(((lastItemBox?.x ?? 0) + (lastItemBox?.width ?? 0)) - ((panelBox?.x ?? 0) + (panelBox?.width ?? 0))).toBeGreaterThan(-56);
    expect((lastItemBox?.width ?? 0) / (firstItemBox?.width ?? 1)).toBeGreaterThan(1.5);
  });

  test('keeps mobile skill tabs at a touch-friendly height', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/en/#skills');

    const tabHeight = await page.locator('#skills-tab-0').evaluate((element) => element.getBoundingClientRect().height);
    expect(tabHeight).toBeGreaterThanOrEqual(52);
  });

  test('updates the scroll progress bar while scrolling', async ({ page }) => {
    await page.goto('/');

    const progressBar = page.locator('.scroll-progress__bar');
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForFunction(() => {
      const bar = document.querySelector('.scroll-progress__bar');
      return bar instanceof HTMLElement && parseFloat(bar.style.width || '0') > 10;
    });

    const width = await progressBar.evaluate((element) => parseFloat((element as HTMLElement).style.width || '0'));
    expect(width).toBeGreaterThan(10);
  });

  test('back-to-top appears after scrolling and returns to the top', async ({ page }) => {
    await page.goto('/');

    const backToTop = page.locator('.back-to-top');
    await page.evaluate(() => window.scrollTo(0, 1400));

    await expect(backToTop).toHaveClass(/back-to-top--visible/);
    await backToTop.click();
    await page.waitForFunction(() => window.scrollY < 5);
  });

  test('serves the self-hosted CV from the hero download button', async ({ page, request }) => {
    await page.goto('/');

    const cvHref = '/assets/Marco.Califano.CV_en.pdf';
    await expect(page.locator('.hero__actions .button')).toHaveAttribute('href', cvHref);

    const response = await request.get(cvHref);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('pdf');
  });

  test('does not render empty certification links', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('a.cert-card__link[href=""]')).toHaveCount(0);
    await expect(page.locator('.cert-card__link--disabled')).toHaveCount(0);
    await expect(
      page.locator('article.cert-card', { hasText: 'Azure AI Fundamentals' }).locator('a.cert-card__link')
    ).toHaveAttribute(
      'href',
      'https://learn.microsoft.com/api/credentials/share/en-us/MarcoCalifano89/FB64D18989F3E67B?sharingId=CAB9C76CF28D6EAE'
    );
  });
});
