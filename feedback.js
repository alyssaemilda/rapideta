let translations = {};

fetch("feedback.json")
.then(response => response.json())
.then(data => {

    translations = data;

    loadLanguage("en");
});

function loadLanguage(lang){

    document.getElementById("title").innerText =
        translations[lang].title;

    document.getElementById("btn1").innerText =
        translations[lang].btn1;

    document.getElementById("desc1").innerText =
        translations[lang].desc1;

    document.getElementById("btn2").innerText =
        translations[lang].btn2;

    document.getElementById("desc2").innerText =
        translations[lang].desc2;

    document.getElementById("btn3").innerText =
        translations[lang].btn3;

    document.getElementById("desc3").innerText =
        translations[lang].desc3;
        
    document.getElementById("btn4").innerText =
        translations[lang].btn4;
    document.getElementById("desc4").innerText =
        translations[lang].desc4;
}

function switchLanguage(lang, btn){

    loadLanguage(lang);

    document.querySelectorAll(".lang-btn").forEach(b => {

        b.classList.remove("active");
        b.classList.add("inactive");
    });

    btn.classList.remove("inactive");
    btn.classList.add("active");
}

function selectOption(option){

    document.getElementById("responseBox").innerHTML =
        "You selected: " + option;

    fetch("submit.php", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            complaint_type: option
        })
    })

    .then(response => response.json())

    .then(data => {

        console.log(data);

        if(option === "Fare/Top-Up Refund"){
            window.location.href = "refund.html";
        }

        else if(option === "Penalty Charge Refund"){
            window.location.href = "penalty.html";
        }

        else if(option === "Feedback Form"){
            window.location.href = "feedback-form.html";
        }

        else if(option === "KITS Style"){
            window.location.href = "kits.html";
        }
    })

    .catch(error => {
        console.log(error);
    });
}
function submitResponse(){

    const userText =
        document.getElementById("userResponse").value;

    if(userText.trim() === ""){

        alert("Please enter your response");
        return;
    }

    document.getElementById("responseBox").innerHTML =
        "Response Submitted Successfully! <br><br>";


    fetch("submit.php", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            response: userText
        })
    })

    .then(response => response.json())

    .then(data => {
        console.log(data);
    })

    .catch(error => {
        console.log(error);
    });
}