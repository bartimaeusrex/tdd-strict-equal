const strictEqual = (a, b) => {

  if (Number(a) == Number(b) && a == b) {
    return true
  }
  else {
    return false
  }
}

module.exports = strictEqual