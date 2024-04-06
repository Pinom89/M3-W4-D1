
window.addEventListener('scroll', function() {
    var element = document.getElementById("carosello")
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    // Check if the scroll position is greater than or equal to window height
    // This means that the user has scrolled down to the element
    if (scrollPosition = windowHeight) {
      // Add the class to show the element
      element.classList.add('scale-in-hor-center');
      element.classList.remove('invisible');
    } else {
      // Remove the class to hide the element
      element.classList.remove('scale-in-hor-center');
    }
  });

  
window.addEventListener('scroll', function() {
    var element = document.getElementById("lista_immagini")
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    // Check if the scroll position is greater than or equal to window height
    // This means that the user has scrolled down to the element
    if (scrollPosition = windowHeight) {
      // Add the class to show the element
      element.classList.add('scale-in-hor-center2');
      element.classList.remove('invisible');
    } else {
      // Remove the class to hide the element
      element.classList.remove('scale-in-hor-center2');
    }
  });


   
