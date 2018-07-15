import { IFollower, Follower } from './Follower'
import { BaseMachine } from './BaseMachine'

export interface ILeader {
  heartbeat ()
  downgradeToFollower (): Follower
}

export class Leader extends BaseMachine implements ILeader {
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
    return new Promise((resolve) => {
      this.server.on('close', () => {
        resolve(new Leader())
      })
    }) as Promise<BaseMachine>
  }
}
