// Comments just in case someone snoop on my code through inspect element
console.log("If you're here to scrutinize the logic of my code, reconsider before your head starts hurting.\n\nIt'd be a big mistake trying to read my HTML. My css however... I'm proud of the way I arranged it.\n\nTake a look at my css thru the sources.\n\nSeriously tho, if you just want to take some snippet, fork some js functions, or insepct the code, it's available in my github.\n\nhttps://github.com/Jideeh1/QNJazmine-Portfolios \n\nJust don't complain when you see how messy the directory is. ーｗー \n\nYours truly, Jideeh");

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
  
  function confirmEmail() {

    console.log("Uhh, email?"); //Yes, I still debug using console logs and alerts. Fuck off.


    if (confirm("Do you want to proceed to email?")) {
        window.location.href = "mailto:qnjazminebusiness@gmail.com";

        
    }
    else {
        console.log('No? Okay.'); //Yes, I still debug using console logs and alerts. Fuck off.
      }
}