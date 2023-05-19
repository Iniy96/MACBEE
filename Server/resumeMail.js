import nodemailer from "nodemailer"
import Mailgen from "mailgen"

import dotenv from 'dotenv';

dotenv.config();

const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD

const sendResumeEmail = async (name, mobile, address, email, jobtitle, resume) => {
    console.log(name, address);
    console.log(resume);
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
                name: `${name} Applied for the role of ${jobtitle}`,
                intro: "",
                table: {
                    data: [
                        {
                            Name: name,
                            jobtitle: jobtitle,
                            email: email,
                            mobile: mobile,
                            address: address
                        }
                    ]
                },
            }
        }


        let mail = MailGenerator.generate(response)
        console.log("resume", resume.filename);
        let message = {
            from: EMAIL,
            to: "iniyini35@gmail.com", //change the email
            subject: "Business Enquiry through MCABEE website.",
            html: mail,
            attachments:
            {
                filename: resume.filename,
                path: `uploads\${resume.filename}`
            }
        }

        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log(error);
                // handle the error if needed
            } else {

                console.log(info);
                // handle the success if needed
            }
        });
    } catch (error) {
        console.log("Failed to send email: " + error.message);
    }
};

export default sendResumeEmail;
