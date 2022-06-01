const date = document.querySelector("h3#date");

function getdate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  date.innerText = `${year}년 ${month}월 ${day}일`;
}

getdate();
