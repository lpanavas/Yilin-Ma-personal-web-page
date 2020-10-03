function sendEmail() {
    Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'mayilin728@gmail.com',
        Password: 'E93B2283BE1751EA56779B83027F47B720BA',
        To: '1135485226@qq.com',
        From: 'mayilin728@gmail.com',
        Subject: 'Awesome Pictures from Yilin',
        Body: 'Hello World!'
    }).then(
        message => alert(message)
    );
}

document.querySelector('#send-email').addEventListener('click', () => sendEmail());