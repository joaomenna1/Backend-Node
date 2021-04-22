import nodemailer, { Transporter } from 'nodemailer';
import fs from 'fs';
import handlebars from 'handlebars';

class sendMailService {
  private client: Transporter;

  constructor() {

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'evoney.tavares@kumbi.com.br',
            pass: 'Ide150313#'
        }
      });

      this.client = transporter;
  }

  async execute(to: string, subject: string, variables: object, path: string) {
    const templateFileContent = fs.readFileSync(path).toString("utf8");

    const mailTemplateParse = handlebars.compile(templateFileContent)
    const html = mailTemplateParse(variables)

    const message = await this.client.sendMail({
        to,
        subject,
        html,
        from: "<noreplay@kumbi.com.br>"
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
}
}

export default new sendMailService();
