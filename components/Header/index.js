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
const header = document.querySelector('.header-component')

function Header(hdr, lambDate, lambTitle, lambTemp) {
// create the elements
const headerC = document.createElement('div')
const date = document.createElement('span')
const title = document.createElement('h1')
const temp = document.createElement('span')

 // Setup structure of the elements
 headerC.appendChild(date)
 headerC.appendChild(title)
 headerC.appendChild(temp)


// set the classnames
headerC.classList.add('header')
title.classList.add('header')
date.classList.add('date') 
temp.classList.add('temp')

// set text content
title.textContent = 'Lambda Times'
date.textContent = 'SMARCH 28, 2019'
temp.textContent = '98 deg'


}