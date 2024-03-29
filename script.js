// Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px`;
};
// End of Mouse Circle


// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;

const animateCircles = (e,x,y) => {
    if(x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `100px`;
        });
        mainImg.style.left = `100px`;
    } else if(x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-100px`;
        });
        mainImg.style.left = `-100px`;  
    }


    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `100px`;
        });
        mainImg.style.top = `100px`;
    } else if(y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-100px`;
        });
        mainImg.style.top = `-100px`;  
    }

    mX = e.clientX;
    mY = e.clientY;
};


document.body.addEventListener("mousemove", (e) => {
let x = e.clientX;
let y = e.clientY;

    mouseCircleFn(x,y);
    animateCircles(e,x,y);
});



const animatecircles = (e,x,y) => {
    if(x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `100px`;
        });
        mainImg.style.left = `100px`;
    } else if(x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-100px`;
        });
        mainImg.style.left = `-100px`;  
    }


    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `100px`;
        });
        mainImg.style.top = `100px`;
    } else if(y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-100px`;
        });
        mainImg.style.top = `-100px`;  
    }

    mX = e.clientX;
    My = e.clientY;
};
// End of Animated Circles


// Main Buttom
const mainBtns = document.querySelectorAll(".main-btn");

mainBtns.forEach(btn => {
    let ripple;

 btn.addEventListener("mouseenter",(e) => {
  const left = e.clientX - e.target.getBoundingClientRect().
  left;

  const right = e.clientY - e.target.getBoundingClientRect().
  top;

  ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = `${left}px`;
  ripple.style.top = `${top}px`;
  btn.prepend(ripple);
  });

  btn.addEventListener("mouseleave", () => {
  btn.removeChild(ripple);
  });

  })

// End of Main Butoon 

// Navigation 
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
    menuIcon.classList.add("show-menu-icon");
    navbar.classList.add("hide-navbar");

    if(window.scrollY === 0) {
        menuIcon.classList.remove("show-menu-icon");
        navbar.classList.remove("hide-navbar");
    }
});

menuIcon.addEventListener("click", () => {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
});


// End of Navigation 


// Projects
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");
const projectHideBtn = document.querySelector(".project-hide-btn");

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20 }px`;

    });

    project.addEventListener('mouseleave', () => {
        project.firstElementChild.style.top = "2rem";
    });

 

   // Big Project Image
   project.addEventListener("click",() => {
    const bigImgWrapper = document.createElement("div");
    bigImgWrapper.className = "project-img-wrapper";
    container.appendChild(bigImgWrapper);

    const bigImg = document.createElement("img");
    bigImg.className = "project-img";
    const imgPath = project.firstElementChild.getAttribute
    ("src").split(".")[0];
    bigImg.setAttribute("src", `${imgPath}.JPEG`);
    bigImgWrapper.appendChild(bigImg);
    document.body.style.overflowY = "hidden";

    projectHideBtn.classList.add("change");

    projectHideBtn.onclick = () => {
        projectHideBtn.classList.remove("change");
        bigImgWrapper.remove()
        document.body.style.overflowY = "scroll";
    };
});
// End of Big Project Image

});
// End of Prtojects 

// Section 5
// Form Validation
const form = document.querySelector(".contact-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const messages = document.querySelectorAll(".message");

const error = (input, message) => {
input.nextElementSibling.classList.add("error");
input.nextElementSibling.textContent = message;
};

const success = (input) => {
    input.nextElementSibling.classList.remove("error");
}

const checkRequiredFields = (inputArr) => {
inputArr.forEach((input) => {
  if(input.value.trim() === "") {
        error(input, `${input.id} is required`);
  
    }
    });
};


const checkLength = (input, min) => {
    if(input.value.trim().length < min) {
        error(input, `${input.id} must be at least ${min} characters`);
    } else {
        success(input);

    }
};

const checkEmail = (input) => {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if(regEx.test(input.value.trim())) {
    success(input);
    } else {
        error(input, "Email is not valid");
}
};

form.addEventListener("submit", e => {

    checkLength(username, 2)
    checkLength(subject, 2)
    checkLength(message, 10)
    checkEmail(email);
     checkRequiredFields([username, email, subject, message]);


const notValid = Array.from(messages).find((message) => {
return message.classList.contains("error")
});

notValid && e.preventDefault()
});
// End of Form Validation 


// End of Section 5

