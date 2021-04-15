export interface IMessage{
    to:any;
    from:IAddress;
    subject: string;
    body: string;
}

interface IAddress{
    email: string;
    name: string;
}

export interface IMailProvider{
    sendMail(message: IMessage): Promise<void>;
}