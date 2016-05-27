(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.arrayUtilities = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    // Copyright (c) CBC/Radio-Canada. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.

    var ArrayUtilities = function ArrayUtilities() {};

    ArrayUtilities.prototype.isArray = function (object) {
        return Object.prototype.toString.call(object) === '[object Array]';
    };

    ArrayUtilities.prototype.isEmptyArray = function (object) {
        var self = this;
        var result = false;

        if (self.isArray(object)) {
            if (object.length === 0) {
                result = true;
            }
        }

        return result;
    };

    ArrayUtilities.prototype.isEmptyArrayOrNull = function (object) {
        var self = this;
        var result = true;

        if (self.isArray(object)) {
            if (object.length > 0) {
                result = false;
            }
        }

        return result;
    };

    ArrayUtilities.prototype.isNotEmptyArray = function (object) {
        var self = this;

        return object !== null && self.isArray(object) && !self.isEmptyArray(object);
    };

    exports.default = new ArrayUtilities();
});