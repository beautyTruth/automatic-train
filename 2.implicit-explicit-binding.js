//(1) -> The first way to call a function -> Implicit Binding Rule

// var movieShop = {
//   movie: "The Switch",
//   movieFunc(movieDesc) {
//     console.log(this.movie, movieDesc);
//   },
// };

// movieShop.movieFunc("movie is what I am watching"); // movieFunc is acting as a method of the movieShop object

// function movieFunc(movieDesc) {
//   console.log(this.movie, movieDesc);
// }

// let movieShop1 = {
//   movie: "Click",
//   movieFunc: movieFunc,
// };

// let movieShop2 = {
//   movie: "The Leap Year",
//   movieFunc: movieFunc,
// };

// movieShop1.movieFunc("is a fantastic movie"); // movieFunc is acting as a method of the movieShop1 object
// movieShop2.movieFunc("is a romantic movie"); // movieFunc is acting as a method of the movieShop2 object

//  ---------------------------------------------------------
//(2) -> The second way to call a function -> Explicit Binding Rule

function movieFunc(movieDesc) {
  console.log(this.movie, movieDesc);
  // console.log(this.movieCompany, movieDesc);
}

var movieShop1 = {
  movie: "Click",
  // movieCompany: "WB",
};

var movieShop2 = {
  movie: "The Leap Year",
};

// the call method accepts the this keyword as the first argument

movieFunc.call(movieShop1, "is a fantastic movie");
movieFunc.call(movieShop2, "is a romantic movie");

// be good to myself
