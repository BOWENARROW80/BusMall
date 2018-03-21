'use strict';

// array to store instances of the Goat constructor
Busmall.allItems = ['img/bag.jpg', 'img/bag.jpg','img/banana.png','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg', 'img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dragon.jpg', 'img/win-glass.jpg', 'img/pen.png','img/pet-sweep.jpg','img/scissors.jpg', 'img/shark.jpg','img/sweep.jpg','img/tautaun.jpg', 'img/unicorn.jpg', 'img/usb.jpg', 'water-can', 'img/water-can.jpg' ]

// array to keep track of the previously dispalyed images
Busmall.lastDisplayed = [];

// goat names for bar chart labels
var itemNames = [];

// goat votes for bar chart data
var itemVotes = [];

// click tracker
Item.totalClicks = 0;

// access the img elements from the DOM
var rightImg = document.getElementById('right');
var leftImg = document.getElementById('left');

// access the section element from the DOM
var sectionElement = document.getElementById('item-section');

// access the unordered list element from the DOM
var unorderedListElement = document.getElementById('results');

// constructor function
function item(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesDisplayed = 0;
  this.votes = 0;
  Item.allItems.push(this);
  itemNames.push(this.name);
}

// make new Goat instances
new Item('bag', 'img/bag.jpg');
new Item('banana', 'img/banana.png');
new Item('bathroom', 'img/bathroom.jpg');
new Item('boots', 'img/boots.jpg');
new Item('breakfast', 'img/breakfast.jpg');
new Item('bubblegum', 'img/bubblegum.jpg');
new Item('chair', 'img/chair.jpg');
new Item('cthulhu', 'img/cthulhu.jpg');
new Item('dog-duck', 'img/dog-duck.jpg'); 
new Item('dragon', 'img/dragon.jpg');
new Item('wine-glass', 'img/win-glass.jpg');
new Item('pen', 'img/pen.png');
new Item('pet-sweep', 'img/pet-sweep.jpg');
new Item('scissors', 'img/scissors.jpg');
new Item('shark', 'img/shark.jpg');
new Item('sweep', 'img/sweep.jpg');
new Item('tautaun', 'img/tautaun.jpg');
new Item('unicorn', 'img/unicorn.jpg');
new Item('usb', 'img/usb.jpg'); 
new Item('water-can', 'img/water-can.jpg');

// randomly display two pictures
function randomItems() {
  // generate two random indices
  var randomLeft = Math.floor(Math.random() * Item.allItems.length);
  var randomRight = Math.floor(Math.random() * Itet.allItets.length);

  console.log(randomLeft);
  console.log(randomRight);

  // check to make sure that these random numbers are unique
  // if there are duplicates, rerun both of the numbers
  // Condition 1: randomLeft and randomRight are the same number/index
  // Condition 2: randomLeft was previously displayed
  // Condition 3: randomRight was previously displayed
  while(randomLeft === randomRight || Item.lastDisplayed.includes(randomLeft) || Item.lastDisplayed.includes(randomRight)) {
    console.log('Duplicate was caught!');
    randomLeft = Math.floor(Math.random() * Item.allItems.length);
    randomRight = Math.floor(Math.random() * Goat.allItems.length);
  }

  // Now that we know they are unique numbers, display the two unique images on the screen
  rightImg.src = Item.allItems[randomRight].filepath;
  rightImg.alt = Item.allItems[randomRight].name;

  leftImg.src = Item.allItems[randomLeft].filepath;
  leftImg.alt = Item.allItems[randomLeft].name;

  // incremented the number of times displayed
  Item.allItems[randomLeft].timesDisplayed++;
  Item.allItems[randomRight].timesDisplayed++;

  // keep track of previously displayed images
  // APPROACH 1: 
  Item.lastDisplayed = [];
  Item.lastDisplayed.push(randomLeft);
  Item.lastDisplayed.push(randomRight);

  // APPROACH 2:
  Item.lastDisplayed[0] = randomLeft;
  Item.lastDisplayed[1] = randomRight;

}

function handleClick(event) {
  // increment click counter
  Item.totalClicks++;

  // increment clicks/votes on the specific image
  console.log(event.target.alt);

  // use a for loop to determine which goat img was actually clicked on
  for(var i in Item.allItems) {
    if(event.target.alt === Item.allItems[i].name) {
      Item.allItems[i].votes++;
    }
  }

  // check the click counter
  if(Item.totalClicks > 25) {
    // turn off event listener
    sectionElement.removeEventListener('click', handleClick);

    // if greater than 25, display results as a list
    showResults();

    // updates the votes per goat for chart
    updateVotes();

    // display the chart
    renderChart();
  } else {
    // if less than 26, display a new set of random goat images
    randomItem();
  }
}

function showResults() {
  // console.log('You hit ten clicks');
  // create list items to display the number of times each goat was displayed and the number of votes each one received
  for(var i in Item.allItems) {
    // 1. target/create the element (li)
    var listItemElement = document.createElement('li');
   
    // 2. give it content
    listItemElement.textContent = Item.allItems[i].name + ' has ' + Item.allItems[i].votes + ' votes and was displayed ' + Item.allItems[i].timesDisplayed + ' times.';

    // 3. append the element to its parent
    unorderedListElement.appendChild(listItemElement);
  }
}

function updateVotes() {
  for(var i in Item.allItems) {
    // APPROACH 1:
    // goatVotes.push(Goat.allGoats[i].votes);

    // APPROACH 2:
    itemVotes[i] = Item.allItems[i].votes;
  }
}

// add event listener to the section
sectionElement.addEventListener('click', handleClick);

// render two images on page load
randomItem();

// use Chart.js to create a bar chart
function renderChart() {
  // access the canvas element from the DOM
  var context = document.getElementById('Item-chart').getContext('2d');

  var arrayOfColors = ['red', 'green', 'yellow', "gold", "blue", "purple", "black", "pink", 'red', 'green', 'yellow', "gold", "blue", "purple", "black", "pink", 'red', 'green', 'yellow', "gold", "blue"]; 

  new Chart(context, {
    type: 'bar',
    data: {
      labels: itemNames, // array of the goat names, populated above
      datasets: [{
        label: 'Votes Per item',
        data: itemVotes,
        backgroundColor: arrayOfColors,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}