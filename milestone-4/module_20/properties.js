var shoppingCart={
    books : 3,
    pens : 25,
    dress: 1,
    food : 269,
    mouse:5,

}
// var penCount = shoppingCart.pens;
var penCount = shoppingCart['food'];
//console.log(penCount);

var properties = Object.keys(shoppingCart);
var properties2 = Object.values(shoppingCart);
console.log(properties, properties2);

shoppingCart.mouse = 15;
shoppingCart['mouse']= 20;
console.log(shoppingCart);