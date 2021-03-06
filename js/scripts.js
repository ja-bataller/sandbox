let subscribeBtn = document.querySelector("#subscribeBtn")

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", function(e){
    e.preventDefault()
  
    Swal.fire({
      title: 'Success!',
      text: 'Thank you for subscribing to our newsletter.',
      icon: 'success',
      confirmButtonText: 'Close'
    })
  })
}

let sendBtn = document.querySelector("#sendBtn")

if(sendBtn) {
  sendBtn.addEventListener("click", function(e){
    e.preventDefault()
  
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      icon: 'success',
      confirmButtonText: 'Close'
    })
  })
}

let checkoutBtn = document.querySelector("#checkoutBtn")

if(checkoutBtn) {
  checkoutBtn.addEventListener("click", function(e){
    e.preventDefault()
  
    Swal.fire({
      title: 'Success!',
      text: 'Thank you for placing your order at Sandbox Store.',
      icon: 'success',
      confirmButtonText: 'Close'
    })

    setTimeout(function(){ window.location.href='home.html' }, 2000);
  })

  
}



let addToCartButton = document.querySelectorAll(".add-to-cart-button");

document
  .querySelectorAll(".add-to-cart-button")
  .forEach(function (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      
      // INCREMENT CART VALUE
      var value = parseInt(document.getElementById('cartCount').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('cartCount').value = value;
      document.getElementById('cartCount').innerHTML = "";
      document.getElementById('cartCount').innerHTML = ` <i class="fas fa-shopping-cart"></i> ${value}`;

      addToCartButton.classList.add("added");
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





