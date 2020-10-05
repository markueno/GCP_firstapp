var adder =function(a,b){
  return `The sum of the 2 numbers is ${a+b}`

};

var pi =3.14;

// adding properties to module.exports
module.exports.add = adder;
module.exports.pi = pi;
