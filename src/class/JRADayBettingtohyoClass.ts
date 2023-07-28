import JRABettingRaceResultClass from "./JRABettingRaceResultClass"
interface dictionary {
    readonly [key: string | number]: JRABettingRaceResultClass
}

export default class JRADayBettingtohyoClass extends JRABettingRaceResultClass {
    public dic: dictionary
    public betrace: number
    public hitrace: number
    constructor() {
        super()
        this.dic = {}
        this.betrace = 0
        this.hitrace = 0
    }
}