const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'har97852pal@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}.Let me know hoe you get along with the app.`
    })
}

const sendCancellationMail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'har97852pal@gmail.com',
        subject:'GoodBye',
        text:`Goodbye ${name}, Hope we can meet next time again`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancellationMail
}