const checkboxes = document.querySelectorAll('.list input[type="checkbox"]');
let counter = document.getElementById("counter");
function alae(){
  let completed = document.querySelectorAll('.list input[type="checkbox"]:checked').length;
  const total = checkboxes.length;
  counter.textContent = completed + " / " + total + " completed tasks";} //kandiro update llmajmo3
for (let box of checkboxes){
  box.onchange = alae;} //kat5dem fax katnbdlo l7ala dyal chek box men check ll unchek wela l3aks
  //  wm3a tbdel kan3ayeto llfunction alae wkantb9oha