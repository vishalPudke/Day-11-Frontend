function addRecord() {
  let inputMessageRef = document.querySelector("messageId");
  let message = inputMessageRef.value;
  let uri = `http://localhost:4000/addRecord?message=${message}`;
  fetch(uri);
}
