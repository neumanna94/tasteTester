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
