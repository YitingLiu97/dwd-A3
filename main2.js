//get photos from Flickr
/***click the button and REMOVE an element on the page **/
window.addEventListener('DOMContentLoaded', () => {
    //   const button = document.getElementById("submit");
    //   button.onclick = buttonHandler;
    const input = document.getElementById("textInput");
    //when ENTER key is pressed, show the images 
    input.addEventListener('keydown', function(e) {
        if (e.keyCode == 13) {
            console.log('enter key pressed');
            EnterRefresh();
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
let oldTag = " ";


async function handleChange(tags) {
    if (tags == oldTag) return;
    else oldTag = tags;
    console.log(`oldtext:${oldTag}`);
    console.log(`Tag:${tags}`);

}

async function EnterRefresh() {
    tags = document.getElementById("textInput").value;
    let lasttag = document.getElementsByTagName('input')[0].value;

    console.log(`lasttag:${lasttag}`);
    console.log(`tags:${tags}`)

    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${tags}&safe_search=1&per_page=${perPageLimits}&page=2&format=json&nojsoncallback=1`;

    const response = await fetch(url);
    const results = await response.json();

    let photos = results.photos.photo;
    let photoURL = [];


    if (tags != lasttag) return;
    else { photoURL = []; }

    photos.forEach(photo => {
        farmid = photo.farm;
        serverid = photo.server;
        secret = photo.secret;
        id = photo.id;
        photoURL.push(`https://farm${farmid}.staticflickr.com/${serverid}/${id}_${secret}.jpg`);
    });

    photoURL.forEach(url => {
        let div = document.createElement("div");
        div.className = "img"; //add class name of div for the images 
        let onepic = document.createElement("img");
        document.getElementById("pictures").appendChild(div).appendChild(onepic);
        onepic.src = `${url}`;
    });


}

//how to get the updated value from the textbox - show the random images

//how to update the image everytime when enter is pressed 

//reference: https://inimino.org/~inimino/blog/javascript_live_text_input