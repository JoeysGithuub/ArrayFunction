const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const planetString = (planets) => {
const planetEl = document.getElementById("planets")
const par = document.createElement('p')
par.textContent = `${planets}`
planetEl.appendChild(par)
}


planets.forEach(planetString)

const captialPlanet = planets.map(function (planet) {
  switch (planet) {
      case "mercury":
          return "Mercury"
          break
      case "venus":
          return "Venus"
          break
      case "earth":
          return "Earth"
          break
      case "mars":
          return "Mars"
          break
      case "jupiter":
          return "Jupiter"
          break
      case "saturn":
          return "Saturn"
          break
      case "uranus":
          return "Uranus" 
          break
      case "neptune":
          return "Neptune"
          break
  }
})
console.log(captialPlanet);

const planetsWithE = planets.filter(planet => {
  const E = planet.includes('e')
  return E
})

console.log(planetsWithE)

const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const allWords = words.reduce(
  (currentTotal, next) => currentTotal + '' '' + next
)

console.log(allWords)



//     Use the map method to create a new array where the
//     first letter of each planet is capitalized. Use the
//     `toUpperCase()` method on strings.

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// */


// /*
//     Use the filter method to create a new array that
//     contains planets with the letter 'e'. Use the `includes()`
//     method on strings.

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// */


// // Use the reduce method to create a sentence from the words in the following array
// const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]