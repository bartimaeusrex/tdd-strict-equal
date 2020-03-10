const strictEqual = (a, b) => {

  if (typeof(a) == typeof(b) && a == b) {
    return true
  }
  else {
    return false
  }
}

module.exports = strictEqual