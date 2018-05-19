var rolluptry = (function (exports) {
    'use strict';

    var logA = function logA() {
        console.log('function logA called');
    };

    var logB = function logB() {
        console.log('function logB called');
    };

    var src = {
        logA: logA,
        logB: logB
    };

    exports.default = src;
    exports.logA = logA;
    exports.logB = logB;

    return exports;

}({}));
