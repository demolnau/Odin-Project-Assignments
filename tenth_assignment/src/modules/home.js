function createHome(){
  const element = document.createElement('div');
  element.addClassList("home")
  return element;
}
document.body.appendChild(createHome());
export default loadHome;
