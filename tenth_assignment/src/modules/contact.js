import baba_yaga_picture from "../images/baba_yaga.jpeg"
import anise_fartsparkler_picture from '../images/anise_fartsparkler.jpg'

class Contacts{
  constructor(){
    this.contacts = []
  }
  
  addContactItem=function(newContact){
    this.contacts.push(newContact)
  }
  removeContactItem=function(name){
    for (let i =0; i<this.contacts.length; i++){
      if(this.contacts[i].name==name)
      this.contacts.splice(i,1);
      console.log(this.contacts);
    }
  }

createContactPage = function() {
  const contact_header= document.createElement("h1");
  contact_header.setAttribute("id","contact_header");
  contact_header.textContent="Contact";
  console.log("Contact page created");
  return contact_header
}

}



class contactItem { 
constructor(name, role, email, phone){
  this.name = name
  this.role = role
  this.email = email
  this.phone = phone
  
  this.info = function() { 
    console.log(name + ", Position: " + role+ ", Email at:  " + email + ", or call at : "+ phone) ;
  }
}

createContact=function(newContactItem){
  const contact= document.createElement("div")
  contact.setAttribute("id","item")
  const contact_header = document.createElement("div")
  //contact_header.setAttribute("id","item_header")
  //contact_header.textContent=newContactItem.name;

  const contact_content = document.createElement("div")
  contact_content.setAttribute("id","item_content")

  const left_side=document.createElement("div")
  left_side.setAttribute("id","leftside")
  left_side.style.height="200px"
  left_side.style.maxWidth="35%"

  const right_side=document.createElement("div")
  right_side.setAttribute("id","rightside")

  

  //create menu item elements
  const contactName = document.createElement('p');
  const contactRole = document.createElement('div');
  const contactEmail= document.createElement('div');
  const contactPhone= document.createElement('div');


   //assign the values to the menu items
  contactName.textContent = newContactItem.name;
  contactName.style.fontFamily="haunted_moon"
  contactName.style.textShadow=" 2px 4px 4px #CF7BE6" ;
  contactRole.textContent = newContactItem.role;
  contactEmail.textContent = "Email: " + newContactItem.email;
  contactEmail.style.overflow = "hidden";
  contactEmail.style.textOverflow= "ellipsis";
  contactEmail.style.wordBreak = "true";
  //contactEmail.style.fontSize = "0.6em";
  //contactEmail.style.maxHeight = "2em";
  contactPhone.textContent = "Phone " + newContactItem.phone;
  //getting image for the contacts
  const contactImage=new Image();
  if(newContactItem.name=='Anise Fartsparkler'){
    contactImage.src = anise_fartsparkler_picture;
  }
  else{
    contactImage.src = baba_yaga_picture;
  }
  console.log(contactImage.src)
  left_side.appendChild(contactImage)

  right_side.appendChild(contactName);
  right_side.appendChild(contactRole);
  right_side.appendChild(contactEmail);
  right_side.appendChild(contactPhone);

  contact_content.appendChild(left_side);
  contact_content.appendChild(right_side);
  //contact.appendChild(contact_header);
  contact.appendChild(contact_content)
  //console.log("item was added")
 
  return contact;
}
}

function loadContactPage(){
  let myContacts = new Contacts();
  const main = document.querySelector('#main');
  main.textContent="";
  main.appendChild(myContacts.createContactPage());

  let baba_yaga= new contactItem("Baba Yaga","Brew Master", "chicken_feet@cauldron.com","123-456-7890")
  let anise_fartsparkler= new contactItem("Anise Fartsparkler", "Apprentice","anise_fartsparkler@cauldron.com","234-567-8901")
  myContacts.addContactItem(baba_yaga)
  myContacts.addContactItem(anise_fartsparkler)

  const container = document.createElement("div");
  container.setAttribute("id","container")

  for (var i = 0; i < myContacts.contacts.length; i++) {
   container.appendChild(myContacts.contacts[i].createContact(myContacts.contacts[i]));
  }

  main.appendChild(container);
}


//loadContactPage();

export default loadContactPage;