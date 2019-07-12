// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const header = document.querySelector('.header')

function Header(hdr, lambDate, lambTitle, lambTemp) {
// create the elements
const headerC = document.createElement('div')
const date = document.createElement('span')
const title = document.createElement('h1')
const temp = document.createElement('span')

// set the styles
headerC.classList.add('headerC')
date.classList.add('headerC') 
title.classList.add('title')
temp.classList.add('temp')



}