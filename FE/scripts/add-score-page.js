
var add_score_btn=document.querySelector(".submit-btn");
var input_feild=document.querySelector(".input-score");
var message=document.querySelector(".message");

function add_result(){
  message.innerText=`Hello ${input_feild.value} you score is 55 and you duration 3.55`
}
add_score_btn.addEventListener("click",add_result)