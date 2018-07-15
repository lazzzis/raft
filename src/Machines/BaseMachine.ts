export interface IBaseMachine {
  run (): BaseMachine
  onRequestVote ()
  onAppendEntries ()
}

export abstract class BaseMachine implements IBaseMachine {
  currentTerm = -1
  votedFor = -1

  abstract run (): BaseMachine
  abstract onRequestVote ()
  abstract onAppendEntries ()
}
