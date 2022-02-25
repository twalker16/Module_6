const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
    await driver.get('https://tjw-f18-module-6.herokuapp.com/')
    console.log('pulled up site')
    await driver.sleep(5000)

})

afterAll(async () => {
    await driver.quit()
    console.log('closed site')

})

test('Title shows up when page loads', async () => {
    await driver.sleep(3000)
    console.log('got here')
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking draw draws bot cards', async ()=>{
    let drawCards = await driver.findElement(By.css('#draw'))
    await drawCards.click()
    let cardChoices = await driver.findElement(By.css('#choose-header'))
    console.log(await cardChoices)
    console.log(await cardChoices.getAttribute('class'))
    await driver.sleep(6000)
    expect(await cardChoices.getAttribute('class')).not.toBe('hide')
    console.log(await cardChoices.getAttribute('class'))
})
test('clicking see all bots gives you bots', async ()=>{
    let seeAll = await driver.findElement(By.css('#see-all'))
    await seeAll.click()
    let allBots = await driver.findElement(By.css('#all-bots'))
    expect(allBots.length).toBeGreaterThan(1)
    console.log(allBots.length)
})
   