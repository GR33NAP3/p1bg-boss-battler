//creates the player class to hold the info
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

    //function in the class to make the caracter stronger when defeating a boss
    getStronger(){
        this.maxHealth = this.maxHealth + 50
        this.attack = this.attack + 5
        this.def = this.def + 5
        this.bossesDefeated ++
        this.currentHealth += 50
    }
}