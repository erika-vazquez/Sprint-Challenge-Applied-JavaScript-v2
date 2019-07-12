// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics') //GET request 
.then( (response) => {                   // Handles Success: here's where we get the results from server
    console.log('response', response)   //test
    const tabs = document.querySelector('.topics')    //DOM manipulation
     response.data.topics.forEach( item => {    //get topics inside data array
      tabs.appendChild(tabsComponent(item)) //appends the tabsComponent value to tabs
    }) 
  })
   // Handles failure:
  .catch( (err) => {  
    console.log(err)
  })

  //function that accepts a single object as its only argument
  //Creates a tabs component 
  function tabsComponent(data){
    const tab = document.createElement('div');
    tab.classList.add('tab')
    tab.textContent = data;
    
    return tab
  }
  
