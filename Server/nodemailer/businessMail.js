import nodemailer from "nodemailer"
import Mailgen from "mailgen"

import dotenv from 'dotenv';

dotenv.config();

const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD

const sendBusinessEmail = async (ServiceSelected, name, company_name, mobile, clientRequirement, document) => {
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
                name: `${ServiceSelected} Enquiry From ${name}`,
                intro: "",
                table: {
                    data: [
                        {

                            Name: name,
                            Company_Name: company_name,
                            ServiceSelected: ServiceSelected,
                            mobile: mobile,
                            clientRequirement: clientRequirement
                        }
                    ]
                },
            }
        }


        let mail = MailGenerator.generate(response)

        let message = {
            from: EMAIL,
            to: "iniyini35@gmail.com", //change the email
            subject: "Business Enquiry through MCABEE website.",
            html: mail,
            attachments:
            {
                filename: document,
                path: "../uploads/"
            }
        }
        // if (document) {
        //     message.
        // } else {
        //     message.document = "No documents Attached"
        // }


        let info = await transporter.sendMail(message);
        return info;
    } catch (error) {
        throw new Error("Failed to send email: " + error.message);
    }
};

export default sendBusinessEmail;
