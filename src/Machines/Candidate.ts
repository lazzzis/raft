import { IFollower } from './Follower'
import { ILeader } from './Leader'

export interface ICandidate {
  startElection ()
  downgradeToFollower (): IFollower
  upgradeToLeader (): ILeader
}
