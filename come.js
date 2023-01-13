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
    alert("! ! !  YOU BACK TO ONLINE  ! ! !", "YOU ARE CONNECTED TO INTERNET ", "success");
    document.getElementById('amca').hidden = false;
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

var a = 0;

function mouseOver() {

    const name = document.forms['suForm']['name'].value;
    const email = document.forms['suForm']['email'].value;
    const pass = document.forms['suForm']['pass'].value;
    const tick = document.querySelector('#check');

    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



    if ((name == "" || !email.match(emailCheck) || pass == "" || tick.checked == false) && a == 0) {
        buttonMoveLeft();
        a = 1;
        return false;
    }

    if ((name == "" || !email.match(emailCheck) || pass == "" || tick.checked == false) && a == 1) {
        buttonMoveRight();
        a = 2;
        return false;
    }

    if ((name == "" || !email.match(emailCheck) || pass == "" || tick.checked == false) && a == 2) {
        buttonMoveLeft();
        a = 1;
        return false;
    } else {

        // document.getElementById('submit-btn').click();  
        document.getElementById('submit-btn').style.cursor = 'none';
        return false;
    };

};




function buttonMoveLeft() {

    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(200%)';

};


function buttonMoveRight() {

    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';

};


function resetBtn() {
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';
};