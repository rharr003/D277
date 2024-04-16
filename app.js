const form = document.querySelector("#contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const email1 = data.get("email");
  const email2 = data.get("confirm-email");
  if (email1 !== email2) {
    alert("Emails do not match!");
  } else {
    alert(
      "Thank you for contacting us! A representative will contact you as soon as possible."
    );
    form.reset();
  }
});
