const menuBox = document.querySelector('.menu');
const menuNav = document.querySelector('.options');
menuBox.addEventListener('click', () => {
	menuBox.classList.toggle('active');
    menuNav.classList.toggle('active');
});

// const menuSlider = () => {
//     const hamburger = document.querySelector(".hamburger");
//     const menu = document.querySelector(".menu");
//     const navLinks = document.querySelectorAll(".menu li");

//     // hamburger toggle
//     hamburger.addEventListener('click',() => {
//         menu.classList.toggle('nav-active');
        
//         // animate links
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 // remove style
//                 link.style.animation = ''
//             } else {
//                 // adding style
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
//             }
//         });

//         // animate burger
//         hamburger.classList.toggle('toggle');

//     });

// }

// const typeWriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = ''; //represents words along the way
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10); //base 10 number
//     this.type();
//     this.isDeleting = false; //represents state if deleting or not
// }

// // type method
// typeWriter.prototype.type = function() {
//     // current word index from data-words
//     const currentWord = this.wordIndex % this.words.length;
//     const fullTxt = this.words[currentWord];

//     // check if deleting
//     if (this.isDeleting) {
//         // remove char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // add char
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     // setting highlight background
//     if (this.wordIndex % 5 === 0) {
//         this.txtElement.style.backgroundColor = '#0ACF83';
//     } else if (this.wordIndex % 5 === 1) {
//         this.txtElement.style.backgroundColor = '#1ABCFE';
//     } else if (this.wordIndex % 5 === 2) {
//         this.txtElement.style.backgroundColor = '#A259FF';
//     } else if (this.wordIndex % 5 === 3) {
//         this.txtElement.style.backgroundColor = '#FCCC63';
//     } else if (this.wordIndex % 5 === 4) {
//         this.txtElement.style.backgroundColor = '#FF7262';
//     }

//     // insert txt into element
//     this.txtElement.innerHTML = `<span class="typewriter_text">${this.txt}</span>`

//     // initial type speed
//     let typeSpeed = 200;
//     if (this.isDeleting) {
//         typeSpeed /= 2;
//     }
//     // is word complete?
//     if (!this.isDeleting && this.txt === fullTxt) {
//         // pause at end
//         typeSpeed = this.wait;
//         // delete true
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//         // change word when delete is empty
//         this.isDeleting = false;
//         this.wordIndex++;
//         // pause before next word
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);
// }

// // init on DOM load
// document.addEventListener('DOMContentLoaded', init);
// // init app
// function init() {
//     const txtElement = document.querySelector('.typewriter');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     new typeWriter(txtElement, words, wait);
// }

// const app = () => {
//     menuSlider();
// }

// app();