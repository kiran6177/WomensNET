const nodemailer = require('nodemailer')
const Email = process.env.EMAIL
const Password = process.env.PASSWORD

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:Email,
        pass:Password
    }
})

async function sendmail(email,otp){
try{
    let message = {
        from:Email,
        to:email,
        subject:"WomensNet Officer Registration",
        text:`Your One Time Password for Registration is ${otp}`
    }

    const mailed = await transporter.sendMail(message)
    if(mailed != null)
    {   console.log("mail sent successfully")
        return true
    }
    else{
        console.log(mailed)
        return false
    }
}
catch(err)
{
    console.log(err.message)
}
}

module.exports = {sendmail}