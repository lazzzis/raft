import { Follower } from './Follower'
import { Leader } from './Leader'
import { BaseMachine, State } from './BaseMachine'
import { sum } from 'ramda'

export interface ICandidate {
  startElection ()
  downgradeToFollower (): Follower
  upgradeToLeader (): Leader
}

export class Candidate extends BaseMachine implements ICandidate {
  state = State.Candidate
  nextMachine: BaseMachine = null
  timer: NodeJS.Timer

  async startElection () {
    // TODO set request api
    const results = await Promise.all(Array.from({
      length: 5
    }, () => Promise.resolve(1)))
    const total = sum(results)
    if (total > 3) {
      this.nextMachine = this.upgradeToLeader()
    } else {
      this.nextMachine = new Candidate()
    }
    this.server.close()
  }

  downgradeToFollower (): Follower {
    // TODO
    return new Follower()
  }

  upgradeToLeader (): Leader {
    // TODO
    return new Leader()
  }

  onAppendEntries () {
    this.nextMachine = this.downgradeToFollower()
    this.server.close()
  }

  onRequestVote () {
    // TODO
  }

  run () {
    this.startElection()
    return new Promise((resolve) => {
      this.server.on('close', () => {
        resolve(this.nextMachine)
      })
    }) as Promise<BaseMachine>
  }
}
