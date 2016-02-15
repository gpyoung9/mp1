$('a[href^="#"]').on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 40
     }, 300);
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

$(window).scroll(function() {
	var scrolled_val = $(document).scrollTop();
    var nav_val = $('nav-bar').height();
    var curr_val = scrolled_val + nav_val;

    var sections = document.getElementsByClassName('sections');
    for (var i = 0; i < sections.length; i++){
    	var position = $(sections[i]).position();
    	var height = $(sections[i]).height();
    	if (curr_val >= position.top && curr_val <= position.top + height){
    		var id = $(sections[i]).attr('id') + "-link";
    		console.log(id);
    		$(id).addClass('active');
    		if (i > 0){
    			$(id).removeClass('active');
    		}
    	}

    }
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	    var id = $(sections[sections.length - 1]).attr('id') + "-link";
	    console.log(id);
	    $(id).addClass('active');
	    if (i > 0){
	    	$(id).removeClass('active');
	    }
	}
});

var types_modal = document.getElementById('types');
var types_button = document.getElementById("types-button");
var types_span = document.getElementById("types-close");
var food_modal = document.getElementById('food');
var food_button = document.getElementById("food-button");
var food_span = document.getElementById("food-close");
var pets_modal = document.getElementById('pets');
var pets_button = document.getElementById("pets-button");
var pets_span = document.getElementById("pets-close");

types_button.onclick = function() {
    types_modal.style.display = "block";
}

types_span.onclick = function() {
    types_modal.style.display = "none";
}


food_button.onclick = function() {
    food_modal.style.display = "block";
}

food_span.onclick = function() {
    food_modal.style.display = "none";
}

pets_button.onclick = function() {
    pets_modal.style.display = "block";
}

pets_span.onclick = function() {
    pets_modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == types_modal) {
        types_modal.style.display = "none";
    }
    if (event.target == food_modal) {
        food_modal.style.display = "none";
    }
    if (event.target == pets_modal) {
        pets_modal.style.display = "none";
    }
}

// var abouts = document.getElementsByClassName("modal");

// for (var i = 0; i < abouts.length; i++){
// 	var modal = document.getElementById(abouts[i]);
// 	var button = document.getElementById(abouts[i] + "-button");
// 	var span = document.getElementById(abouts[i] + "-close");
// 	button.onclick = function() {
// 	    modal.style.display = "block";
// 	}

// 	span.onclick = function() {
// 	    modal.style.display = "none";
// 	}

// 	window.onclick = function(event) {
// 	    if (event.target == modal) {
// 	        modal.style.display = "none";
// 	    }
// 	}
// }

// carousel = (function(){
//   var box = document.querySelector('.carouselbox');
//   var next = box.querySelector('.next');
//   var prev = box.querySelector('.prev');
//   var items = box.querySelectorAll('.content li');
//   var counter = 0;
//   var amount = items.length;
//   var current = items[0];
//   box.classList.add('active');
//   function navigate(direction) {
//     current.classList.remove('current');
//     counter = counter + direction;
//     if (direction === -1 && 
//         counter < 0) { 
//       counter = amount - 1; 
//     }
//     if (direction === 1 && 
//         !items[counter]) { 
//       counter = 0;
//     }
//     current = items[counter];
//     current.classList.add('current');
//   }
//   next.addEventListener('click', function(ev) {
//     navigate(1);
//   });
//   prev.addEventListener('click', function(ev) {
//     navigate(-1);
//   });
//   navigate(0);
// })();

// carousel = (function() {
// 	var container = document.querySelector('.carousel');
// 	var next =  container.querySelector('.next');
// 	var prev = container.querySelector('.prev');
// 	var pictures = container.querySelectorAll('.content li');
// 	var counter = 0;
// 	var current_pic = pictures[0];

// 	container.classList.add('active');

// 	function navigate(direction) {
// 		current_pic.classList.remove('current');
// 		counter = counter + direction;
		
// 		if (direction === -1 && counter < 0){
// 			counter = pictures.length - 1;
// 		}

// 		if (direction === 1 && !pictures[counter]){
// 			counter = 0;
// 		}
// 		current_pic = items[counter];
// 		current_pic.classList.add('current');
// 	}

// 	next.addEventListener('click', function(e) {
// 		navigate(1);
// 	})
// 	prev.addEventListener('click', function(e) {
// 		navigate(-1);
// 	})
// 	navigate(0);
// });

carousel = (function(){
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');

  function navigate(direction) {
    current.classList.remove('current');
    // current.classList.add('notcurrent');
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    // current.classList.add('fadeIn');
    current.classList.add('current');
  }

  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();