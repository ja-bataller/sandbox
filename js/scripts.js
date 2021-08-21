addToCartButton = document.querySelectorAll(".add-to-cart-button");

document
  .querySelectorAll(".add-to-cart-button")
  .forEach(function (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      addToCartButton.classList.add("added");
      iziToast.error({
        title: data.errors.username,
        message: "Unauthorized Access",
        position: "topCenter",
        timeout: 3000,
    
     });
    });
  });

  $(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  });
