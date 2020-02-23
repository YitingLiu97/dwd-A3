//get photos from Flickr
/***click the button and REMOVE an element on the page **/
window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("fun-button");
    /***remove div - method 2 ***/
    button.onclick = buttonHandler;
});



// let APIKey=""
// let url=https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1f761e19e3a3928e3438c53dd17b82c5&tags=cat&safe_search=1&per_page=10&page=2&format=json
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

let APIKey="1f761e19e3a3928e3438c53dd17b82c5";
let tags =document.getElementById('textInput').textContent;
let perPageLimits = 10;

let farmid=[];
let serverid=[];
let id=[];
let secret=[];

let url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${tags}&safe_search=1&per_page=${perPageLimits}&page=2&format=json&nojsoncallback=1`;


async function buttonHandler() {
    const response = await fetch(url);
    const results= await response.json();
    // console.log(photos.photos.photo[0].id);

    let photos = results.photos.photo;
    // let photosLength = photos.length;

    let photoURL =[];


    for (let i =0; i< photos.length;i++){
        farmid=photos[i].farm;
        serverid=photos[i].server;
        secret=photos[i].secret;
        id=photos[i].id;
        photoURL.push(`https://farm${farmid}.staticflickr.com/${serverid}/${id}_${secret}.jpg`);
        
      
        let imageSrc=`${photoURL[2]}`;
        
        document.getElementById('images').src=imageSrc;


        
        // return imageSrc;
    
    
   
   
    }

   
    // return `<p>${photos.photos.photo[2].title}<p>`;
  }

  function show(){

    // console.log(photoURL);

  }