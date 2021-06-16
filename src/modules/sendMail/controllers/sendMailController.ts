import { Request, Response } from 'express';
import sendMailService from '../services/sendMailService';
import path from 'path';

class SendMailController {
  async execute(request: Request, response: Response) {

  const template = path.resolve(__dirname, "..", "views", "email", "template.hbs");
  const variables = {
    name: "name",
    title: "title",
  }
    const { email } = request.body;
    await sendMailService.execute(email, "teste", variables, template);

    return response.json(email);
   }
}

export { SendMailController }
