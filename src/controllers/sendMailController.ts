import { Request, Response } from 'express';
import sendMailService from '../services/sendMailService';
import path from 'path';

class SendMailController {
   async execute(request: Request, response: Response) {
   
  const template = path.resolve(__dirname, "..", "views", "email", "index.hbs");
  const variables = {
    name: "name",
    title: "title",
    link: process.env.URL_MAIL,
}
    const { email } = request.body;
    await sendMailService.execute(email, "teste", variables, template);


   }
}

export { SendMailController }