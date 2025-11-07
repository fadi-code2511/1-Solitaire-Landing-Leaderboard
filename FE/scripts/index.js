
var iosBtn=document.querySelector(".iosBtn");
var andriodBtn=document.querySelector(".andriodBtn");
var adding_score_btn= document.querySelector(".adding-score-btn")

function appStore(){
    window.location.href="https://apps.apple.com/us/app/solitaire/id359917414";
};

function googlePlay(){
    window.location.href="https://play.google.com/store/apps/details?id=com.mobilityware.solitaire&hl=en"
};

function addScorePage(){
    window.location.href="http://127.0.0.1:3000/FE/pages/add-score-page.html?serverWindowId=8b36edb4-f421-4878-9979-69074163be93"
}

iosBtn.addEventListener("click",appStore);
andriodBtn.addEventListener("click",googlePlay);
adding_score_btn.addEventListener("click",addScorePage)