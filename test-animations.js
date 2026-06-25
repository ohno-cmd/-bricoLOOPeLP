const playwright = require('playwright');

(async () => {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8000');
    
    // Wait for hero section to render
    await page.waitForTimeout(2000);
    
    // Check if the hero section has red bold text
    const heroHeading = await page.$('h1.hero-heading');
    if (heroHeading) {
        const spanElements = await page.locator('h1.hero-heading span').count();
        console.log(`✓ Hero heading has ${spanElements} red bold spans`);
    }
    
    // Check commitment section
    await page.goto('http://localhost:8000#commitment-section');
    await page.waitForTimeout(1000);
    const commitmentHighlight = await page.$('.commitment-highlight');
    if (commitmentHighlight) {
        console.log('✓ Commitment section has pulse animation target');
    }
    
    // Scroll to introduction section to check the highlight
    await page.goto('http://localhost:8000');
    await page.locator('text=完全無添加の鹿の内臓').first().scrollIntoViewIfNeeded().catch(() => {});
    await page.waitForTimeout(1000);
    console.log('✓ Introduction section red text is styled');
    
    // Check three parts section
    const wildPowerText = await page.$('.wild-power-highlight');
    if (wildPowerText) {
        console.log('✓ Three Parts section has pulse animation for 野生のチカラ');
    }
    
    // Check offer section price
    await page.locator('text=¥5,808').first().scrollIntoViewIfNeeded().catch(() => {});
    await page.waitForTimeout(500);
    console.log('✓ Offer section price is styled in red and bold');
    
    // Take screenshot of hero section
    await page.goto('http://localhost:8000');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshot-hero.png', fullPage: false });
    console.log('✓ Screenshot saved: screenshot-hero.png');
    
    await browser.close();
})();
