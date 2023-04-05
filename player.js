class player{
    constructor(){
    this.name = 'Player One'
    this.maxHealth = 500
    this.currentHealth = this.maxHealth
    this.attack = 50
    this.def = 20
    this.imageSrc= `assets/character.jpg`
    this.imgAlt='this is an image of the player character'
    this.bossesDefeated = 0
    }

    getStronger(){
        this.maxHealth = this.maxHealth + 50
        this.attack = this.attack + 5
        this.def = this.def + 5
        this.bossesDefeated ++
        this.currentHealth += 50
    }
    // heal(){
    //     if(this.currentHealth <= (this.maxHealth - 50) && this.currentHealth > 0){
    //         console.log()
    //         this.currentHealth = this.currentHealth + 50
    //     }else{
    //         console.log(this.maxHealth)
    //         this.currentHealth = this.maxHealth
    //         console.log(this.currentHealth)
    //     }
    // }


}