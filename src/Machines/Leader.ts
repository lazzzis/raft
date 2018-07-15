import { IFollower } from './Follower'

export interface ILeader {
  heartbeat ()
  downgradeToFollower (): IFollower
}
