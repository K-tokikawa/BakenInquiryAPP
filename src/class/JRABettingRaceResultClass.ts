export default class JRABettingRaceResultClass {
    public static search単勝 = /単勝/
    public static search複勝 = /複勝/
    public static search馬連 = /馬連/
    public static search枠連 = /枠連/
    public static search馬単 = /馬単/
    public static searchワイド = /ワイド/
    public static search三連複 = /3連複/
    public static search三連単 = /3連単/

    public totalBet単勝: number
    public totalBet複勝: number
    public totalBet馬連: number
    public totalBet枠連: number
    public totalBet馬単: number
    public totalBetワイド: number
    public totalBet三連複: number
    public totalBet三連単: number
    public totalBet: number

    public totalReturn単勝: number
    public totalReturn複勝: number
    public totalReturn馬連: number
    public totalReturn枠連: number
    public totalReturn馬単: number
    public totalReturnワイド: number
    public totalReturn三連複: number
    public totalReturn三連単: number
    public totalReturn: number

    public countBet単勝 : number
    public countBet複勝 : number
    public countBet馬連 : number
    public countBet枠連 : number
    public countBet馬単 : number
    public countBetワイド: number
    public countBet三連複: number
    public countBet三連単: number
    public countBetTotal: number

    public countReturn単勝: number
    public countReturn複勝: number
    public countReturn馬連: number
    public countReturn枠連: number
    public countReturn馬単: number
    public countReturnワイド: number
    public countReturn三連複: number
    public countReturn三連単: number
    public countReturnTotal: number

    constructor() {
        this.totalBet単勝 = 0
        this.totalBet複勝 = 0
        this.totalBet馬連 = 0
        this.totalBet枠連 = 0
        this.totalBet馬単 = 0
        this.totalBetワイド = 0
        this.totalBet三連複 = 0
        this.totalBet三連単 = 0
        this.totalBet = 0

        this.totalReturn単勝 = 0
        this.totalReturn複勝 = 0
        this.totalReturn馬連 = 0
        this.totalReturn枠連 = 0
        this.totalReturn馬単 = 0
        this.totalReturnワイド = 0
        this.totalReturn三連複 = 0
        this.totalReturn三連単 = 0
        this.totalReturn = 0

        this.countBet単勝 = 0
        this.countBet複勝 = 0
        this.countBet馬連 = 0
        this.countBet枠連 = 0
        this.countBet馬単 = 0
        this.countBetワイド = 0
        this.countBet三連複 = 0
        this.countBet三連単 = 0
        this.countBetTotal = 0
        this.countReturn単勝 = 0
        this.countReturn複勝 = 0
        this.countReturn馬連 = 0
        this.countReturn枠連 = 0
        this.countReturn馬単 = 0
        this.countReturnワイド = 0
        this.countReturn三連複 = 0
        this.countReturn三連単 = 0
        this.countReturnTotal = 0
    }
}
