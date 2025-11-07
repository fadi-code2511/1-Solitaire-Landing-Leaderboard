
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
adding_score_btn.addEventListener("click",addScorePage);

// getting data to leaderboard
var arr=[{
    playerName:"sam",
    score:"45",
    duration: "8.5"
},
{
    playerName:"jouy",
    score:"66",
    duration: "2.5"
}
];

var leaderboard_table=document.querySelector(".leader-board-table");
console.log(leaderboard_table)

for (var i=0 ; i<arr.length; i++){
    console.log("he")
    var player=arr[i];
    leaderboard_table.innerHTML+=`
                <tr>
                    <td>${player.playerName}</td>
                    <td>${player.score}</td>
                    <td>${player.duration}</td>
                </tr>`
                
}