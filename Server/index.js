import express from "express";
import cors from "cors";
import configureMulter from "./controller/multer.js"
import nodemailer from "nodemailer"
import Mailgen from "mailgen"
import routes from "./routes/route.js"
import dotenv from 'dotenv';

dotenv.config();

const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD
const PORT = process.env.PORT

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const upload = configureMulter();


// app.use("/",routes)

app.get("/",(req,res)=>{
    res.json("Server started...")
})

 app.post("/SendResume", upload.single("resume"), async (req, res) => {
    try {
        const { name, mobile, address, email, jobtitle } = req.body;
        const resume = req.file;

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
        let message = {
            from: EMAIL,
            to: "iniyini35@gmail.com", //change the email
            subject: "Job application through MCABEE website",
            html: mail,
        }
        if (resume) {
            message.attachments=
            {
                filename: req.file.filename,
                path: req.file.path
            } 
        } 


        transporter.sendMail(message, (error, info) => {
            if (!error) {
                res.json({status:"ok",data:info})
            } else {
                res.json({status:"error",data:"something went wrong",error:error})
               
            }
        });

    } catch (error) {
        res.json({ status: false, error: error.message });
    }

});

app.post("/SendEnquiry",upload.single("document"),async(req,res)=>{
    try {
        const { ServiceSelected, name, company_name, mobile,clientRequirement } = req.body;
        const document=req.file;
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
            
        }
        if (document) {
            
            message.attachments=
            {
                filename: req.file.filename,
                path: req.file.path
            } 
        } 


        transporter.sendMail(message, (error, info) => {
            if (!error) {
                res.json({status:"ok",data:info})
            } else {
                res.json({status:"error",data:"something went wrong",error:error})
               
            }
        });

    } catch (error) {
         res.json({ status: false, error: error.message });
   }
} );







app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});
