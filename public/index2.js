window.addEventListener('scroll', () => {
  let mainCont = document.getElementById('mainCont');
  if(mainCont.style.zIndex != 1000) {
    mainCont.style.zIndex = 1000;
  }
});
window.addEventListener('click', () => {
  let mainCont = document.getElementById('mainCont');
  mainCont.style.zIndex = 1000;
  mainCont.style.zIndex = 999;
});
