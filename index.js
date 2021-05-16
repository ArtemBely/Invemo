var imageCode = document.getElementById('infrastructure_img');
var title = document.getElementById('title_main');
window.addEventListener('scroll', () => {
  let num = title.getBoundingClientRect().top;
  let code = imageCode.getBoundingClientRect().top;
  if(window.innerHeight > (code + 300) && code > -950) {
    let diff = window.innerHeight - code;
    imageCode.style.transform = `translateY(-${diff / 4}px)`
  }
});
