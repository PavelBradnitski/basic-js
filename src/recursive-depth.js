const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let class1 = new DepthCalculator();
    return 1 + (arr instanceof Array ? arr.reduce(function(max, item) {
     return Math.max(max, class1.calculateDepth(item));
     }, 0) : -1);
    
}
    };      
  //let smt = new DepthCalculator();

  //console.log(smt.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]));

    
   //calculateDepth(arr) {
   // let class1 = new DepthCalculator();
   // return 1 + (arr instanceof Array ? arr.reduce(function(max, item) {
   //   return Math.max(max, class1.calculateDepth(item));
   // }, 0) : -1);

//Array.prototype.max = function() {
//  return Math.max.apply(null, this);
//};
//let smt = new DepthCalculator();

//console.log(smt.calculateDepth([[[[[]]]]]))