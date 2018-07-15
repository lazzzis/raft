import Koa = require('koa')
import * as http from 'http'
import koaRouter = require('koa-router')

export interface IBaseMachine {
  state: State
  server: http.Server
  run (): Promise<BaseMachine>
  timer: NodeJS.Timer
  nextMachine: BaseMachine
  onRequestVote (): void
  onAppendEntries (): void
}

export enum State {
  Candidate = 'Candidate',
  Follower = 'Follower',
  Leader = 'Leader'
}

export abstract class BaseMachine implements IBaseMachine {
  currentTerm = -1
  votedFor = -1
  state: State = State.Follower
  server: http.Server
  timer: NodeJS.Timer = {} as NodeJS.Timer
  nextMachine: BaseMachine = {} as BaseMachine

  constructor () {
    const app = new Koa()
    const router = new koaRouter({
      prefix: '/api'
    })

    router.get('/appendEntries', (ctx, next) => {
      this.onAppendEntries()
      return next()
    })

    router.get('/requestVote', (ctx, next) => {
      this.onRequestVote()
      return next()
    })

    app.use(router.routes()).use(router.allowedMethods())

    this.server = app.listen(3000)
  }

  abstract run (): Promise<BaseMachine>
  abstract onRequestVote (): void
  abstract onAppendEntries (): void
}
