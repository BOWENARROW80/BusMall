"use strict";
//array to hold SkyMall objects
item.allSkyMall= [];

//make an item constructor for skymall object
function Mall(filepath, item) {
  this.filepath = filepath;
  this.item = item;
  mall.allSkyMall.push(this);
}
//new instances of items
new Item('C:\Users\djb\Desktop\REST\wine-glass.jpg', 'wine-glass\item');
new Item('C:\Users\djb\Desktop\REST\water-can.jpg', 'water-can\item');
new Item('C:\Users\djb\Desktop\REST\usb.gif', 'usb\item');
new Item('C:\Users\djb\Desktop\REST\unicorn.jpg', 'unicorn\item');
new Item('C:\Users\djb\Desktop\REST\tauntaun.jpg', 'tauntaun\item');
new Item('C:\Users\djb\Desktop\REST\sweep.png', 'sweep\item');
new Item('C:\Users\djb\Desktop\REST\shark.jpg', 'shark\item');
new Item('C:\Users\djb\Desktop\REST\scissors.jpg', 'scissors\item');
new Item('C:\Users\djb\Desktop\REST\pet-sweep.jpg', 'pet-sweep\item');
new Item('C:\Users\djb\Desktop\REST\pen.jpg', 'pen\item');
new Item('C:\Users\djb\Desktop\REST\dragon.jpg', 'dragon\item');
new Item('C:\Users\djb\Desktop\REST\dog-duck.jpg', 'dog-duck\item');
new Item('C:\Users\djb\Desktop\REST\cthulhu.jpg', 'cthulhu\item');
new Item('C:\Users\djb\Desktop\REST\chair.jpg', 'chair\item');
new Item('C:\Users\djb\Desktop\REST\bubblegum.jpg', 'bubblegum\item');
new Item('C:\Users\djb\Desktop\REST\breakfast.jpg', 'breakfast\item');
new Item('C:\Users\djb\Desktop\REST\boots.jpg', 'boots\item');
new Item('C:\Users\djb\Desktop\REST\bathroom.jpg', 'bathroom\item');
new Item('C:\Users\djb\Desktop\REST\banana.jpg', 'banana\item');
new Item('C:\Users\djb\Desktop\REST\bag.jpg', 'bag\item');


//callback function when image is clicked
function randomItem() {

//random number generator
var randomIndex = math.floor(math.random)() * Item.allSkyMall.length;


//for loop to iterate over the array and render one item
imgElement.src = item.allItemss[randomIndex].filepath;
}
imgElement.lat = item.allItems[randomIndex}.item;
