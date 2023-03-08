
// array vs object
var shoppingCart={
    book : 3,
    pen : 25,
    dress: 1,
    food : 59,
    mouse:5,

}

var shoppingItems = ['book','pen' , 'dress',];

const keys = Object.keys(shoppingCart);
//console.log(keys);
for (const propertyName in shoppingCart) {
    if (Object.hasOwnProperty.call(shoppingCart, propertyName)) {
        const element = shoppingCart[propertyName];
        console.log(propertyName,element);
    }
}