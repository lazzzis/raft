import Chance = require('chance')
const chance = new Chance()

export async function delay (timeout: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export async function delayWithRandom () {
  return delay(randomTime())
}

export function randomTime () {
  return chance.integer({
    min: 300,
    max: 600
  })
}
