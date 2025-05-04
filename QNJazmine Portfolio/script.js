// Comments just in case someone snoop on my code through inspect element
console.log("If you're here to snoop on my messy code, reconsider before your head starts hurting.\n\nSeriously tho, stop. If you just want to take some snippets or look at the whole code, it's available in my github.\n\nhttps://github.com/Jideeh1/QNJazmine-Portfolios \n\nJust don't complain when you see how messy the code is. ーｗー \n\nSincerely, Jideeh");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        console.log("Email sent!");
      } else {
        console.error("Error sending email.");
      }
    })
    .catch(error => {
      console.error("Submission error:", error);
    });
  });
  

function startFlyAnimation() {
    const mail = document.querySelector('.mail-container');
    const wings = document.querySelectorAll('.wing');
  
    mail.style.animation = 'none';
    void mail.offsetWidth;
    mail.style.display = 'block';
    mail.style.animation = 'flyPath 6s forwards';
  
    wings.forEach(wing => {
      wing.style.animation = 'none';
      void wing.offsetWidth;
      wing.style.animation = 'flap 0.4s infinite ease-in-out';
    });
  }
  
  