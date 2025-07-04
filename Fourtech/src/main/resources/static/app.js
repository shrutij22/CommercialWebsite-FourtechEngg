const menu=document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar__menu')

menu.addEventListener('click',function()
{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});
// Open Lightbox
function openLightbox(imageSrc) {
    console.log("Opening Lightbox:", imageSrc);
    let lightbox    = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    if (lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = imageSrc;
    } else {
        console.error("Lightbox elements not found!");
    }
}

// Close Lightbox
function closeLightbox() {
    console.log("Closing Lightbox");
    let lightbox = document.getElementById("lightbox");

    if (lightbox) {
        lightbox.style.display = "none";
    } else {
        console.error("Lightbox element not found!");
    }
}

// Close Lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});

function openForm() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add("no-scroll"); // Prevent scrolling
}
  
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("no-scroll"); // Restore scrolling
}
  
// Close form when clicking outside the popup
window.onclick = function(event) {
    let form = document.getElementById("popupForm");
    let overlay = document.getElementById("overlay");
    if (event.target === overlay) {
        closeForm();
    }
};

// Function to handle form submission
function submitForm() {
    const formData = {
      name: document.getElementById("name").value,
      enquiry: document.getElementById("enquiry").value,
      contact: document.getElementById("contact").value
    };

    fetch("http://localhost:8080/submit-enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.text())
    .then(data => {
      alert(data);
      closeForm(); // You can define this to hide popup
    })
    .catch(error => {
      alert("Something went wrong. Try again!");
      console.error(error);
    });
  }

  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    // Optional: clear form
    document.getElementById("name").value = "";
    document.getElementById("enquiry").value = "";
    document.getElementById("contact").value = "";
  }
