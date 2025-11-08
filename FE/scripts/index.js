
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


// getting data from db with axios
const base_url="http://localhost/assignment/tech/1-Solitaire%20Landing%20+%20Leaderboard/BE/APIs/";
get_data();
async function get_data() {
    try {
    const url= base_url+"get-data-from-leaderboard.php";
    const response= await axios.get(url);  // await cannt work without a async
    const data=response.data
    console.log(data);
    // console.log(response);

var leaderboard_table=document.querySelector(".leader-board-table");
console.log(leaderboard_table)

for (var i=0 ; i<data.length; i++){
    var player=data[i];
    leaderboard_table.innerHTML+=`
                <tr>
                    <td>${player.name}</td>
                    <td>${player.score}</td>
                    <td>${player.duration}</td>
                </tr>`
                
}
    
} catch  {
    console.log("Error!");
}
}


