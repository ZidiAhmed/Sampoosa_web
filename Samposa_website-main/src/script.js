const emailFormDiv = document.getElementById('emailForm');

const formHTML = `
<form action="https://formspree.io/f/{your_email_here}" method="POST">
    <input type="email" name="_replyto" placeholder="Your email">
    <textarea name="message" placeholder="Your message"></textarea>
    <button type="submit">Send</button>
</form>
`;

emailFormDiv.innerHTML = formHTML;
