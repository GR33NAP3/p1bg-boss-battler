
// creates all the monster objects and sets them to one array to be used later

const dusty = new monster('dusty',200, 45, 5,'earth','wind')
const firapede = new monster('firapede',150, 35, 15,'water','fire')
const golem = new monster('golem',400, 25, 25,'wind', 'earth')
const icemaw = new monster('icemaw',350 ,30, 20,'fire', 'water')
const mothy = new monster('mothy',100, 40, 10,'fire','wind')
const serpent = new monster('serpent',250,35,15,'earth','water')
const thigar = new monster('thigar',300, 50, 0,'water','fire')
const trent = new monster('trent',450,21,29,'fire','earth')

// array to hold the monster objects so they can be accessed 
const monsters=[dusty, firapede, golem, icemaw, mothy, serpent, thigar, trent]

// summons monster picks a random monster from the array of monsters
function summonMonster(){
  let currentMonster = monsters[(Math.random()*monsters.length)|0]
  return currentMonster
}


function main(){
    let currentMonster = summonMonster()
    const playerChar = new player()

    //sets the image for the monster
    const enemyPic = document.getElementById('enemyPic')
    function setEnemyPic(){
        enemyPic.src= currentMonster.imageSrc
        enemyPic.alt = currentMonster.imageAlt
        enemyPic.append()
    }

    //sets the health bar variables
    const enemyHealthBar = document.getElementById('enemyHealthBar')
    const enemyHealth = document.getElementById('enemyHealth')
    const enemyHealthLabel = document.createElement('h2')
    const enemyBeaten = document.createElement('h2')

    function setEnemyHealth(){
        enemyHealthBar.value =currentMonster.currentHealth
        enemyHealthBar.max = currentMonster.maxHealth
        enemyHealthBar.append()
    
        //sets the enemy health number
        enemyHealthLabel.style.margin = 'auto'
        enemyHealthLabel.textContent = `Health ${currentMonster.currentHealth} / ${currentMonster.maxHealth}`
        enemyHealth.append(enemyHealthLabel)

        //sets the visual for how many times theyve been beaten
        enemyBeaten.style.margin = 'auto'
        enemyBeaten.textContent = `Beaten ${currentMonster.timesDefeated} time(s)`
        enemyHealth.append(enemyBeaten)
    }

    //sets the players image
    const playerPic = document.getElementById('playerPic')
    function setplayerPic(){
        playerPic.src= playerChar.imageSrc
        playerPic.alt= playerChar.imageAlt
        playerPic.append()
    }

    //sets the player health Bar
    const playerHealthBar = document.getElementById('playerHealthBar')
    const playerHealth = document.getElementById('playerHealth')
    const playerHealthLabel = document.createElement('h2')
    const monstersBeaten = document.createElement('h2')

    function setPlayerHealth(){
        playerHealthBar.value = playerChar.currentHealth
        playerHealthBar.max = playerChar.maxHealth
        playerHealthBar.append()

        //shows the player health numbers
        playerHealthLabel.textContent = `Health ${playerChar.currentHealth} / ${playerChar.maxHealth}`
        playerHealth.append(playerHealthLabel)
        //shows number of monsters defeated
        monstersBeaten.textContent = `bosses beaten ${playerChar.bossesDefeated}`
        playerHealth.append(monstersBeaten)
    }

    //wind attack
    const windAttack = document.getElementById('windAttack')
    windAttack.addEventListener('click',async () => {
        doDamage(playerChar,currentMonster, 'wind', enemyPic)
        await sleep(500)
        isDead()
    })
    //earth attack
    const earthAttack = document.getElementById('earthAttack')
    earthAttack.addEventListener('click',async () => {
        doDamage(playerChar,currentMonster, 'earth', enemyPic)
        await sleep(500)
        isDead()
        
    })
    // fire attack
    const fireAttack = document.getElementById('fireAttack')
    fireAttack.addEventListener('click',async () => {
        doDamage(playerChar,currentMonster, 'fire', enemyPic)
        await sleep(500)
        isDead()
    })
    //water attack
    const waterAttack = document.getElementById('waterAttack')
    waterAttack.addEventListener('click',async () => {
        doDamage(playerChar,currentMonster, 'water', enemyPic)
        await sleep(500)
        isDead()
    })

    //checks if monster is dead
    async function isDead(){
        if(currentMonster.currentHealth > 0){
            setEnemyHealth()
            takeDamage(playerChar,currentMonster,playerPic)
                if(playerChar.currentHealth<=0){
                    // window.alert(`Game Over congradulations you beat ${playerChar.bossesDefeated} boss(es)`)
                    showPopup(playerChar)
                    await sleep(5000)
                    location.reload()
                }
            setPlayerHealth()
        }else if(currentMonster.currentHealth <= 0){
            currentMonster.getStronger()
            playerChar.getStronger()
            newRound()
        }
    }
    // function for showing the popup
    function showPopup(playerChar){
        const popup = document.getElementById('gameOverPopup');
        popup.textContent=`Game Over congratulations you've beaten ${playerChar.bossesDefeated} boss(es)`
        popup.append()
        popup.classList.toggle('show')
    }
    //sets a new monster
    function newRound(){
        currentMonster = summonMonster()
        setEnemyHealth()
        setPlayerHealth()
        setEnemyPic()
        setplayerPic()
    }
    newRound()
}
//puts a half second break before player takes damage to help show turns
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}
window.onload= async()=>{
    main()
}