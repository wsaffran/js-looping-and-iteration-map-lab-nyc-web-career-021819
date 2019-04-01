function lowerCaseDrivers(arr) {
  const newArr = arr.map(function(cb) { return cb.toLowerCase() })
  return newArr;
}

function nameToAttributes(arr) {
  const newArr = arr.map(function(name) {
    let first;
    let last;
    first = name.split(" ")[0];
    last = name.split(" ")[1];
    return {firstName: first, lastName: last}
  })
  return newArr;
}

function attributesToPhrase(arr) {
  const newArr = arr.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
  return newArr;
}
