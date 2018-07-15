import { Candidate } from './Candidate'
import { BaseMachine } from './BaseMachine'
import { randomTime } from '../utils'

export interface IFollower {
  startElection ()
  upgradeToCandidate (): Candidate
  onWithoutHeartbeat ()
}

export class Follower extends BaseMachine implements IFollower {
  timer: NodeJS.Timer
  nextMachine: BaseMachine = null

  async startElection () {
    this.nextMachine = this.upgradeToCandidate()
    this.server.close()
  }

  onWithoutHeartbeat () {
    this.startElection()
  }

  upgradeToCandidate (): Candidate {
    // TODO
    return new Candidate()
  }

  onAppendEntries () {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.startElection()
    }, randomTime())
  }

  onRequestVote () {
    // TODO
  }

  run () {
    this.timer = setTimeout(() => {
      this.startElection()
    }, randomTime())
    return new Promise((resolve) => {
      this.server.on('close', () => resolve(this.nextMachine))
    }) as Promise<BaseMachine>
  }
}
