$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

//   Adding animation in counter menu
$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1200
    });
});

// Styling Image gallery home page starts here
var indexValue = 0;
function slideShow() {
  setTimeout(slideShow, 2500);
  var x;
  const img = document.querySelectorAll(".image-changer");
  for (x = 0; x < img.length; x++) {
    img[x].style.display = "none";
  }
  indexValue++;
  if (indexValue > img.length) { indexValue == 1 }
  img[indexValue - 1].style.display = "block";
}
slideShow();
// Styling Image gallery home page ends here

// Making Dynamic to Image Gallery
 //selecting all required elements
 const filterItem = document.querySelector(".items");
 const filterImg = document.querySelectorAll(".gallery .image");

 window.onload = () => { //after window loaded
   filterItem.onclick = (selectedItem) => { //if user click on filterItem div
     if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
       filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
       selectedItem.target.classList.add("active"); //add that active class on user selected item
       let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
       filterImg.forEach((image) => {
         let filterImges = image.getAttribute("data-name"); //getting image data-name value
         //if user selected item data-name value is equal to images data-name value
         //or user selected item data-name value is equal to "all"
         if ((filterImges == filterName) || (filterName == "all")) {
           image.classList.remove("hide"); //first remove the hide class from the image
           image.classList.add("show"); //add show class in image
         } else {
           image.classList.add("hide"); //add hide class in image
           image.classList.remove("show"); //remove show class from the image
         }
       });
     }
   }
   for (let i = 0; i < filterImg.length; i++) {
     filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
   }
 }

 //fullscreen image preview function
 //selecting all required elements
 const previewBox = document.querySelector(".preview-box"),
   categoryName = previewBox.querySelector(".title p"),
   previewImg = previewBox.querySelector("img"),
   closeIcon = previewBox.querySelector(".icon"),
   shadow = document.querySelector(".shadow");

 function preview(element) {
   //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
   document.querySelector(".sect-img").style.overflow = "hidden";
   let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
   let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
   previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
   categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
   previewBox.classList.add("show"); //show the preview image box
   shadow.classList.add("show"); //show the light grey background
   closeIcon.onclick = () => { //if user click on close icon of preview box
     previewBox.classList.remove("show"); //hide the preview box
     shadow.classList.remove("show"); //hide the light grey background
     document.querySelector(".sect-img").style.overflow = "auto"; //show the scroll bar on body
   }
 }

//  styling contact form starts here
var myCenter = new google.maps.LatLng(51.308742, -0.320850);
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
//  styling contact form ends here



