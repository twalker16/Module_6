const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // console.log('gothere')
    let testArray = [4, 2, 0]
    test('return array of same length.', ()=>{
        expect(shuffleArray(testArray).length).toEqual(testArray.length)
    })
    test('returns in a different order than original array', ()=>{
        expect(shuffleArray(testArray)).not.toEqual(testArray)
    })
})