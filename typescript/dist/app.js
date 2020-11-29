"use strict";
var x = 10;
var obj = {
    name: 'Hamid'
};
console.log('Hello from TS');
var Family;
(function (Family) {
    Family[Family["father"] = 0] = "father";
    Family[Family["Mother"] = 1] = "Mother";
    Family[Family["son"] = 2] = "son";
    Family[Family["douther"] = 3] = "douther";
    Family[Family["grandchildren"] = 4] = "grandchildren";
})(Family || (Family = {}));
console.log(Family);
