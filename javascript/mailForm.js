const form = document.querySelector('.mail_form');
mail_window = document.getElementById('mail_form_background');

function sendMsg(e) {
    e.preventDefault();

    const name = document.querySelector('.name_text_area'),
            email = document.querySelector('.email_text_area'),
            msg = document.querySelector('.text_area');

    //function send email
    Email.send({
        SecureToken : "b7effa86-e54d-41cc-8008-c6f3b58275e5",
        To : 'wildcardhong@gmail.com',
        From : 'elwlsekzlr1@gmail.com',
        Subject : "Contact Form",
        Body : "name: " + name.value + "<br>email: " + email.value + "<br>msg: " + msg.value
    }).then((success) => {
        alert("message sent successfully.");
    }).catch((error) => {
        alert("error sending message");
    });

    mail_window.classList.remove('active_mail_form');
}

form.addEventListener('submit', sendMsg);

function esc() {
    // email_form 삭제
    mail_window.classList.remove('active_mail_form');
}

function contact_me() {
    // email_form 생성
    mail_window.classList.add('active_mail_form');
}
