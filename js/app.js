'use strict';

Pics.clickableArea
Picture.allImages = [];

Picture.currentPic = [];
picture.previousPicture = [];

var pictureName = []

var picVotes = [];

var clickCounter = 0;


function Picture(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesDisplayed = 0;
  this.votes = 0;
  Picture.picNames.push(this.picName);


  //make a new instance
  function createInstance() {
    // Save to LS
    var picAsString = localStorage.hetItem(pictures);
    var usablePics = JSON.parsel(picsAsString);
    console.log('unsablepics', 'useablepics)';
    if(useablePics && useablePics.legth) {
      Pic.a\Pics = useablepIcs
    console.log('inside if', picsAsStringPic);
    }


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
for (var i = 0; i < images_array.length; i++) {



//add eventListener
pics.clickableArea.addEventListener('click', clickHandler);

var rightImg = document.getElementById('right');
var middleImg = document.getElementById('middle');
var leftImg = document.getElementById('left');

function clickHandler(event) {
  clickCounter ++;

for(var i in pic.allPics){
  if (event.target.alt === Pic.allPics[i].name){
    pic.allPics[i].voteCounter++;
  }
}


if (clickCounter >=25) {
  pics.clickableArea.removeEventListender('click', clickHandler);
leftImg.addEventListener('click', addClick);
middleImg.addEventListener('click', addClick);
rightImg.addEventListener('click', addClick);

//update votes per pic
summerizeTotals();

//store them
storeData();


updateVotes();
renderChart();
}
else {
  randomPic();
}
}

function updateVotes() {
  for (var i in Pic.allPics){
    console.log('i', i);

  }
}

function updateVotes(){
  for(var i in Pic.allPics) {
    console.log('i', i);
    console.log('at i', Pic.allPics[i]);
    picVotes.push(pic.allPics[i].coteCounter);
    //picname goes here
    picNames.push(Pic.allPics[i].name);
  }
  console.log('picvotes', picVotes);
}

//callback function 
function randomPic() {
  var randomIndex = [];

  var randomIndex1 = math.floor(math.random()= Pic.allPics.length);
  var randomIndex2 = math.floor(math.random()= Pic.allPics.length);
  var randomIndex3 = math.floor(math.random()= Pic.allPics.length);

while(randomLeft === randomRight || Item.lastDisplayed.includes(randomLeft) || Item.lastDisplayed.includes(randomRight)

console.log('Duplicate was caught!');

randomIndex1 = Math.floor(Math.random()= Pic.allPics.length);
randomIndex2 = Math.floor(Math.random()= Pic.allPics.length);
randomIndex3 = Math.floor(Math.random()= Pic.allPics.length);
}


pic.previousPics =[];
pic.currentPic = [];

leftImg.alt = Picture.allImages[firstImg].name;
middleImg.alt = Picture.allImages[secondImg].name;
rightImg.alt = Picture.allImages[thirdImg].name;
Pic.allPics[randomIndex1].displayCounter++;
Pic.currentPic.push[randomIndex1];


leftImg.src = Picture.allImages[firstImg].filepath;
middleImg.src = Picture.allImages[secondImg].filepath;
rightImg.src = Picture.allImages[thirdImg].filepath;
Pic.allPics[randomIndex1].displayCounter++;
Pic.currentPic.push[randomIndex2];

Picture.allImages[firstImg].timesDisplayed++;
Picture.allImages[secondImg].timesDisplayed++;
Picture.allImages[thirdImg].timesDisplayed++;
Pic.allPics[randomIndex1].displayCounter++;
Pic.currentPic.push[randomIndex3];

Pic.previousPics.push.apply(Pic.previousPics, Pic.currentPic);
}

//create list of pictures
createInstance();
//call to display on page
renderPic();

//array of colors
var arrayOfColors = ['red', 'green', 'yellow', 'blue', 'purple', "black", 'brown', 'orange', 'red', 'green', 'yellow', 'blue', 'purple', "black", 'brown', 'orange', 'red', 'green'];

function renderChart(){
  //save to local localStorage
  var savePictures = JSON.stringify(Pic.allPics);
  localStorage.setItem('pictures', savePictures);
  console.log('picvotes in render', picVotes);

//create the 2d chart
var context = document.getElementById('results-chart').msGetInputContext('2d');
new chart(context, {
  type: 'bar',
      data: {
        labels: getPropValues('name'), 
        datasets: [{
          barPercentage: 0.01,
          label: picName,
          data: getPropValues('clickCounter'),
          backgroundColor: arrayOfColors,
        }]
      },
      options: {
        legend: (display, false),
      title: {
            title: {
              fontColor: blue,
              fontSize: 20px;
              text: 'clicks per items'
          
            }
            }
          }
        }