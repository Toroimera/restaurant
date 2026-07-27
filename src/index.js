import "./styles.css";
import { loadHomePage } from './homepage.js';
import { loadMenuPage } from './menu.js';
import { loadAboutPage } from './about.js';

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');
const content = document.getElementById('content');

homeBtn.addEventListener('click', () => {
    loadHomePage(content);
});

aboutBtn.addEventListener('click', () => {
    loadAboutPage(content);
});

menuBtn.addEventListener('click', () => {
    loadMenuPage(content);
});