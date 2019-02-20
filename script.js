let boxArea = document.querySelector("#boxArea");
let tweetButton = document.querySelector("#tweetButton");
let myTweets = document.querySelector("#myTweets");


tweetButton.addEventListener('click', toTweet);

function toTweet(event){
  let addTweet = document.createElement('li');
  addTweet.textContent = boxArea.value;
  myTweets.appendChild(addTweet);
  boxArea.value = "";
}
