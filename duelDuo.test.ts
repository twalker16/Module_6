
const { Builder, Capabilities, By } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
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