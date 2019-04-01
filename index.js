function lowerCaseDrivers(drivers) {
  const lowercasedDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  })
  return lowercasedDrivers;
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function(driver) {
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];
    return {firstName: first, lastName: last};
  })
  return newDrivers;
}

function attributesToPhrase(drivers) {
  const result = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
  return result;
}
