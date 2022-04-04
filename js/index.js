$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
    });
    // toggle menu/navbar
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
    const inputs = document.querySelectorAll(".input");
    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }
    function blurFunc() {
      let parent = this.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  });
  