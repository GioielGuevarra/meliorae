const addBrownie = document.querySelector('.add');
const editBrownie = document.querySelector('.edit');
const addModal = document.querySelector('.add-modal');
const editModal = document.querySelector('.edit-modal');
const addModalBackdrop = document.querySelector('.add-modal-backdrop');
const editModalBackdrop = document.querySelector('.edit-modal-backdrop');

addBrownie.onclick = function() {
    addModal.classList.remove("hidden");
    addModalBackdrop.classList.add("on");
}

addModalBackdrop.onclick = function() {
    addModal.classList.add("hidden");
    addModalBackdrop.classList.remove("on");
}

editBrownie.onclick = function() {
    editModal.classList.toggle("hidden");
    editModalBackdrop.classList.add("on");
}

editModalBackdrop.onclick = function() {
    editModal.classList.add("hidden");
    editModalBackdrop.classList.remove("on");
}