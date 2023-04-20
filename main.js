//1
// String.prototype.customCapitalize=function(){
//     let _str = this[0].toUpperCase();
//     for(let i = 1; i<this.length; i++){
//         _str+=this[i];
//     }

//     return _str;
// }
// const str = "hello";
// const capitalized = str.customCapitalize();
// console.log(capitalized);

//2
// String.prototype.customReverse=function(){
//     let _str="";
//     for(let i = this.length-1; i>=0;i--){
//         _str+=this[i];
//     }

//     return _str;
// }

// const str = "hello"
// const reversed = str.customReverse();
// console.log(reversed);

//3
String.prototype.customCapitalize=function(){
    return this.replace(/[aeiou]/g, function(match){
        return match.toUpperCase();
    });
}
let str = "salam aleykum";
let customCapitalize = str.customCapitalize();
console.log(customCapitalize);