
var add_score_btn=document.querySelector(".submit-btn");
var input_feild=document.querySelector(".input-score");
var message=document.querySelector(".message");

function add_result(){
    add_name(input_feild.value);

async function add_name(value_name) {
try {
const url= base_url+"send-data-to-db.php";
const response= await axios.post(url,{
  value_name 
});  // await cannt work without a async
console.log(response);

    
} catch(error) {
    console.log("Error!@",error);
}
}
}
add_score_btn.addEventListener("click",add_result);







// set the name to the db
const base_url="http://localhost/assignment/tech/1-Solitaire%20Landing%20+%20Leaderboard/BE/";

