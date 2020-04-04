var gameData = {
  dust: 0,
  dustPerClick: 1,
  dustPerClickCost: 10
}

function collectDust() {
	gameData.dust += gameData.dustPerClick
	document.getElementById("dustCollected").innerHTML = gameData.dust + " Dust Collected "
}

function buyDustPerClick() {
  if (gameData.dust >= gameData.dustPerClickCost) {
    gameData.dust -= gameData.dustPerClickCost
    gameData.dustPerClick += 1
    gameData.dustPerClickCost *= 2
    document.getElementById("dustCollected").innerHTML = gameData.dust + " Dust Collected "
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Duster (Currently Tier " + gameData.dustPerClick + ") Cost: " + gameData.dustPerClickCost + " Dust"
  }
}

var mainGameLoop = window.setInterval(function() {
	collectDust()
}, 1000)
