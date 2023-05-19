import nodemailer from "nodemailer"
import Mailgen from "mailgen"

import { config } from 'dotenv';

const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD

const sendEmail = async (name, mobile, address, email, resume) => {
    try {
        let config = {
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        }
        let transporter = nodemailer.createTransport(config);

        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Mailgen",
                link: 'https://mailgen.js/'
            }
        })

        let response = {
            body: {
                name: `I am ${req.body.name}`,
                intro: "",
                table: {
                    data: [
                        {
                            Name: req.body.name,
                            mobile: req.body.mobile,
                            address: req.body.address,
                            email: req.body.email
                        }
                    ]
                },
            }
        }

        let mail = MailGenerator.generate(response)

        let message = {
            from: EMAIL,
            to: "iniyini35@gmail.com", //change the email
            subject: "Job Application through MCABEE website.",
            html: mail,
            attachments: {
                filename: req.file.filename,
                path: req.file.path
            }
        }

        let info = await transporter.sendMail(message);
        return info;
    } catch (error) {
        throw new Error("Failed to send email: " + error.message);
    }
};

export default sendEmail;
