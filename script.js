// Comments just in case someone snoop on my code through inspect element
var messageOne = "If you're here to scrutinize the logic of my code, reconsider before your head starts hurting.\n\n";
var messageTwo = "It'd be a big mistake trying to read my HTML and JavaScript. My css however... I'm proud of the way I arranged it.\n\n";
var messageThree = "Want to take a peek? Go to Sources`.`\n\n";
var messageFour = "Seriously though, if you just want to take some JS functions, or see how I styled my elements, the code is open-source in my github.\n\n";
var messageFive = "find it on: https://github.com/Jideeh1\n\n";
var messageSix = "Just don't start complaining when you `see how ass I write code. ーｗー\n\n";
var signature = "Yours Truly, Jideeh\n\n";

console.log(messageOne + messageTwo + messageThree + messageFour + messageFive + messageSix + signature);

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
        console.log("Hell Yeah!"); //Yes, I still debug using console logs and alerts. Fuck off.
      } else {
        console.error("WHY ARE YOU NOT WORKING?"); //Yes, I still debug using console logs and alerts. Fuck off.
      }
    })
    .catch(error => {
      console.error("Fuck this error:", error); //Yes, I still debug using console logs and alerts. Fuck off.
    });
  });
  

function startFlyAnimation() {
    const mail = document.querySelector('.mail-container');
    const wings = document.querySelectorAll('.wing');

    console.log("Wheee! I'm flying!"); //Yes, I still debug using console logs and alerts. Fuck off.
  
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

function singlePage(pageUrl) {
  fetch(pageUrl)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const wrapper = doc.querySelector('.change');
      if (wrapper) {
        document.getElementById("single-page-navigation").innerHTML = wrapper.outerHTML;
        console.log('Did u change pages?');
      }
    });
}
  
  function confirmEmail() {

    console.log("Uhh, email?"); //Yes, I still debug using console logs and alerts. Fuck off.
    if (confirm("Do you want to proceed to email?")) {
        window.location.href = "mailto:qnjazminebusiness@gmail.com";
    }
    else {
        console.log('No? Okay.'); //Yes, I still debug using console logs and alerts. Fuck off.
      }
}


function showBanner() {
  const banner = document.querySelector('.kofi-banner');
  const kofi = document.querySelector('.kofi');

  console.log(banner + kofi)

  kofi.onhover = banner.style.display = "block"

  setTimeout(() => {
    kofi.onhover = banner.style.opacity = "1";
    kofi.onhover = banner.style.animation = "bubbleEnter 1s ease-out";
  }, 100);
  
  setTimeout(() => {
    kofi.onhover = banner.style.opacity = "0";
    kofi.onhover = banner.style.animation = "none";

    setTimeout(() => {
      kofi.onhover = banner.style.display = "none";
    }, 1000);
    
  }, 10000);

}
