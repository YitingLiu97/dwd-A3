//get photos from Flickr
/***click the button and REMOVE an element on the page **/
window.addEventListener('DOMContentLoaded', () => {
    //   const button = document.getElementById("submit");
    //   button.onclick = buttonHandler;
    const input = document.getElementById("textInput");
    //when ENTER key is pressed, show the images 
    input.addEventListener('keydown', function (e) {
        if (e.keyCode == 13) {
            console.log('enter key pressed');
            buttonHandler();
        }
    });
});

let tags;
let APIKey = "1f761e19e3a3928e3438c53dd17b82c5";
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

    let photos = results.photos.photo;
    let photoURL = [];

    photos.forEach(photo => {
        farmid = photo.farm;
        serverid = photo.server;
        secret = photo.secret;
        id = photo.id;
        photoURL.push(`https://farm${farmid}.staticflickr.com/${serverid}/${id}_${secret}.jpg`);
    });

    photoURL.forEach(url => {
        let onepic = document.createElement("img");
        document.getElementById("pictures").appendChild(onepic);
        onepic.src = `${url}`;
    });


    //how to get the updated value from the textbox - show the random images 



}   