var total = 100;

document.getElementById('minimumBet').addEventListener("click", function(){
  //set values for each reel
  var firstReel = randomTotal()
  var secondReel = randomTotal()
  var thirdReel = randomTotal()
  //console.log firstReel, secondReel, and thirdReel
  //conditional -- update the total value
  if( totalEquals(firstReel, secondReel, thirdReel) ){
    total = total + 25;
  }else{
    total = total - 1;
  }
  //reveal the new total in the DOM
  document.getElementById('total').innerHTML = total;
});

document.getElementById('maximumBet').addEventListener("click", function(){
  //set values for each reel
  //conditional -- update the total value
  var firstReel = randomTotal()
  var secondReel = randomTotal()
  var thirdReel = randomTotal()
  //console.log firstReel, secondReel, and thirdReel
  //conditional -- update the total value
  if( totalEquals(firstReel, secondReel, thirdReel)){
    total = total + 150;
  }else{
    total = total - 25;
  }
  //update the DOM with the total value
  document.getElementById('total').innerHTML = total;
});

//set random values for each reel
function randomTotal(){

  var result = Math.random()
  if (result <= .3){
    result = "Gryffindor"
  }else if(result <= .6){
    result = "Hufflepuff"
  }else if(result <= .9){
    result = "Ravenclaw"
  }else if(result <= .12){
    result = "Slytherin"
  }else{
    result = "Silly Muggle"
  }
  //update the DOM with the sorting lottery result
  document.getElementById('sorting').innerHTML = result;


}
//compare each reel to assist with making the sorting decision
function totalEquals(firstReel, secondReel, thirdReel){
  if( firstReel === secondReel && firstReel === thirdReel ){
    return true
  }else{
    return false
  }
}
