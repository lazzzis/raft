import { ICandidate } from './Candidate'

export interface IFollower {
  startElection ()
  upgradeToCandidate (): ICandidate
}
