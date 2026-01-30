const openMeBtn = document.querySelector('[data-me-target]');
const mePopup = document.querySelector('#Me');
const closeBtn = document.querySelector('[data-close-button]');


openMeBtn.addEventListener('click', () => {
    mePopup.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mePopup.classList.remove('active');
});

const popup = document.querySelector(".Me");
const header = popup.querySelector(".header");

const skillPopup = document.getElementById("Skills");
const skillsHeader = skillPopup.querySelector(".skills-header");

const contact = document.getElementById('contact');
const linksheader = contact.querySelector('.links-header');


let isDragging = false;
let offsetX = 0;
let offsetY = 0;

header.addEventListener("mousedown", (e) => {
    isDragging = true;
    popup.classList.add("dragging");

    offsetX = e.clientX - popup.offsetLeft;
    offsetY = e.clientY - popup.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    popup.style.left = e.clientX - offsetX + "px";
    popup.style.top = e.clientY - offsetY + "px";
    popup.style.transform = "none";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    popup.classList.remove("dragging");
});

skillsHeader.addEventListener("mousedown", (e) => {
    isDragging = true
    offsetX = e.clientX - skillPopup.offsetLeft;
    offsetY = e.clientY - skillPopup.offsetTop;
    skillPopup.classList.add("dragging");
});

document.addEventListener("mousemove",(e) => {
    if (!isDragging) return;

    skillsPopup.style.left = e.clientX - offsetX + "px";
    skillPopup.style.top = e.clientY - offsetY + "px";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    skillPopup.classList.remove("dragging");
});

linksheader.addEventListener("mousedown", (e) => {
    isDragging = true
    offsetX = e.clientX - contact.offsetLeft;
    offsetY = e.clientY - contact.offsetTop;
    contact.classList.add("dragging");
});

document.addEventListener("mousemove",(e) => {
    if (!isDragging) return;

    contact.style.left = e.clientX - offsetX + "px";
    contact.style.top = e.clientY - offsetY + "px";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    contact.classList.remove("dragging");
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