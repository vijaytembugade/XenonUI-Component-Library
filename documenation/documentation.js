
//show and hide 
$(function () {
  // navabar javascript

  const hamburger = document.querySelector("#hamburger");
  const responsiveNavbar = document.querySelector(".responsive-navbar");
  const closeNavbar = document.querySelector("#closeNavbar");

  hamburger.addEventListener("click", () => {
    responsiveNavbar.classList.toggle("display-navbar");
  });

  closeNavbar.addEventListener("click", () => {
    responsiveNavbar.classList.toggle("display-navbar");
  });


  //show aand hide toast
  const showToast = document.querySelector("#showToast");
  const toast = document.querySelector(".toast");
  showToast && showToast.addEventListener("click", () => {
    toast.classList.toggle("hidden");
  });

  const closeToast = document.querySelector(".close-toast")
  closeToast && closeToast.addEventListener("click", () => {
    toast.classList.toggle("hidden");
  })

  //dark mode


  function darkMode(){
    localStorage.setItem("theme", "dark-mode")
    document.querySelector(".dark-mode").innerHTML = `<span class="material-icons">light_mode</span>`
    document.documentElement.style.setProperty("--bg-color", "#1f2933");
    document.documentElement.style.setProperty("--classic-color", "#4c4c4c");
    document.documentElement.style.setProperty("--text-color", "#f7f7f7");
    document.documentElement.style.setProperty("--light-color", "#2c2c2c");
    document.querySelector(".nav-brand").style.backGround
  }

  function lightMode(){
    localStorage.setItem("theme", "light-mode")
    document.querySelector(".dark-mode").innerHTML = `<span class="material-icons">dark_mode</span>`
    document.documentElement.style.setProperty("--bg-color", "#f1f1f1");
    document.documentElement.style.setProperty("--classic-color", "#ddd");
    document.documentElement.style.setProperty("--text-color", "#171717");
    document.documentElement.style.setProperty("--light-color", "#fff");
    document.querySelector(".nav-brand").style.backGround
  }

  if (!localStorage.getItem("theme")){
    console.log("decided")
    localStorage.setItem("theme", "light-mode")
  }else{
    if (localStorage.getItem("theme") === "light-mode") {
      lightMode()
    } else if (localStorage.getItem("theme") === "dark-mode") {
      darkMode()
    }
  }

  document.querySelector(".dark-mode").addEventListener("click", () => {
    if (localStorage.getItem("theme") === "light-mode") {
      darkMode()
    } else if (localStorage.getItem("theme") === "dark-mode") {
      localStorage.setItem("theme", "light-mode")
      lightMode()
    }
  })


  $("#introduction").show();
  $("#color").hide();
  $("#typography").hide();
  $("#avatar").hide();
  $("#alert").hide();
  $("#badge").hide();
  $("#card").hide();
  $("#button").hide();
  $("#image").hide();
  $("#input").hide();
  $("#toast").hide();
  $("#list").hide();
  $("#rating").hide();

  $(".sidebar").on("click", "div", () => {
    console.log(this)
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
  $("#rating-id").click(function () {
    $(this).addClass("bold-text")
    $("#rating").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#rating').siblings().hide()
  });

  //responsive navbar code
  $("#responsive-introduction-id").click(function () {
    $(this).addClass("bold-text")
    $("#introduction").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#introduction').siblings().hide()
  });
  $("#responsive-color-id").click(function () {
    $(this).addClass("bold-text")
    $("#color").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#color').siblings().hide()
  });
  $("#responsive-typography-id").click(function () {
    $(this).addClass("bold-text")
    $("#typography").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#typography').siblings().hide()
  });
  $("#responsive-avatar-id").click(function () {
    $(this).addClass("bold-text")
    $("#avatar").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#avatar').siblings().hide()
  });
  $("#responsive-alert-id").click(function () {
    $(this).addClass("bold-text")
    $("#alert").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#alert').siblings().hide()
  });
  $("#responsive-badge-id").click(function () {
    $("#badge").slideDown(500);
    $('#badge').siblings().hide()
    $(this).addClass("bold-text")
    $(this).siblings().removeClass("bold-text")
  });
  $("#responsive-button-id").click(function () {
    $(this).addClass("bold-text")
    $("#button").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#button').siblings().hide()
  });
  $("#responsive-card-id").click(function () {
    $(this).addClass("bold-text")
    $("#card").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#card').siblings().hide()
  });
  $("#responsive-image-id").click(function () {
    $(this).addClass("bold-text")
    $("#image").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#image').siblings().hide()
  });
  $("#responsive-input-id").click(function () {
    $(this).addClass("bold-text")
    $("#input").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#input').siblings().hide()
  });
  $("#responsive-toast-id").click(function () {
    $(this).addClass("bold-text")
    $("#toast").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#toast').siblings().hide()
  });
  $("#responsive-list-id").click(function () {
    $(this).addClass("bold-text")
    $("#list").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#list').siblings().hide()
  });
  $("#responsive-rating-id").click(function () {
    $(this).addClass("bold-text")
    $("#rating").slideDown(500);
    $(this).siblings().removeClass("bold-text")
    $('#rating').siblings().hide()
  });
});

