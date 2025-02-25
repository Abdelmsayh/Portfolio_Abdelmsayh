// add class active to header on scroll

let header = document.querySelector("header");
window.onscroll = function(){
    if(this.scrollY > 50 ){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
}

// bouttons of the menu

let nav_links = document.getElementById("links");

function Open_colose_Menu(){
    nav_links.classList.toggle("active");
}


// footer 

window.addEventListener("scroll", function () {
    let footer = document.getElementById("footer");
    let scrollHeight = document.documentElement.scrollHeight; // الطول الكلي للصفحة
    let scrollTop = window.scrollY || document.documentElement.scrollTop; // مقدار التمرير
    let clientHeight = document.documentElement.clientHeight; // ارتفاع نافذة العرض

    if (scrollTop + clientHeight >= scrollHeight - 10) { 
        // إظهار الفوتر عند الوصول لنهاية الصفحة
        footer.style.opacity = "1";
        footer.style.transform = "translateY(0)";
    } else {
        // إخفاء الفوتر عند الرجوع للأعلى
        footer.style.opacity = "0";
        footer.style.transform = "translateY(100%)";
    }
});


// document.getElementById("contactBtn").addEventListener("click", function() {
//     document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
// });


document.querySelectorAll("nav .links a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute("href").substring(1); 
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});




