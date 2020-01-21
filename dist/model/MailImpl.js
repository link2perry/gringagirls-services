"use strict";
exports.__esModule = true;
var MailImpl = (function () {
    function MailImpl(mail) {
        this.from = "";
        this.to = "";
        this.subject = "";
        this.text = "";
        this.html = "";
        if (mail) {
            this.from = mail.from;
            this.to = mail.to;
            this.subject = mail.subject;
            this.text = mail.text;
            this.html = mail.html;
        }
    }
    return MailImpl;
}());
exports["default"] = MailImpl;
//# sourceMappingURL=MailImpl.js.map