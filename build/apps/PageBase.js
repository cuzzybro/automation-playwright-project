"use strict";
exports.__esModule = true;
var PageBase = /** @class */ (function () {
    function PageBase(context, page) {
        this.context = context;
        this.page = page;
    }
    PageBase.prototype.randomAlphaString = function (length) {
        var result = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };
    PageBase.prototype.randomAlphaNumericString = function (length) {
        var result = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        for (var i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };
    PageBase.prototype.randomNumber = function (length) {
        var result = '';
        var chars = '0123456789';
        for (var i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };
    return PageBase;
}());
exports["default"] = PageBase;
