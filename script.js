const popupModal = document.getElementById("popupModal");
const sendBtn = document.getElementById("sendBtn");
const closeBtn = document.querySelector(".close-btn");

sendBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    popupModal.style.display = "flex"; 
});


closeBtn.addEventListener("click", function() {
    popupModal.style.display = "none";  
});

