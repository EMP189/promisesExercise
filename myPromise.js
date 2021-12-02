// Getting a new shoes
// let doIHaveMoney = false;

// // Create the promise
// const buyShoes = new Promise(
//     function (resolve, reject) {
//         //If I have money get these shoes
//         if (doIHaveMoney){
//             let shoes = {
//                 brand: 'Nike',
//                 style: 'Air Jordans',
//                 color: 'red and black'
//             };
//             resolve(shoes); //If statement is true, resolve and output shoes 
//         } else { // If statement not true, output error and reject it
//             let reason = new Error("I ain't got no money")
//             reject(reason);
//         }
//     }
// )

// // Second promise

// const showOff = function(shoes){
//     let message = `Check out my new ${shoes.color} ${shoes.style}. I bought them at the ${shoes.brand} store nearby.`
//     return Promise.resolve(message);
// }

// // We can only show off the shoes if we bought them so
// // Consume the promise
// const checkBalance = () => {
//     buyShoes.then(showOff).then(fulfilled=>{console.log(fulfilled)})
//     .catch(notEnough=>{console.log(notEnough)});
// }
// Call the promise
//checkBalance();

//####################################################################################

// const activities_url = 'https://www.boredapi.com/api/activity'
// async function doSmth(){
//     const response = await fetch(activities_url);
//     const action = await response.json();
//     const {activity, type} = action;
//     console.log(activity);
//     console.log(type);
// }

// doSmth();