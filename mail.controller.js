import mailer from "./mail.config.js";

class MailController {
  async sendMail(req, res) {
    const name = req.body.name;
    const message = req.body.message;
    const email = req.body.sender;
    const receiver = req.body.receiver;
    try {
    mailer(email, message, name,receiver);
    return res.status(200).send({
        success: true,
        message: `mail sent successfully`
    })
    }
    catch (err) {
        return res.status(400).send({
            success: false,
            error: err.message
        })
    }
    
  }
}

export default new MailController();
