import {IMailProvider, IMessage} from "../IMailProvider";
import nodeMailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider{
    private transporter: Mail;

    constructor() {
    this.transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth:{
            user: "6c0f4947dad414",
            pass:"a6a6dc1804e299"
        }
    })
    }

    async sendMail(message: IMessage): Promise<void>{
        await this.transporter.sendMail({
            to:{
                name: message.to.name,
                address: message.to.email
            },
            from:{
                name: message.to.name,
                address:message.to.email
            },
            subject: message.subject,
            html: message.body,
        })
    }
}