
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

    const left_side=document.createElement("div")
    left_side.setAttribute("id","leftside")
    const right_side=document.createElement("div")
    right_side.setAttribute("id","rightside")

    
  
    //create menu item elements
    const contactName = document.createElement('p');
    const contactRole = document.createElement('p');
    const contactEmail= document.createElement('p');
    const contactPhone= document.createElement('p');


     //assign the values to the menu items
    contactName.textContent = newContactItem.name;
    contactName.style.fontFamily="haunted_moon"
    contactName.style.textShadow=" 2px 4px 4px #CF7BE6" ;
    contactRole.textContent = newContactItem.role;
    contactEmail.textContent = "Email: " + newContactItem.email;
    contactPhone.textContent = "Phone " + newContactItem.phone;
    //getting image for the food item
    const contactImage = document.createElement("img");
    contactImage.src = `images/${newContactItem.name.toLowerCase().replace(/ /g,"_").replace(/\'/g,"")}_potion.png`;
    contactImage.alt = `${newContactItem.name}`;
    
    left_side.appendChild(contactImage);
    right_side.appendChild(contactName);
    right_side.appendChild(contactRole);
    right_side.appendChild(contactEmail);
    right_side.appendChild(contactPhone);

    contact.appendChild(left_side);
    contact.appendChild(right_side);
    //console.log("item was added")
    console.log(contactName.textContent + " was added to page")
    return contact;
  }
}
function loadContactPage(){
    let myContacts = new Contacts();
    const main = document.querySelector('#main');
    main.appendChild(myContacts.createContactPage());
  
    let baba_yaga= new contactItem("Baba Yaga","Brew Master", "baba_yaga_chicken_feet@cauldron.com","123-456-7890")
    let anise_fartsparkler= new contactItem("Anise Fartsparkler", "Apprentice","anise_fartsparkler_rainbows@cauldron.com","234-567-8901")
    myContacts.addContactItem(baba_yaga)
    myContacts.addContactItem(anise_fartsparkler)
  
    const container = document.createElement("div");
    container.setAttribute("id","container")
  
    for (var i = 0; i < myContacts.contacts.length; i++) {
     container.appendChild(myContacts.contacts[i].createContact(myContacts.contacts[i]));
    }

    main.appendChild(container);
  }
  

loadContactPage();
  
//export default loadContactPage;