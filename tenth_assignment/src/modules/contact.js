function createContact(){
  const element = document.createElement('div');
  element.addClassList("contact")
  return element;
}
document.body.appendChild(createContact());
export default loadContact;