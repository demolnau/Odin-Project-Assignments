import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

//init();


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

/*
function init(){
  loadPage();
  loadHome();
  loadNavEvents();
}
*/
