// damage calculator for monsters taking damage
function doDamage(playerChar, currentMonster, attackType, enemyPic){
    let damageToMonster = playerChar.attack - currentMonster.def

    if(attackType === currentMonster.weekness){
        damageToMonster = damageToMonster * 2
    }else if(attackType === currentMonster.strength){
        damageToMonster = damageToMonster * .5
    }
    shake(enemyPic)
    return currentMonster.currentHealth = currentMonster.currentHealth - damageToMonster
}
//damage calculator for player taking damage
function takeDamage(playerChar,currentMonster, playerPic){
    
    if((currentMonster.attack - playerChar.def)>0){
        playerChar.currentHealth = playerChar.currentHealth - (currentMonster.attack - playerChar.def)
    }
    shake(playerPic)
}

//sets up to move the images a little to show it got hit
const wiggletime = 100;

function shake(el) {
    el.classList.add('rotateable');
    el.style.marginLeft = '20px';
  
    setTimeout(function() {
      el.style.marginLeft = '-20px';
      setTimeout(function() {
        el.style.marginLeft = '0px';
      }, wiggletime);
    }, wiggletime);
  
    return true;
  }


// function sleep(time){
//     return new Promise(resolve => {
//         setTimeout(resolve, time)
//     })  
// }