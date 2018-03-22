'use strict';



Picture.allImages = [];


var allTheClicks = 0
var leftImg = document.getElementById('left');
var middleImg = document.getElementById('middle');
var rightImg = document.getElementById('right');

function Picture(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesDisplayed = 0;
  this.votes = 0;
  Picture.allImages.push(this);

}

//all objects in JavaScript are instances of Object; a typical object 
//inherits properties (including methods) from Object.prototype

Picture.prototype.percent = function() {
  return (this.clickCounter / this.showCounter) * 25;

};

/////change all these to picture vice 
new Picture('bag', 'img/bag.jpg');
new Picture('banana', 'img/banana.jpg');
new Picture('bathroom', 'img/bathroom.jpg');
new Picture('boots', 'img/boots.jpg');
new Picture('breakfast', 'img/breakfast.jpg');
new Picture('bubblegum', 'img/bubblegum.jpg');
new Picture('chair', 'img/chair.jpg');
new Picture('cthulhu', 'img/cthulhu.jpg');
new Picture('dog-duck', 'img/dog-duck.jpg'); 
new Picture('dragon', 'img/dragon.jpg');
new Picture('wine-glass', 'img/wine-glass.jpg');
new Picture('pen', 'img/pen.jpg');
new Picture('pet-sweep', 'img/pet-sweep.jpg');
new Picture('scissors', 'img/scissors.jpg');
new Picture('shark', 'img/shark.jpg');
new Picture('sweep', 'img/sweep.png');
new Picture('tautaun', 'img/tauntaun.jpg');
new Picture('unicorn', 'img/unicorn.jpg');
new Picture('usb', 'img/usb.gif'); 
new Picture('water-can', 'img/water-can.jpg');

console.log(Picture.allImages);


function randomImage() {
  
  var firstImg = Math.floor(Math.random() * Picture.allImages.length);
  var secondImg = Math.floor(Math.random() * Picture.allImages.length);
  var thirdImg = Math.floor(Math.random() * Picture.allImages.length);

  
  
  leftImg.alt = Picture.allImages[firstImg].name;
  middleImg.alt = Picture.allImages[secondImg].name;
  rightImg.alt = Picture.allImages[thirdImg].name;

  leftImg.src = Picture.allImages[firstImg].filepath;
  middleImg.src = Picture.allImages[secondImg].filepath;
  rightImg.src = Picture.allImages[thirdImg].filepath;

  Picture.allImages[firstImg].timesDisplayed++;
  Picture.allImages[secondImg].timesDisplayed++;
  Picture.allImages[thirdImg].timesDisplayed++;
}


randomImage();
  



function addClick(event) {
randomImage();

}

leftImg.addEventListener('click', addClick);
middleImg.addEventListener('click', addClick);
rightImg.addEventListener('click', addClick);





