class monster{
    constructor(name,maxHealth,attack, def ,weekness,strength){
    this.name = name
    this.maxHealth = maxHealth
    this.currentHealth = maxHealth
    this.attack = attack
    this.def = def
    this.weekness = weekness
    this.strength = strength
    this.imageSrc= `${name}.jpg`
    this.imgAlt=`this is an image of ${name}`
    }

    getStronger(){
        this.maxHealth = this.maxHealth * 2
        this.attack = this.attack * 2
        this.def = this.def * 2
    }

}