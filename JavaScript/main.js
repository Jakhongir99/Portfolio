$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

let btn = document.querySelector("#btn");
btn.addEventListener("mouseover", function () {
  let job = document.querySelector("#job");
  let time = new Date().toLocaleString();
  let Xj = document.querySelector("#Xj");
  job.innerHTML = "Today is " + time;
  job.style.color = "yellow";
  job.style.filter = "drop-shadow(8px 8px 10px gray)";
  Xj.innerHTML = "welcome to my site";
  Xj.style.color = "yellow";
  Xj.style.filter = "drop-shadow(8px 8px 10px gray)";
});

btn.addEventListener("mouseleave", function () {
  let job = document.querySelector("#job");
  let Xj = document.querySelector("#Xj");
  job.innerHTML = "Full-stack Web Developer";
  job.style.color = "#dc3545";
  Xj.innerHTML = "Jakhongir Khaytboev";
  Xj.style.color = "#dc3545";
  Xj.style.filter = "none";
  job.style.filter = "none";
});

const submitBtn = document.querySelector("#ForSubmit");
submitBtn.addEventListener("click", function (event) {
  const forInput = document.querySelector("#forInput");
  const forEmail = document.querySelector("#forEmail");
  const forNumber = document.querySelector("#forNumber");
  const message = document.querySelector("#message");
  if (forInput.value == "" || message.value == "") {
    Swal.fire({
      icon: "warning",
      title: "Fields Empty!!",
      text: "Please check the missing fields !!",
      button: "Ok",
    });
  } else {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success w-50",
        cancelButton: "btn btn-danger mr-3",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure sent this message?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, sent it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            "You message Sent!",
            "Your file has been sent.",
            "success"
          );
          result.value.reset();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }
  forInput.value = "";
  forEmail.value = "";
  forNumber.value = "";
  message.value = "";
  event.preventDefault();
});

const portfolioOne = document.querySelector("#portfolioOne");
portfolioOne.addEventListener("click", function () {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: "btn btn-outline-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons.fire({
    titleText: "VECTOR MOVING",
    position: "center",
    html: `This project was built from scratch and fully customized with the client's request. <br/> <br/> <i class="fas fa-calendar-week"></i>- May - September 2020 <br/> <i class="fas fa-code"></i>-HTML/CSS, JavaScript/Jquery, Bootstrap <br/> <i class="fas fa-globe-americas"></i>-Vector Moving`,
    showCloseButton: true,
    showCancelButton: true,
    cancelButtonColor: "#d33",
    cancelButtonText: `<i class="fas fa-times"></i> close project!`,
    showConfirmButton: false,
    imageUrl: "../images/01-small.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    backdrop: "rgba(144, 144, 224, 0.7)",
  });
});
const portfolioTwo = document.querySelector("#portfolioTwo");
portfolioTwo.addEventListener("click", function () {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: "btn btn-outline-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons.fire({
    titleText: "Wesbos",
    position: "center",
    html: `This project was built from scratch and fully customized with the client's request. <br/> <br/> <i class="fas fa-calendar-week"></i>- May - September 2020 <br/> <i class="fas fa-code"></i>-HTML/CSS, JavaScript/Jquery, Bootstrap <br/> <i class="fas fa-globe-americas"></i>-Vector Moving`,
    showCloseButton: true,
    showCancelButton: true,
    cancelButtonColor: "#d33",
    cancelButtonText: `<i class="fas fa-times"></i> close project!`,
    showConfirmButton: false,
    imageUrl: "../images/03-small.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    backdrop: "rgba(144, 144, 224, 0.7)",
  });
});
const portfolioThree = document.querySelector("#portfolioThree");
portfolioThree.addEventListener("click", function () {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: "btn btn-outline-danger",
      titleColor: "text-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons.fire({
    titleText: "R Store",
    position: "center",
    html: `This project was built from scratch and fully customized with the client's request. <br/> <br/> <i class="fas fa-calendar-week"></i>- May - September 2020 <br/> <i class="fas fa-code"></i>-HTML/CSS, JavaScript/Jquery, Bootstrap <br/> <i class="fas fa-globe-americas"></i>-Vector Moving`,
    showCloseButton: true,
    showCancelButton: true,
    cancelButtonColor: "#d33",
    cancelButtonText: `<i class="fas fa-times"></i> close project!`,
    showConfirmButton: false,
    imageUrl: "../images/04-small.jpg",
    imageWidth: 400,
    imageHeight: 200,
    backdrop: "rgba(144, 144, 224, 0.7)",
  });
});
