const openMeBtn = document.querySelector('[data-me-target]');
const mePopup = document.querySelector('#Me');
const closeBtn = document.querySelector('[data-close-button]');

openMeBtn.addEventListener('click', () => {
    mePopup.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mePopup.classList.remove('active');
});

const openSkillsBtn = document.querySelector('[data-skills-target]');
const skillsPopup = document.querySelector('#Skills');
const closeskillsBtn = document.querySelector('[data-closeskills-button]');


openSkillsBtn.addEventListener('click', () => {
    skillsPopup.classList.add('active');
});

closeskillsBtn.addEventListener('click', () => {
    skillsPopup.classList.remove('active');
});

const openLinksBtn = document.querySelector('[data-links-target]');
const linksPopup = document.querySelector('#contact');
const closelinksBtn = document.querySelector('[data-closelinks-button]');


openLinksBtn.addEventListener('click', () => {
    linksPopup.classList.add('active');
});

closelinksBtn.addEventListener('click', () => {
    linksPopup.classList.remove('active');
});

function makeDraggable(popup, header) {
    let newX = 0, newY = 0, startX = 0, startY = 0;

   header.addEventListener('mousedown', mouseDown)

  function mouseDown(e){
    startX = e.clientX 
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }

  function mouseMove(e){
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    popup.style.top = (popup.offsetTop - newY) + 'px'
    popup.style.left = (popup.offsetLeft - newX) + 'px'
  }

  function mouseUp(){
    document.removeEventListener('mousemove', mouseMove)
  }

}


const Me = document.getElementById('Me');
const Meheader = Me.querySelector('.header');

const Skills = document.getElementById('Skills');
const skillsheader = Skills.querySelector('.skills-header');

const contact = document.getElementById('contact');
const linksheader = contact.querySelector('.links-header');

makeDraggable(Me, Meheader);
makeDraggable(Skills, skillsheader);
makeDraggable(contact, linksheader);

document.addEventListener("DOMContentLoaded", () => {
    const notice = document.getElementById("mobileNotice");
    const closeb = document.getElementById("closeNotice");

    if (!notice || !closeb) return;

    closeb.addEventListener("click", () => {
      notice.style.bottom = "-200px";
    });
});


const icons = document.querySelectorAll('.float-icon');
icons.forEach(icon => {
    const delay = Math.random() * 4;

    icon.style.animationDelay = `${delay}s`;

});
