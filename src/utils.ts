export async function delay (timeout: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
