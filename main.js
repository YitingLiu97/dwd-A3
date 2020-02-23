//get photos from Flickr
/***click the button and REMOVE an element on the page **/
window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById("submit");
  button.onclick = buttonHandler;

});

let tags;
let APIKey = "1f761e19e3a3928e3438c53dd17b82c5";
// let tags ="cat";
let perPageLimits = 10;
let farmid = [];
let serverid = [];
let id = [];
let secret = [];



async function buttonHandler() {
  tags = document.getElementById("textInput").value;
  console.log(tags);

  let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${tags}&safe_search=1&per_page=${perPageLimits}&page=2&format=json&nojsoncallback=1`;

  const response = await fetch(url);
  const results = await response.json();
  // console.log(photos.photos.photo[0].id);

  let photos = results.photos.photo;
  // let photosLength = photos.length;

  let photoURL = [];

  for (let i = 0; i < photos.length; i++) {
    farmid = photos[i].farm;
    serverid = photos[i].server;
    secret = photos[i].secret;
    id = photos[i].id;
    photoURL.push(`https://farm${farmid}.staticflickr.com/${serverid}/${id}_${secret}.jpg`);
   
    for (let l=0; l<photoURL.length;l++){
      let onepic = document.createElement("img");
      document.getElementById("pictures").appendChild(onepic);
      onepic.src=`${photoURL[l]}`;
    }
    }

  
    
    }   