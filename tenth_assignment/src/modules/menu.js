function createMenu(){
  const element = document.createElement('div');
  element.addClassList("menu")
  return element;
}
document.body.appendChild(createMenu());
export default loadMenu;