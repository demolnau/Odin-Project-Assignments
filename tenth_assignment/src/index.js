import 'styles.css'
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

init();
createTabs = function() {
  const tabs= document.createElement("div");
  tabs.classList("tab")
  console.log("Tabs created");

  const tab_home = document.createElement("button")
  const tab_menu = document.createElement("button")
  const tab_contact = document.createElement("button")

  tab_home.classList("tablink")
  tab_menu.classList("tablink")
  tab_contact.clastList("tablink")

  tab_home.textContent("Home")
  tab_menu.textContent("Menu")
  tab_contact.textContent("Contact")

  tab_home.setAttribute("onclick", "loadHome")
  tab_menu.setAttribute("onclick","loadMenu")
  tab_contact.setAttribute("onclick","loadContact")


  return tabs
}

/*
function components() {
  const homeBtn = document.getElementById('home');
  const menuBtn=document.getElementById('menu');
  const contactBtn=document.getElementById('contact');

  homeBtn.onclick = loadHome;
  element.appendChild(homeBtn);

  menuBtn.onclick= loadMenu;
  element.appendChild(menuBtn);

  contactBtn.onclick = loadContact;
  element.appendChild(contactBtn);

  return element;
}

document.body.appendChild(components());
*/


function init(){
  //loadPage();
  loadHome();
  loadMenu();
  loadContact();
  //loadNavEvents();
}

