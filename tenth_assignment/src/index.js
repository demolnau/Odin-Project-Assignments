import './styles.css'
import loadHome from './modules/home.js';
import loadMenu from './modules/menu.js';
import loadContact from './modules/contact.js';
//import crystalBall from './images/crystal_ball.png'
import cloudsBackground from './images/clouds_background.jpg';


function createHeader(){
  const header = document.createElement("h1")
  header.setAttribute("id", "header")
  header.textContent = "The Witch's Cauldron"
  console.log("header created")
  return header
}

function createTabs() {
  const tabs= document.createElement("div");
  tabs.setAttribute("class","tabs")
  console.log("Tabs created");

  const tab_home = document.createElement("button")
  const tab_menu = document.createElement("button")
  const tab_contact = document.createElement("button")
  tab_home.setAttribute("id","home")
  tab_menu.setAttribute("id","menu")
  tab_contact.setAttribute("id","contact")
  
  tab_home.classList.add('tab')
  tab_menu.classList.add('tab')
  tab_contact.classList.add('tab')

  tab_home.textContent= "Home";
  tab_menu.textContent = "Menu";
  tab_contact.textContent = "Contact";

 

  tab_home.onclick = loadHome;
  tab_menu.onclick = loadMenu;
  tab_contact.onclick = loadContact;

  
  tabs.appendChild(tab_home)
  tabs.appendChild(tab_menu)
  tabs.appendChild(tab_contact)

  return tabs
}

function init(){

  const content = document.getElementById('content');
  const clouds = new Image();
  clouds.src = cloudsBackground;
  content.appendChild(clouds)
  //const bi = document.getElementsByClassName("body");

  const header =document.getElementById('header')
  //const main = document.getElementById('main')
  //main.textContent= ""

  /*
  const footer = document.getElementById('footer')
  const crystal_ball = new Image()
  crystal_ball.src = crystalBall;
  crystal_ball.style.maxWidth="20%";
  footer.appendChild(crystal_ball);
  */
  header.appendChild(createHeader());
  nav.appendChild(createTabs());
  

  loadHome();

}

init();
