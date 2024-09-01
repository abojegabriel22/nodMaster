import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()



let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"abojejunior@gmail.com",
        pass:process.env.PASS
    }
})

let mailOptions = {
    from:"abojejunior@gmail.com",
    to:"latejuliet78@gmail.com",
    subject:"Send Node Email Aug",
    text:"Hello From node mail",
    html:"<b> Hello martin luther I am gabriel aboje </b>"
}

transporter.sendMail(mailOptions, (err, info)=>{
    if(err) console.log(err)
        else{
        console.log(`Email Sent: ${info.response}`)
    }
})