
createHomePage = function() {
    const home_header= document.createElement("h1");
    home_header.setAttribute("id","home_header");
    home_header.textContent="Home";
    console.log("Home page created");
    return home_header
}

const main = document.querySelector('#main');
main.appendChild(createHomePage());
//business description
const description= document.createElement("div")
description.setAttribute("id","item")
const left_side=document.createElement("div")
left_side.setAttribute("id","leftside")

const description_header = document.createElement('p');
description_header.textContent = "The Cauldron" ;
description_header.style.fontFamily="haunted_moon"
const description_paragraph = document.createElement('p')
description_paragraph.textContent ="blah blah blah we brew the potions, you drink them"

left_side.appendChild(description_header)
left_side.appendChild(description_paragraph)
description.appendChild(left_side)
main.appendChild(description)

//reviews
const review = document.createElement("div")
review.setAttribute("id","item")
const review_element = document.createElement("div")
review_element.setAttribute("id","leftside")

const review_header = document.createElement("p")
review_header.textContent="Reviews"
review_header.style.fontFamily="haunted_moon"
const reviewer1= document.createElement("p")
reviewer1.textContent= "I don't know what was in that stuff, but dang does it work miracles! I am on husband number three now! -Barb"

review_element.appendChild(review_header)
review_element.appendChild(reviewer1)
review.appendChild(review_element)
main.appendChild(review)



//hours
const hours = document.createElement("div")
hours.setAttribute("id", "item")
const hour_element = document.createElement("div")
hour_element.setAttribute("id","leftside")

const hours_header= document.createElement('p')
hours_header.textContent="Hours"
hours_header.style.fontFamily="haunted_moon"

const sunday = document.createElement('p')
const monday = document.createElement('p')
const tuesday = document.createElement('p')
const wednesday = document.createElement('p')
const thursday = document.createElement('p')
const friday = document.createElement('p')
const saturday = document.createElement('p')

sunday.textContent="Sunday : 2pm-10pm"
monday.textContent="Monday :  9am-1pm"
tuesday.textContent="Tuesday :  closed"
wednesday.textContent="Wednesday : closed"
thursday. textContent="Thursday : 4pm- 10pm"
friday.textContent="Friday : 1pm - 9pm"
saturday.textContent="Saturday : 2pm - 10pm"


hour_element.appendChild(hours_header)
hour_element.appendChild(sunday)
hour_element.appendChild(monday)
hour_element.appendChild(tuesday)
hour_element.appendChild(wednesday)
hour_element.appendChild(thursday)
hour_element.appendChild(friday)
hour_element.appendChild(saturday)

hours.appendChild(hour_element)
main.appendChild(hours)

//location
const address = document.createElement("div")
address.setAttribute("id", "item")
const location_element = document.createElement("div")
location_element.setAttribute("id","leftside")
const location_header= document.createElement("p")
location_header.textContent="Location"
location_header.style.fontFamily="haunted_moon"
const address_for_you=document.createElement('p')
address_for_you.textContent="123 Chicken Feet Run"

location_element.appendChild(location_header)
location_element.appendChild(address_for_you)
address.appendChild(location_element)
main.appendChild(address)

