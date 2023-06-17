function addRecord() {
  let inputMessageRef = document.querySelector("#messageId");
  let message = inputMessageRef.value;
  let uri = `http://localhost:4000/addRecord?message=${message}`;
  fetch(uri);
  inputMessageRef.value = "";
  findAllMessage();
}

async function findAllMessage() {
  let uri = "http://localhost:4000/findAll";
  let res = await fetch(uri);
  let list = await res.json();
  console.log(list);

  for (let item of list) {
    let parentRef = document.querySelector("#parent");
    let existingValue = parentRef.innerHTML;
    let newValue = `<h1>${item.message}</h1>`;
    parentRef.innerHTML = newValue + existingValue;
    console.log(item);
  }
}
