
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
  $("#introduction").show();
  $("#avatar").hide();
  $("#alert").hide();
  $("#badge").hide();
  $("#card").hide();
  $("#color").hide();
  $("#typography").hide();
  $("#button").hide();
  $("#image").hide();
  $("#toast").hide();
  $("#list").hide();
  $("#input").hide();

  $(".sidebar").on("click", "div", ()=>{
    window.scrollTo(0, 0);
  })

  $("#introduction-id").click(function () {
    $(this).addClass("bold-text")
    $("#introduction").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#introduction').siblings().hide()
  });
  $("#color-id").click(function () {
    $(this).addClass("bold-text")
    $("#color").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#color').siblings().hide()
  });
  $("#typography-id").click(function () {
    $(this).addClass("bold-text")
    $("#typography").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#typography').siblings().hide()
  });
  $("#avatar-id").click(function () {
    $(this).addClass("bold-text")
    $("#avatar").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#avatar').siblings().hide()
  });
  $("#alert-id").click(function () {
    $(this).addClass("bold-text")
    $("#alert").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#alert').siblings().hide()
  });
  $("#badge-id").click(function () {
    $("#badge").slideDown(500);
    $('#badge').siblings().hide()
    $(this).addClass("bold-text")
    $(this).siblings().removeClass("bold-text")
  });
  $("#button-id").click(function () {
    $(this).addClass("bold-text")
    $("#button").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#button').siblings().hide()
  });
  $("#card-id").click(function () {
    $(this).addClass("bold-text")
    $("#card").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#card').siblings().hide()
  });
  $("#image-id").click(function () {
    $(this).addClass("bold-text")
    $("#image").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#image').siblings().hide()
  });
  $("#input-id").click(function () {
    $(this).addClass("bold-text")
    $("#input").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#input').siblings().hide()
  });
  $("#toast-id").click(function () {
    $(this).addClass("bold-text")
    $("#toast").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#toast').siblings().hide()
  });
  $("#list-id").click(function () {
    $(this).addClass("bold-text")
    $("#list").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#list').siblings().hide()
  });
});

