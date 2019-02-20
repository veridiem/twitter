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
  if(counterTweet === tweetLength) {
    tweetButton.setAttribute('disabled', '');
  }
  else{
    tweetButton.removeAttribute('disabled');
  }
}