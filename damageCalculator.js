// damage calculator for monsters taking damage
function doDamage(playerChar, currentMonster, attackType){
    let damageToMonster = playerChar.attack - currentMonster.def

    if(attackType === currentMonster.weekness){
        damageToMonster = damageToMonster * 2
    }else if(attackType === currentMonster.strength){
        damageToMonster = damageToMonster * .5
    }

    return currentMonster.currentHealth = currentMonster.currentHealth - damageToMonster
}
//damage calculator for player taking damage
function takeDamage(playerChar,currentMonster){
    
    if((currentMonster.attack - playerChar.def)>0){
        playerChar.currentHealth = playerChar.currentHealth - (currentMonster.attack - playerChar.def)
    }

}

