const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictEqual')


describe('strictEqual', () => {

  it('returns false if data types are not equal', () => {
    const checkOne = 5
    const checkTwo = 'a'
    const checkResult = strictEqual(checkOne, checkTwo)
    expect(checkResult).to.equal(false)
  })
  it('returns true if strings are equal', () => {
    const checkOne = '5'
    const checkTwo = '5'
    const checkResult = strictEqual(checkOne, checkTwo)
    expect(checkResult).to.equal(true)
  })
  it('returns false if strings are not equal', () => {
    const checkOne = '5'
    const checkTwo = '-5'
    const checkResult = strictEqual(checkOne, checkTwo)
    expect(checkResult).to.equal(false)
  })
  it('returns true if numbers are equal', () => {
    const checkOne = 5
    const checkTwo = 5
    const checkResult = strictEqual(checkOne, checkTwo)
    expect(checkResult).to.equal(true)
  })
})