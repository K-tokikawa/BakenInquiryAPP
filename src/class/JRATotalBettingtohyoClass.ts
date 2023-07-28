import JRABettingRaceResultClass from "./JRABettingRaceResultClass"
export interface dictionary {
    readonly [key: string | number]: JRABettingRaceResultClass
}
export interface DicDayRascetohyo {
    readonly [key: string | number]: dictionary
}


export default class JRATotalBettingtohyoClass extends JRABettingRaceResultClass {
    public dic: DicDayRascetohyo
    public betrace: number
    public hitrace:number
    constructor() {
        super()
        this.dic = {}
        this.betrace = 0
        this.hitrace = 0
    }
}