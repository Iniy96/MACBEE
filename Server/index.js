const express = require("express")
const router = express.Router();
const cors = require('cors');
const multer = require('multer')
const nodemailer = require("nodemailer");
const Mailgen = require('mailgen');

require('dotenv').config();

const EMAIL =process.env.EMAIL
const PASSWORD=process.env.PASSWORD
const PORT =process.env.PORT

const app = express()

app.use(cors())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads') // specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`) // use the original filename for the uploaded file
    }
})
const upload = multer({ storage: storage })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

let firstName;
let secondName;
app.get("/", async (req, res) => {
   /*  try {
        res.json(`FirstName : ${firstName}avan SecondName: ${secondName}++Helo`)
    } catch (error) {
        res.send("error..", error)
    } */
    res.send("Server Runing SUccess")
})
app.post("/sendEmail", upload.single("file"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    try {
        res.set('Content-Type', req.file.mimetype);
        res.set('Content-Disposition', `attachment; filename=${req.file.originalname}`);
        res.send(req.file.buffer);
    } catch (error) {
        res.send("error..", error)
    }
})
app.post("/sendEmail",async(req,res)=>{

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'kailyn.bradtke67@ethereal.email',
        pass: 'pfBJKsNBRFkK4bHWFD'
        }
      }); 

      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello d?", // plain text body
        html: "<b>Hello haddin?</b>", // html body
      });

      transporter.sendMail(info).then((info)=>{
        return res.status(201).json({"msg":"You should receive an email",
    "info":info.messageId,
"preview":nodemailer.getTestMessageUrl(info)})
      }).catch((error)=>{
        return res.status(500).json({error})
      })

    //   res.status(201).json("success")
})

// send mail from real gmail accnt
app.post("/getbill",(req, res) => {

    // const { userEmail } = req.body;

    let config = {
        service : 'gmail',
        auth : {
            user: EMAIL,
            pass:PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Mailgen",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : "Daily Tuition",
            intro: "Your bill has arrived!",
            table : {
                data : [
                    {
                        item : "Nodemailer Stack Book",
                        description: "A Backend application",
                        price : "$10.99",
                    }
                ]
            },
            outro: "Looking forward to do more business"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : EMAIL,
        to : "gcr49181@nezid.com", //change the email
        subject: "Place Order",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("getBill Successfully...!");
})

app.listen(PORT, () => {
    console.log("server started .....")
})