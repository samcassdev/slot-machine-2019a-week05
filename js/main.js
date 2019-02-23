var total = 100;

document.getElementById('minBet').addEventListener("click", function(){
  //set reel values
  var reel1 = randomReel()
  var reel2 = randomReel()
  var reel3 = randomReel()
  //console.log(reel1,reel2,reel3)
  //conditional to update total value
  if( checkMatch(reel1,reel2,reel3) ){
    total = total + 25;
  }else{
    total = total - 1;
  }
  //update dom with new total
  document.getElementById('total').innerHTML = total;
});

document.getElementById('maxBet').addEventListener("click", function(){
  //set reel values
  // conditional to update total value
  var reel1 = randomReel()
  var reel2 = randomReel()
  var reel3 = randomReel()
  //console.log(reel1,reel2,reel3)
  //conditional to update total value
  if( checkMatch(reel1,reel2,reel3) ){
    total = total + 250;
  }else{
    total = total - 25;
  }
  //update dom with new total
  document.getElementById('total').innerHTML = total;
});

//choose random value for the reel
function randomReel(){
  // 1 ut of 5

  var choice = Math.random()
  if (choice <= .2){
    choice = "cherry"
  }else if(choice <= .4){
    choice = "bar"
  }else if(choice <= .6){
    choice = "seven"
  }else if(choice <= .8){
    choice = "bell"
  }else{
    choice = "moneyBag"
  }
  //return the value
  return choice;

}
//compare reels to find if they are a winner
function checkMatch(reel1,reel2,reel3){
  if( reel1 === reel2 && reel1 === reel3 ){
    return true
  }else{
    return false
  }
}
//return true or false
