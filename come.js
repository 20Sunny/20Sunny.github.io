let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back :("
})
window.addEventListener("focus", () => {
    document.title = docTitle
})

const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    //cursor effects when mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 10000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

var typed = new Typed(".typingso", {
    strings: ["Web Developer", "Freelancer", "Web Designer", "Python Developer", "Full-Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

var typed = new Typed(".typing", {
    strings: ["Web Developer", "Freelancer", "Web Designer", "Python Developer", "Full-Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

var anchor = document.querySelectorAll("ul li a");
anchor.forEach(function(obj) {
    obj.addEventListener("click", function() {
        var getColor = obj.style.background;
        document.body.style.background = getColor;
    })
});

window.ononline = function() {
    alert("! ! !  YOU BACK TO ONLINE  ! ! !", "YOU ARE CONNECTED TO INTERNET ");
    document.getElementById('amca').hidden = false;
    return false;
}

window.oncontextmenu = function() {
            alert("  ! ! !  NOT ALLOWED  ! ! !  ");
            return false;
        }

window.onoffline = function() {
    alert(" ! ! !  YOU ARE NOT CONNECTED TO THE INTERNET  ! ! ! ");
    document.getElementById('amca').hidden = true;
    return false;
}

function fun1() {
    document.documentElement.style.setProperty("--skin-color", "#00ff00");
}

function fun2() {
    document.documentElement.style.setProperty("--skin-color", "#00ffff");
}

function fun3() {
    document.documentElement.style.setProperty("--skin-color", "#ff0000");
}

function fun4() {
    document.documentElement.style.setProperty("--skin-color", "#1854b4");
}

function fun5() {
    document.documentElement.style.setProperty("--skin-color", "#f021b2");
}

var icon = document.getElementById("lml");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function() {
    showSection(this);
    updateNav(this);
})


const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();

})

function chcolo() {
    collo = document.getElementById('colorch').value;
    document.documentElement.style.setProperty("--skin-color", collo);
}