function showResults() {
  console.log('You hit 25 clicks');
  // create list items to display the number of times each image was displayed and the number of votes each one received
  for(var i in Picture.allImages) {
    // 1. target/create the element (li)
    var listItemElement = document.createElement('li');
   

    function selectImgs(){

  for(var i in Picture.allImages) {
    if(event.target.alt === Picture.allImages[i].name) {
      Picture.allImages[i].votes++;



      
function haltClicks() {
  var picture = document.getElementById('pics');
  if (globalClicks >=25) {
    picture.style.display = 'none';
    results();
    
  sectionElement.removeEventListener('click', handleclick)

  }
//if greater than 25 show results
(showResults());

//update votes per picture for chart
updateVotes();

//display the chart
renderChart();




function showResults() {
  // console.log('You hit ten clicks');
  // create list items to display the number of times each goat was displayed and the number of votes each one received
for(var i in Picture.allImages) {
    // 1. target/create the element (li)
    var listItemElement = document.createElement('li');
   
    // 2. give it content
    listItemElement.textContent = Picture.allImages[i].name + ' has ' + Picture.allImages[i].votes + ' votes and was displayed ' + Picture.allImages[i].timesDisplayed + ' times.';

    // 3. append the element to its parent
    unorderedListElement.appendChild(listItemElement);
  }

function updateVotes() {
  for(var i in Item.allItems) {
    pictureVotes[i] = Picture.allItems[i].votes;
  }
}

sectionElement.addEventListener('click', handleClick);

//render images on page load
randomImage();





// use Chart.js to create a bar chart
function renderChart() {
  // access the canvas element from the DOM
  var context = document.getElementById('picture-chart').getContext('2d');

  var arrayOfColors = ['red', 'green', 'yellow'];






  function finish() {
    // Save to LS
    var savePictures = JSON.stringify(Picture.allPictures);
    localStorage.setItem('pictures', savePictures);

    toggleEventListener();
    showChart();
}







    // // 2. give it content
    // listItemElement.textContent = Picture.allImages[i].name + ' has ' + Picture.allImages[i].votes + ' votes and was displayed ' + Picture.allImages[i].timesDisplayed + ' times.';










//   for (var i = 0; i < images_array.length; i++) {
//     if (selected ===images_array[i].filePath) {
//       images.array[i].clickCounter++;
//       globalClicks++;
//     }
// }
// leftImg.addEventListener('click', addClick);
// middleImg.addEventListener('click', addClick);
// rightImg.addEventListener('click', addClick);

// function handleClick(event) {
//   // increment click counter
//   Item.totalClicks++;


//     // 3. append the element to its parent
//     unorderedListElement.appendChild(listItemElement);
//   }
// }

// function updateVotes() {
//   for(var i in Item.allItems) {
//     // APPROACH 1:
//     // goatVotes.push(Goat.allGoats[i].votes);

//     // APPROACH 2:
//     itemVotes[i] = Item.allItems[i].votes;
//   }
// }

// // add event listener to the section


// // render two images on page load
// randomItem();














// ///////stop when rach 25 images; remove event listener when reach 25

// ////prevent duplicates








// // function selectImgs(){

// //   for(var i in Picture.allImages) {
// //     if(event.target.alt === Picture.allImages[i].name) {
// //       Picture.allImages[i].votes++;
// // }



// //     }
// //   }


// // }




// // haltClicks();
// // render();
// // }

// //   }

// //   function getPropVals() {
// //     var values = []
// //     for (var i = 0; i < images_array.length; i++) {
// //       values.push(images_array[i][key]);

// //     }
// // return values;
// //   }

// //   function arrayOfColors() {
// //     var arrayOfColors = ['red', 'green', 'yellow', "gold", "blue", "purple", "black", "pink", 'red', 'green', 'yellow', "gold", "blue", "purple", "black", "pink", 'red', 'green', 'yellow', "gold", "blue"]; 
// //     // for (var i = 0; i < images_array; i++) {
// //     //   while(randomLeft === randomRight || Item.lastDisplayed.includes(randomLeft) 
// //     //   || Item.lastDisplayed.includes(randomRight)) {
// //     // }
// //   }

// //   function renderChart() {
// //     var context = document.getElementById('image-chart').getContext('2d');

  
    

// //   var chart = new Chart(context, {
// //     type: 'bar',
// //     data: {
// //       labels: getPropValues('name'), 
// //       datasets: [{
// //         label: 'Votes Per item',
// //         data: getPropValues('clickCounter'),
// //         backgroundColor: arrayOfColors,
// //       }]
// //     },
// //     options: {
// //       legend: (display, false),
// //     title: {
// //           title: {
// //             fontColor: blue,
// //             fontSize: 20px;
// //             text: 'clicks per items'
// //             beginAtZero: true
        
// //           }
// //           }
// //         }
// //       }




















// // // array to store instances of the Goat constructor
// // Busmall.allItems = ['img/bag.jpg', 'img/bag.jpg','img/banana.png','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg', 'img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dragon.jpg', 'img/win-glass.jpg', 'img/pen.png','img/pet-sweep.jpg','img/scissors.jpg', 'img/shark.jpg','img/sweep.jpg','img/tautaun.jpg', 'img/unicorn.jpg', 'img/usb.jpg', 'water-can', 'img/water-can.jpg' ]

// // // array to keep track of the previously dispalyed images
// // Busmall.lastDisplayed = [];

// // // goat names for bar chart labels
// // var itemNames = [];

// // // goat votes for bar chart data
// // var itemVotes = [];

// // // click tracker
// // Item.totalClicks = 0;

// // // access the img elements from the DOM
// // var rightImg = document.getElementById('right');
// // var leftImg = document.getElementById('left');

// // // access the section element from the DOM
// // var sectionElement = document.getElementById('item-section');

// // // access the unordered list element from the DOM
// // var unorderedListElement = document.getElementById('results');

// // // constructor function


// // Picture.allPictures = [];

// // //when
// // //immediately
// //   //Pro: they are there for next time
// //   // CON: ZEROS
// // //at the very end
// // // Pro: stores all the values of clicks and views
// // // Con: Partial data not captured
// // //after a load and click
// // //  PRO: COnsistant and acurate data
// // //  CON: Potential scale issue with hug data
// // //  con: chatter

// // // make new Goat instances
// // function setupPictures()

// //   var picsAsString = localStorage.getItem('item');
// //   varusablePics = JSON.parse(pics);
// //   if ( usablePics && usablePics.length) {
// //     picture.allpcitures = usablePics;
// //     console.log('loaded from Local Storage');
// //     return,
// //   }

// //   console.log('do it the hard way');
// // {
// //   new Item('bag', 'img/bag.jpg');
// //   new Item('banana', 'img/banana.png');
// //   new Item('bathroom', 'img/bathroom.jpg');
// //   new Item('boots', 'img/boots.jpg');
// //   new Item('breakfast', 'img/breakfast.jpg');
// //   new Item('bubblegum', 'img/bubblegum.jpg');
// //   new Item('chair', 'img/chair.jpg');
// //   new Item('cthulhu', 'img/cthulhu.jpg');
// //   new Item('dog-duck', 'img/dog-duck.jpg'); 
// //   new Item('dragon', 'img/dragon.jpg');
// //   new Item('wine-glass', 'img/win-glass.jpg');
// //   new Item('pen', 'img/pen.png');
// //   new Item('pet-sweep', 'img/pet-sweep.jpg');
// //   new Item('scissors', 'img/scissors.jpg');
// //   new Item('shark', 'img/shark.jpg');
// //   new Item('sweep', 'img/sweep.jpg');
// //   new Item('tautaun', 'img/tautaun.jpg');
// //   new Item('unicorn', 'img/unicorn.jpg');
// //   new Item('usb', 'img/usb.jpg'); 
// //   new Item('water-can', 'img/water-can.jpg');
// // }

// // // randomly display two pictures

// //   console.log(randomLeft);
// //   console.log(randomRight);

// //   // check to make sure that these random numbers are unique
// //   // if there are duplicates, rerun both of the numbers
// //   // Condition 1: randomLeft and randomRight are the same number/index
// //   // Condition 2: randomLeft was previously displayed
// //   // Condition 3: randomRight was previously displayed
 
// //     console.log('Duplicate was caught!');
// //     randomLeft = Math.floor(Math.random() * Item.allItems.length);
// //     randomRight = Math.floor(Math.random() * Goat.allItems.length);
// //   }

// //   // Now that we know they are unique numbers, display the two unique images on the screen
// //   rightImg.src = Item.allItems[randomRight].filepath;
// //   rightImg.alt = Item.allItems[randomRight].name;

// //   leftImg.src = Item.allItems[randomLeft].filepath;
// //   leftImg.alt = Item.allItems[randomLeft].name;

// //   // incremented the number of times displayed
// //   Item.allItems[randomLeft].timesDisplayed++;
// //   Item.allItems[randomRight].timesDisplayed++;

// //   // keep track of previously displayed images
// //   // APPROACH 1: 
// //   Item.lastDisplayed = [];
// //   Item.lastDisplayed.push(randomLeft);
// //   Item.lastDisplayed.push(randomRight);

// //   // APPROACH 2:
// //   Item.lastDisplayed[0] = randomLeft;
// //   Item.lastDisplayed[1] = randomRight;

// // }

// // function handleClick(event) {
// //   // increment click counter
// //   Item.totalClicks++;

// //   // increment clicks/votes on the specific image
// //   console.log(event.target.alt);

// //   // use a for loop to determine which goat img was actually clicked on


// //   // check the click counter
// //   if(Item.totalClicks > 25) {
// //     // turn off event listener
// //     sectionElement.removeEventListener('click', handleClick);

// //     // if greater than 25, display results as a list
// //     showResults();

// //     // updates the votes per goat for chart
// //     updateVotes();

// //     // display the chart
// //     renderChart();
// //   } else {
// //     // if less than 26, display a new set of random goat images
// //     randomItem();
// //   }
// // }

// // function showResults() {
// //   // console.log('You hit ten clicks');
// //   // create list items to display the number of times each goat was displayed and the number of votes each one received
// //   for(var i in Item.allItems) {
// //     // 1. target/create the element (li)
// //     var listItemElement = document.createElement('li');
   
// //     // 2. give it content
// //     listItemElement.textContent = Item.allItems[i].name + ' has ' + Item.allItems[i].votes + ' votes and was displayed ' + Item.allItems[i].timesDisplayed + ' times.';

// //     // 3. append the element to its parent
// //     unorderedListElement.appendChild(listItemElement);
// //   }
// // }

// // function updateVotes() {
// //   for(var i in Item.allItems) {
// //     // APPROACH 1:
// //     // goatVotes.push(Goat.allGoats[i].votes);

// //     // APPROACH 2:
// //     itemVotes[i] = Item.allItems[i].votes;
// //   }
// // }

// // // add event listener to the section
// // 

// // // render two images on page load
// // randomItem();

// // // use Chart.js to create a bar chart
