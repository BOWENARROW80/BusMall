'use strict';

// array to store instances of the Goat constructor
Goat.allGoats = [];

// array to keep track of the previously dispalyed images
Goat.lastDisplayed = [];

// goat names for bar chart labels
var goatNames = [];

// goat votes for bar chart data
var goatVotes = [];

// click tracker
Goat.totalClicks = 0;

// access the img elements from the DOM
var rightImg = document.getElementById('right');
var leftImg = document.getElementById('left');

// access the section element from the DOM
var sectionElement = document.getElementById('goat-section');

// access the unordered list element from the DOM
var unorderedListElement = document.getElementById('results');

// constructor function
function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesDisplayed = 0;
  this.votes = 0;
  Goat.allGoats.push(this);
  goatNames.push(this.name);
}

// make new Goat instances
new Goat('Cruisin goat', 'img/cruisin-goat.jpg');
new Goat('Flower goat', 'img/flower-goat.jpg');
new Goat('Goatogenic', 'img/goatogenic.png');
new Goat('Jumping goat', 'img/jumping.jpg');
new Goat('Kissing goat', 'img/kissing-goat.jpg');
new Goat('Pushy goat', 'img/pushy-goat.jpg');
new Goat('Sassy goat', 'img/sassy-goat.jpg');
new Goat('Smiling goat', 'img/smiling-goat.jpg');
new Goat('Sweater goat', 'img/sweater-goat.jpg');
new Goat('Goat with tongue out', 'img/tongue.jpg');
new Goat('Underbite goat', 'img/underbite.jpg');

// randomly display two pictures
function randomGoat() {
  // generate two random indices
  var randomLeft = Math.floor(Math.random() * Goat.allGoats.length);
  var randomRight = Math.floor(Math.random() * Goat.allGoats.length);

  console.log(randomLeft);
  console.log(randomRight);

  // check to make sure that these random numbers are unique
  // if there are duplicates, rerun both of the numbers
  // Condition 1: randomLeft and randomRight are the same number/index
  // Condition 2: randomLeft was previously displayed
  // Condition 3: randomRight was previously displayed
  while(randomLeft === randomRight || Goat.lastDisplayed.includes(randomLeft) || Goat.lastDisplayed.includes(randomRight)) {
    console.log('Duplicate was caught!');
    randomLeft = Math.floor(Math.random() * Goat.allGoats.length);
    randomRight = Math.floor(Math.random() * Goat.allGoats.length);
  }

  // Now that we know they are unique numbers, display the two unique images on the screen
  rightImg.src = Goat.allGoats[randomRight].filepath;
  rightImg.alt = Goat.allGoats[randomRight].name;

  leftImg.src = Goat.allGoats[randomLeft].filepath;
  leftImg.alt = Goat.allGoats[randomLeft].name;

  // incremented the number of times displayed
  Goat.allGoats[randomLeft].timesDisplayed++;
  Goat.allGoats[randomRight].timesDisplayed++;

  // keep track of previously displayed images
  // APPROACH 1: 
  Goat.lastDisplayed = [];
  Goat.lastDisplayed.push(randomLeft);
  Goat.lastDisplayed.push(randomRight);

  // APPROACH 2:
  Goat.lastDisplayed[0] = randomLeft;
  Goat.lastDisplayed[1] = randomRight;

}

function handleClick(event) {
  // increment click counter
  Goat.totalClicks++;

  // increment clicks/votes on the specific image
  console.log(event.target.alt);

  // use a for loop to determine which goat img was actually clicked on
  for(var i in Goat.allGoats) {
    if(event.target.alt === Goat.allGoats[i].name) {
      Goat.allGoats[i].votes++;
    }
  }

  // check the click counter
  if(Goat.totalClicks > 9) {
    // turn off event listener
    sectionElement.removeEventListener('click', handleClick);

    // if greater than 9, display results as a list
    showResults();

    // updates the votes per goat for chart
    updateVotes();

    // display the chart
    renderChart();
  } else {
    // if less than 10, display a new set of random goat images
    randomGoat();
  }
}

function showResults() {
  // console.log('You hit ten clicks');
  // create list items to display the number of times each goat was displayed and the number of votes each one received
  for(var i in Goat.allGoats) {
    // 1. target/create the element (li)
    var listItemElement = document.createElement('li');
   
    // 2. give it content
    listItemElement.textContent = Goat.allGoats[i].name + ' has ' + Goat.allGoats[i].votes + ' votes and was displayed ' + Goat.allGoats[i].timesDisplayed + ' times.';

    // 3. append the element to its parent
    unorderedListElement.appendChild(listItemElement);
  }
}

function updateVotes() {
  for(var i in Goat.allGoats) {
    // APPROACH 1:
    // goatVotes.push(Goat.allGoats[i].votes);

    // APPROACH 2:
    goatVotes[i] = Goat.allGoats[i].votes;
  }
}

// add event listener to the section
sectionElement.addEventListener('click', handleClick);

// render two images on page load
randomGoat();

// use Chart.js to create a bar chart
function renderChart() {
  // access the canvas element from the DOM
  var context = document.getElementById('goat-chart').getContext('2d');

  var arrayOfColors = ['red', 'green', 'yellow'];

  new Chart(context, {
    type: 'bar',
    data: {
      labels: goatNames, // array of the goat names, populated above
      datasets: [{
        label: 'Votes Per Goat',
        data: goatVotes,
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
