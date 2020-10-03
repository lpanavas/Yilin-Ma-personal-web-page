function sendEmail() {
    let emailAddr = document.querySelector('#email-address');
    
    Email.send({
        Host: 'smtp.elasticemail.com',
        Username: '',
        Password: '',
        To: emailAddr.value,
        From: 'mayilin728@gmail.com',
        Subject: 'Awesome Pictures from Yilin',
        Body: 'Pictures are attached. Have a good day!',
        Attachments: [
            {
                name: "Beijing.webp" ,
                path: "http://localhost/static/Beijing.webp"
            },
            {
                name: "Chongqing_boy.webp" ,
                path: "http://localhost/static/Chongqing_boy.webp"
            },
        ]
    }).then(
        (message) => {
            if (message.trim() === 'OK') {
                alert('Email was sent successfully.');
            } else {
                alert(message);
            }
            
            emailAddr.value = '';
        }
    );
}

document.querySelector('#send-email').addEventListener('click', () => sendEmail());