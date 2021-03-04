const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str : '',
  getLength() {
    return this.str.split("~~").length; 
  },
  addLink(value) {
    //let str = '';
    let count = 0;
    if (this.str === undefined ) {
      this.str = '( ' + value + ' )~~';
    //} else if (this.str.includes((value + '').trim() ) == true){
    //    this.removeLink((value + '').trim());
    //    this.str = this.str + '( ' + value + ' )~~';
      } else {
        for (let i = 0;i< this.str.split("~~");i++){
            if (this.str[i] == value) {
              this.removeLink(value);
            }
        }
        this.str = this.str + '( ' + value + ' )~~';
      }
      
    return this; 
  },
  removeLink(position) {
    if (position === NaN || Number.isInteger(position) != true) {
      this.str = this.str.replace(/[a-zа-яё]/gi, '');
    this.str = this.str.replace(/^[a-zа-яё]/gi, '');
      this.str = '';
      throw Error;
    }
    let arr1 = this.str.split("~~");
    let str1 = this.str;

    this.str = '';
    //this.str = this.str.split("").join("");
    for(let i = 0;i<arr1.length;i++){
      //if (arr1[i].includes(position) !=true) {
        if (i!=position-1){
        if (this.str === undefined ) {
          this.str = arr1[i] + '~~';
        } else {
          if (this.count > 0) {
            this.count = 0;
            this.str = arr1[i] + '~~';
          }
          this.str = this.str + arr1[i] + '~~';
        }
      }
    }
    this.str = this.str.substr(0, this.str.split("").length -2);
    if (str1 == this.str) {
    this.str = '';
      throw Error;
    }
    return this;
  },
  reverseChain() {
    
    if (this.str === undefined) {
      return this;
    }
    this.str = this.str.substr(0, this.str.split("").length -2);
    this.str = this.str.split("~~").reverse().join("~~") + "~~";
    return this;
  },
  finishChain() {
    this.str = this.str.substr(0, this.str.split("").length -2);
    let final1 = this.str;
    this.str = undefined;
    //this = {};
    //for (let key in this) {
    //  delete this[key];
    //}
    return final1; 
  }
};

module.exports = chainMaker;
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
//console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain());
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
//console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain());
//console.log(chainMaker.addLink(3.14).addLink(1).addLink({0: 'first', 1: 'second', 'length': 2}).removeLink(1).addLink('DEF').addLink({0: 'first', 1: 'second', 'length': 2}).removeLink(1).addLink(true).addLink(false).addLink(333).reverseChain().reverseChain().finishChain());
//console.log(chainMaker.addLink('ABC').reverseChain().reverseChain().addLink('DEF').removeLink(1).addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(1.233).addLink(1.233).reverseChain().addLink('ABC').finishChain());