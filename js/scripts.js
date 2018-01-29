var allStarters = [];
var allDrinks = [];
var allMainCourses = [];
var allDeserts = [];
var allUsers = [];

function User(nameIn, password, countryFrom, countryTo, starterDishes, drinks, maincourses, deserts, flavorProfile, foodGroupProfile){
  this.name = nameIn;
  this.password = password;
  this.from = countryFrom;
  this.to = countryTo;
  this.starters = starterDishes;
  this.drinks = drinks;
  this.maincourses = maincourses;
  this.deserts = deserts;
  this.flavProfile = null;
  this.foodGProfile = null;
}

function Dish(nameIn, countryFrom, group, flavProfile, foodGProfile, cost, img){
  this.name = nameIn;
  this.countryFrom = countryFrom;
  this.group = group;
  this.flavProfile = flavProfile;
  this.foodGProfile = foodGProfile;
  this.cost = cost;
  this.img = img;
}

function FlavorProfile(thisSweet, thisSalty, thisBitter, thisSour, thisUmani){
  this.sweet = thisSweet;
  this.salty = thisSalty;
  this.bitter = thisBitter;
  this.sour = thisSour;
  this.umani = thisUmani;
}

function FoodGroupProfile(thisFruit, thisVeg, thisProtein, thisDairy, thisGrains, thisOil){
  this.fruit = thisFruit;
  this.vegetable = thisVeg;
  this.protein = thisProtein;
  this.dairy = thisDairy;
  this.grain = thisGrains;
  this.oil = thisOil;
}
function generateUser(nameIn, password, countryFrom, countryTo, foodGroupProfile){
  var newUser = new User(nameIn, password, countryFrom,countryTo,null,null,null,null,null,foodGroupProfile);
  for(var i = 0; i < allUsers.length; i ++){
    if(allUsers[i].name == newUser.nameIn){
      alert("Sorry this name is already Taken.");
    } else {
      allUsers.push(newUser);
    }
  }
}

User.prototype.generateFlavorProfile = function(){
  var startersLength = this.starters.length;
  var drinksLength = this.drinks.length;
  var maincoursesLength = this.maincourses.length;
  var desertsLength = this.deserts.length;
  var totalNumberOfDishes = startersLength + drinksLength + maincoursesLength + desertsLength;
  var starterFlavorArray = [];
  var drinksFlavorArray = [];
  var mainCourseFlavorArray = [];
  var desertsFlavorArray = [];
  var totalFlavorArray = [];

  //Generate average vector for starters
  for(var i = 0; i < startersLength; i ++){
    var currentDish = this.starters.flavProfile[i];
    startersFlavorArray.addArrays(currentDish);
  }
  starterFlavorArray.divideArray(startersLength);

  //Generate average vector for Drinks.
  for(var i = 0; i < drinksLength; i ++){
    var currentDish = this.drinks.flavProfile[i];
    startersFlavorArray.addArrays(currentDish);
  }
  starterFlavorArray.divideArray(drinksLength);

  //Generate average vector for Main course.
  for(var i = 0; i < maincoursesLength; i ++){
    var currentDish = this.maincourses.flavProfile[i];
    startersFlavorArray.addArrays(currentDish);
  }
  starterFlavorArray.divideArray(maincoursesLength);

  //Generate average vector for Deserts course.
  for(var i = 0; i < desertsLength; i ++){
    var currentDish = this.deserts.flavProfile[i];
    startersFlavorArray.addArrays(currentDish);
  }
  starterFlavorArray.divideArray(desertsLength);
  }
  //Generate total flavor profile
  totalFlavorArray.addArrays(starterFlavorArray);
  totalFlavorArray.addArrays(drinksFlavorArray);
  totalFlavorArray.addArrays(mainCourseFlavorArray);
  totalFlavorArray.addArrays(desertsFlavorArray);
  totalFlavorArray.divideArray(4);
  return totalFlavorArray;
}

Array.prototype.addArrays = function(arrayIn) {
  var outputArray = [];
  for(var i = 0; i < arrayIn.length; i ++){
    outputArray[i] = arrayIn[i] + this[i];
  }
  return outputArray;
}
Array.prototype.divideArray = function(constant){
  var outputArray = [];
  for(var i = 0; i < this.length; i ++){
    outputArray[i] = this[i]/constant;
  }
  return outputArray;
}
