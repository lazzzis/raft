import axios from 'axios'

const request = axios.create()

// TODO
const list: string[] = []

export function appendLogsToOthers (log = {}): Array<Promise<any>> {
  return list.map((url) => request.post(url, log))
}

export function requestVoteFromOthers (): Array<Promise<any>> {
  return list.map((url) => request.post(url))
}
