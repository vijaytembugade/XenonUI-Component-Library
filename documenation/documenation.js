
// navabar javascript

const hamburger = document.querySelector("#hamburger");
const responsiveNavbar = document.querySelector(".responsive-navbar");
const closeNavbar = document.querySelector("#closeNavbar");

hamburger.addEventListener("click", () => {
  responsiveNavbar.style.display = "flex";
});

closeNavbar.addEventListener("click", () => {
  responsiveNavbar.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.outerWidth > 768) {
    responsiveNavbar.style.display = "none";
  }
})

//show and hide 
$(document).ready(function () {
  $("#avatar").hide();
  $("#alert").show();
  $("#badge").hide();

  $("#avatar-id").click(function () {
    $(this).addClass("bold-text")
    $("#avatar").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#avatar').siblings().hide()
  });


  $("#badge-id").click(function () {
    $(this).addClass("bold-text")
    $("#badge").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#badge').siblings().hide()
  });


  $("#alert-id").click(function () {
    $("#alert").slideDown(500);
    $('#alert').siblings().hide()
    $(this).addClass("bold-text")
    $(this).siblings().removeClass("bold-text")
  });

});

