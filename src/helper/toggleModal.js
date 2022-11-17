export function open() {
  let dialogModal = document.getElementById("dialogModal");
  dialogModal?.classList.add("open");
}

export function close() {
  let dialogModal = document.getElementById("dialogModal");
  dialogModal?.classList.remove("open");
}
