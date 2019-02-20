let boxArea = document.querySelector("#boxArea");
let tweetButton = document.querySelector("#tweetButton");
let myTweets = document.querySelector("#myTweets");
let tweetSize = document.querySelector("#tweetSize")


tweetButton.addEventListener('click', toTweet);

function toTweet(event){
  let addTweet = document.createElement('li');
  addTweet.textContent = boxArea.value;
  myTweets.appendChild(addTweet);
  boxArea.value = "";
}

boxArea.addEventListener('keyup', countTweetSize);
const tweetLength = 140;

function countTweetSize(event){
  var counterTweet = tweetLength - boxArea.value.length;
  tweetSize.textContent = counterTweet;
  if(counterTweet === tweetLength || counterTweet < 0) {
    tweetButton.setAttribute('disabled', '');
  }
  else{
    tweetButton.removeAttribute('disabled');
  }
 
}

boxArea.addEventListener('keyup', colorCounter);

function colorCounter(event){
  if(boxArea.value.length > 130){
    tweetSize.setAttribute('class', 'red');
  }
  else if(boxArea.value.length > 120){
    tweetSize.setAttribute('class', 'orange');
  }
  else{
    tweetSize.setAttribute('class', 'blue');
  }
}

boxArea.addEventListener('keyup', boxAreaResize)

function boxAreaResize(event){
  var resize = boxArea.value.split('\n');
  boxArea.setAttribute('rows', resize.length);
}
