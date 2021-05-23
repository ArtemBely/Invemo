var imageCode = document.getElementById('infrastructure_img');
var title = document.getElementById('title_main');
window.addEventListener('scroll', () => {
  let num = title.getBoundingClientRect().top;
  let code = imageCode.getBoundingClientRect().top;
  if(window.innerHeight > (code + 300) && code > -950) {
    let diff = window.innerHeight - code;
    imageCode.style.transform = `translateY(-${diff / 10}px)`
  }
});

var close = document.getElementById('close');
var close1 = document.getElementById('close1');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');
var hidd = document.getElementById('hiddenMenu1');

close.addEventListener('click', () => {
  close1.classList.toggle('rotate_close1');
  close2.classList.toggle('transform_close2');
  close3.classList.toggle('rotate_close3');
  hidd.classList.toggle('showHidden');
});


$(document).ready(function() {

	//E-mail Ajax Send
	$("#order_our").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявка успешно принята!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
