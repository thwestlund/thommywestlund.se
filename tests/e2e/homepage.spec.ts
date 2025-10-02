import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Homepage', () => {
  test('should load homepage with correct title', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page loads correctly
    await expect(page).toHaveTitle(/Thommy Westlund/);
    
    // Check if main header is present
    await expect(page.getByText('Thommy Westlund')).toBeVisible();
  });

test.describe('Homepage', () => { 
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

  /*
  test('should display profile image', async ({ page }) => {
    await page.goto('/');
    
    // Check if profile image is present and visible
    const profileImage = page.locator('img').first();
    await expect(profileImage).toBeVisible();
    await expect(profileImage).toHaveAttribute('src', /me\.jpg/);
  });

  test('should show skills section', async ({ page }) => {
    await page.goto('/');
    
    // Check if skills section is present
    await expect(page.getByText('Färdigheter')).toBeVisible();
    
    // Check if skills are displayed
    const skillsSection = page.locator('#skills');
    await expect(skillsSection).toBeVisible();
  });

  test('should toggle show more/fewer skills', async ({ page }) => {
    await page.goto('/');
    
    // Find and click the show more skills button
    const toggleButton = page.getByText(/Visa fler färdigheter|Visa färre färdigheter/);
    await expect(toggleButton).toBeVisible();
    
    // Click to show more skills
    const initialButtonText = await toggleButton.textContent();
    await toggleButton.click();
    
    // Check that button text changed
    await expect(toggleButton).not.toHaveText(initialButtonText || '');
  });

  test('should have navigation to other sections', async ({ page }) => {
    await page.goto('/');
    
    // Check if navigation elements exist (assuming there's a nav menu)
    const navigation = page.locator('nav, header').first();
    if (await navigation.isVisible()) {
      await expect(navigation).toBeVisible();
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE size
    await page.goto('/');
    
    // Check if content is still visible on mobile
    await expect(page.getByText('Thommy Westlund')).toBeVisible();
    await expect(page.getByText('Färdigheter')).toBeVisible();
  });

  test('should scroll to skills section', async ({ page }) => {
    await page.goto('/');
    
    // Look for skills section
    const skillsSection = page.locator('#skills');
    await expect(skillsSection).toBeVisible();
    
    // Scroll to skills section
    await skillsSection.scrollIntoViewIfNeeded();
    await expect(skillsSection).toBeInViewport();
  });*/
});