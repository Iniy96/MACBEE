import sendBusinessEmail from "../nodemailer/businessMail.js";
import  sendResumeEmail  from "../resumeMail.js";

export const sendResume = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.json("succ")
    try {
        const { name, mobile, address, email,jobtitle } = req.body;
        const resume = req.file;
        console.log("filepath ",req.file.path);

        let res = await sendResumeEmail(name, mobile, address, email,jobtitle, resume)

    } catch (error) {
        console.log(error);
        res.json({ status: false, error: error.message });
    }
};


export const sendEnquiry = async (req, res) => {
    
     try {
        const { ServiceSelected, name, company_name, mobile,clientRequirement } = req.body;
        let document = req.file;

        console.log(req.body);
        console.log("documnet",document);

        const info = await sendBusinessEmail(ServiceSelected, name, company_name, mobile,clientRequirement,document );

    } catch (error) {
        console.log(error);
         res.json({ status: false, error: error.message });
   }
};




/* app.post("/sendEmail", upload.single("resume"), async (req, res) => {

}); */

