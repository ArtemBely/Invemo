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
        swal({
        text: "The data has been sent. Our manager will contact you soon.",
        button: "Okay"
        });
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

var cont = document.getElementById('cont_wrap');

document.querySelectorAll('.mobile_header_link').forEach(item => {
  item.addEventListener('click', () => {
    if(320 < window.innerWidth < 770) {
      cont.style.opacity = 0;
      setTimeout(() => {
        cont.style.opacity = 1;
      }, 100);
    }
  });
});

document.querySelectorAll('.m_but').forEach(item => {
  item.addEventListener('click', () => {
    if(320 < window.innerWidth < 770) {
      cont.style.zIndex = '-1000';
      setTimeout(() => {
        cont.style.zIndex = 1;
      }, 10);
    }
  });
});

var modal1 = document.getElementById('modal1');
var mod1 = document.getElementById('mod1');
var mod2 = document.getElementById('mod2');
var mod3 = document.getElementById('mod3');
var mod4 = document.getElementById('mod4');
var mod5 = document.getElementById('mod5');
var link12 = document.getElementById('link12');
var link13 = document.getElementById('link13');
var link14 = document.getElementById('link14');
var link15 = document.getElementById('link15');
var link16 = document.getElementById('link16');

document.querySelectorAll('.special_links').forEach(item => {
  item.addEventListener('click', () => {
    modal1.classList.add('add1');
  });

});
link16.addEventListener('click', () => {
    mod1.classList.add('add1');
});
link12.addEventListener('click', () => {
    mod2.classList.add('add1');
});
link13.addEventListener('click', () => {
    mod3.classList.add('add1');
});
link14.addEventListener('click', () => {
    mod4.classList.add('add1');
});
link15.addEventListener('click', () => {
    mod5.classList.add('add1');
});

modal1.addEventListener('click', () => {
  if(modal1.classList.contains('add1')) {
    modal1.classList.remove('add1');
  }
  document.querySelectorAll('.comTerm').forEach(term => {
    if(term.classList.contains('add1')) {
      term.classList.remove('add1');
    }
  });
});
