//You can write a function containing either jQuery code or normal JavaScript code or syntax. The "function" can be called in the html document

//show full name on click
var num = 0;
function fullName() {
    var logo = document.getElementById('logo');
    if (num == 0) {
        logo.innerHTML = "ARIBIDARA";
        num++;
    } else if (num == 1) {
        logo.innerHTML = "TESTIMONY";
        num++;
    } else if (num == 2) {
        logo.innerHTML = "MERCY";
        num++;
    } else if (num == 3) {
        logo.innerHTML = "FAVOUR";
        num++;
    } else if (num == 4) {
        logo.innerHTML = "JERRY";
        num++;
    } else if (num == 5) {
        logo.innerHTML = "A.T.M.F. JERRY";
        num = 0;
    }
};

//display JavaScript code
function code(language, scriptMessage = undefined) {
    var htmlMessage = document.getElementById("message");
    htmlMessage.innerHTML = `<h1>A.T.M.F. JERRY</h1></br></br > ${language} </br> ${scriptMessage} <br /> <i>Click to remove message</i>`;
}

//code to be displayed
let language = "<p>Js Code</p><br>";


const obj = {
    firstName: "Jerry",
    lastName: "Aribidara",

    fullName: function() {
        return this.lastName + " " + this.firstName;
    }
};

obj.ambition = function() {
    return this.firstName + ` wants to become
 a musician.`;
}

obj.hobbies = function() {
    return this.firstName + " loves Music, Art, Tech,...";
}

obj.occupation = function() {
    return this.firstName + " is a web developer, teacher, instrumentalist...";
}

hello = (name) => "Yo " + name;

let message = hello("Jerry");

function displayCode() {
    //Using onload event in body tag, use this function
    message = code(language, message);
}
/*
function showMessage() {
    $("#message, #message i").css({
        "opacity": "1", "visibility": "hidden"
    });
}
//write js variable in html document
function display(x) {
    document.write(x);
}
*/
