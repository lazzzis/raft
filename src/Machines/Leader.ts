import { Follower } from './Follower'
import { BaseMachine } from './BaseMachine'

export interface ILeader {
  heartbeat (): void
  downgradeToFollower (): Follower
}

export class Leader extends BaseMachine implements ILeader {

  intervalTimer: NodeJS.Timer = {} as NodeJS.Timer

  heartbeat () {
    // TODO
  }

  downgradeToFollower (): Follower {
    return new Follower()
  }

  onAppendEntries () {
    // TODO
  }

  onRequestVote () {
    // TODO
  }

  run () {
    this.intervalTimer = setInterval(() => {
      this.heartbeat()
    }, 300)
    return new Promise((resolve) => {
      this.server.on('close', () => {
        resolve(new Leader())
      })
    }) as Promise<BaseMachine>
  }
}
