function createHomePage() {
  const home_header= document.createElement("h1");
  home_header.setAttribute("id","home_header");
  home_header.textContent="Home";
  console.log("Home page created");
  return home_header
}

//business description
function createDescriptionItem(){  
  const description= document.createElement("div")
  description.setAttribute("id","item")

  const description_header = document.createElement('div');
  description_header.textContent = "The Cauldron" ;
  description_header.setAttribute("id","item_header")

  const description_paragraph = document.createElement('p')
  description_paragraph.setAttribute("id","item_content")
  description_paragraph.textContent ="blah blah blah we brew the potions, you drink them"

  description.appendChild(description_header)
  description.appendChild(description_paragraph)

  return description

}


//reviews
function createReviewItem(){
  const review = document.createElement("div")
  review.setAttribute("id","item")
  const review_header = document.createElement("div")
  review_header.setAttribute("id","item_header")
  review_header.textContent="Reviews"
  
  const  reviewer1= document.createElement("div")
  reviewer1.setAttribute("id","item_content")

  const left_side=document.createElement("div")
  left_side.setAttribute("id","leftside")
  left_side.style.maxWidth="40%"
  const star=document.createElement("img")
  star.src="../src/images/star.png"
  star.style.maxWidth= "20%"
  star.style.height="auto"
  left_side.appendChild(star)
  const star2=document.createElement("img")
  star2.src="../src/images/star.png"
  star2.style.maxWidth= "20%"
  star2.style.height="auto"
  left_side.appendChild(star2)

  const star3=document.createElement("img")
  star3.src="../src/images/star.png"
  star3.style.maxWidth= "20%"
  star3.style.height="auto"
  left_side.appendChild(star3)
  const star4=document.createElement("img")
  star4.src="../src/images/star.png"
  star4.style.maxWidth= "20%"
  star4.style.height="auto"
  left_side.appendChild(star4)
  const star5=document.createElement("img")
  star5.src="../src/images/star.png"
  star5.style.maxWidth= "20%"
  star5.style.height="auto"
  left_side.appendChild(star5)
  
  const written_review = document.createElement("p")
  written_review.setAttribute("id","rightside")
  written_review.textContent= "I don't know what was in that stuff, but dang does it work miracles! I am on husband number three now! -Barb"
  

  reviewer1.appendChild(left_side)
  reviewer1.appendChild(written_review)

  review.appendChild(review_header)
  review.appendChild(reviewer1)
  return review
}



//hours
function createHours(){
  const hours = document.createElement("div")
  hours.setAttribute("id", "item")
  
  const hours_header= document.createElement('div')
  hours_header.textContent="Hours"
  hours_header.setAttribute("id","item_header")
  
  const hour_content= document.createElement("div")
  hour_content.setAttribute("id","item_content")

  const hour_element= document.createElement("p")
  hour_element.setAttribute("id","rightside")
  
  
  const sunday = document.createElement('div')
  const monday = document.createElement('div')
  const tuesday = document.createElement('div')
  const wednesday = document.createElement('div')
  const thursday = document.createElement('div')
  const friday = document.createElement('div')
  const saturday = document.createElement('div')
  
  sunday.textContent="Sunday : 2pm-10pm"
  monday.textContent="Monday :  9am-1pm"
  tuesday.textContent="Tuesday :  closed"
  wednesday.textContent="Wednesday : closed"
  thursday. textContent="Thursday : 4pm- 10pm"
  friday.textContent="Friday : 1pm - 9pm"
  saturday.textContent="Saturday : 2pm - 10pm"
  
  
  
  hour_element.appendChild(sunday)
  hour_element.appendChild(monday)
  hour_element.appendChild(tuesday)
  hour_element.appendChild(wednesday)
  hour_element.appendChild(thursday)
  hour_element.appendChild(friday)
  hour_element.appendChild(saturday)
  
  hour_content.appendChild(hour_element)
  hours.appendChild(hours_header)
  hours.appendChild(hour_content)

  return hours
}




//location
function createLocationItem(){
  const address = document.createElement("div")
  address.setAttribute("id", "item")
  const location_element = document.createElement("div")
  location_element.setAttribute("id","leftside")
  const location_header= document.createElement("div")
  location_header.textContent="Location"
  location_header.setAttribute("id","item_header")
  const address_for_you=document.createElement('div')
  address_for_you.setAttribute("id","item_content")
  const right_side= document.createElement("p")
  right_side.setAttribute("id","rightside")
  right_side.textContent="123 Chicken Feet Run Blackforest, Germany 12345-67990"
  
  address_for_you.appendChild(right_side)
  address.appendChild(location_header)
  address.appendChild(address_for_you)

  return address
}



function loadHome(){
  const main = document.querySelector('#main');
  main.textContent="";
  main.appendChild(createHomePage());
  main.appendChild(createDescriptionItem())
  main.appendChild(createReviewItem())
  main.appendChild(createHours())
  main.appendChild(createLocationItem())
  return main;
}
//loadHome()
export default loadHome;