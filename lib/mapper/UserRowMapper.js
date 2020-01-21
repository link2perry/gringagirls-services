"use strict";
exports.__esModule = true;
var UserImpl_1 = require("model/UserImpl");
var UserRowMapper = (function () {
    function UserRowMapper() {
    }
    UserRowMapper.prototype.mapRow = function (row) {
        console.log('typeof row:', typeof row);
        var user = new UserImpl_1["default"]();
        if (typeof row !== 'undefined') {
            user.id = row.id;
            user.username = row.username;
            user.password = row.password;
            user.firstName = row.first_name;
            user.lastName = row.last_name;
            user.email = row.email;
        }
        return user;
    };
    return UserRowMapper;
}());
exports["default"] = UserRowMapper;
//# sourceMappingURL=UserRowMapper.js.map