"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var MysqlDao_1 = require("dao/MysqlDao");
var UserRowMapper_1 = require("mapper/UserRowMapper");
var UserDao = (function (_super) {
    __extends(UserDao, _super);
    function UserDao(options) {
        if (options === void 0) { options = {}; }
        return _super.call(this, options) || this;
    }
    UserDao.prototype.getSqlDir = function () {
        return __dirname + '/sql/';
    };
    UserDao.prototype.getById = function (id, options) {
        if (options === void 0) { options = {}; }
        options = Object.assign({
            sorting: 'username',
            rowMapper: new UserRowMapper_1["default"]()
        }, options);
        return _super.prototype.getById.call(this, id, options);
    };
    return UserDao;
}(MysqlDao_1["default"]));
exports["default"] = UserDao;
//# sourceMappingURL=UserDao.js.map