// object destructuring 
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1980,
    anotherFamousSong: "kashmir"
};

// const bandName = band.famousSong;
// console.log(bandName);

//shortcut method

let {bandName,famousSong, ...resProps} = band;
console.log(famousSong);
console.log(resProps);