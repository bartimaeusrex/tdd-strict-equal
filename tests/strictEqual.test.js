const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictEqual')


describe('strictEqual', () => {

  it('returns true if data types are not equal', () => {
    // create test data
    const checkNumberOne = 5
    const checkNumberTwo = '5'

    // call the function with the test data
    const checkResult = strictEqual(checkNumberOne, checkNumberTwo)

    // test data expected to return true; types are not equal
    expect(checkResult).to.equal(true)
  })
  it('returns true if strings are equal', () => {
    // create test data
    const checkNumberOne = '5'
    const checkNumberTwo = '5'

    // call the function with the test data
    const checkResult = strictEqual(checkNumberOne, checkNumberTwo)

    // test data expected to return true; value and type are equal
    expect(checkResult).to.equal(true)
  })
  it('returns true if strings are not equal', () => {
    // create test data
    const checkNumberOne = '5'
    const checkNumberTwo = '-5'

    // call the function with the test data
    const checkResult = strictEqual(checkNumberOne, checkNumberTwo)

    // test data expected to return false; strings are not equal
    expect(checkResult).to.equal(false)
  })
  it('returns true if numbers are equal', () => {
    // create test data
    const checkNumberOne = 5
    const checkNumberTwo = 5

    // call the function with the test data
    const checkResult = strictEqual(checkNumberOne, checkNumberTwo)

    // test data expected to return true; numbers are equal
    expect(checkResult).to.equal(true)
  })
})