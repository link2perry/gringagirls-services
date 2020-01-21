import Mail from "model/Mail";
export default class MailImpl implements Mail {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
    constructor(mail?: Mail);
}
//# sourceMappingURL=MailImpl.d.ts.map