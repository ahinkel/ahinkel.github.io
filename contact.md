---
layout: default
title: Contact
---

<h2>Contact Me</h2>

<p>Feel free to reach out about research collaborations, data science for social good, or anything else!</p>

<form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="cee7ff07-10c9-4790-bfd2-bdb8c77ccc6c">
  <input type="hidden" name="subject" value="New message from ahinkel.github.io">
  <input type="hidden" name="redirect" value="false">

  <div style="margin-bottom: 1em;">
    <label for="name"><strong>Name</strong></label><br>
    <input type="text" id="name" name="name" required
      style="width:100%; padding:0.5em; margin-top:0.3em; font-size:1em; border:1px solid #ccc; border-radius:4px;">
  </div>

  <div style="margin-bottom: 1em;">
    <label for="email"><strong>Email</strong></label><br>
    <input type="email" id="email" name="email" required
      style="width:100%; padding:0.5em; margin-top:0.3em; font-size:1em; border:1px solid #ccc; border-radius:4px;">
  </div>

  <div style="margin-bottom: 1em;">
    <label for="message"><strong>Message</strong></label><br>
    <textarea id="message" name="message" rows="6" required
      style="width:100%; padding:0.5em; margin-top:0.3em; font-size:1em; border:1px solid #ccc; border-radius:4px;"></textarea>
  </div>

  <button type="submit"
    style="padding:0.6em 1.5em; font-size:1em; background:#333; color:#fff; border:none; border-radius:4px; cursor:pointer;">
    Send Message
  </button>

  <p id="form-status" style="margin-top:1em;"></p>
</form>

<script>
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    });
    const result = await response.json();
    if (result.success) {
      status.textContent = "Thanks! Your message has been sent.";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "Something went wrong. Please try again.";
      status.style.color = "red";
    }
  });
</script>
