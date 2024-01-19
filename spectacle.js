const btnAdd = document.getElementById("add")
btnAdd.addEventListener("click", addTicket)

// Ajout de dates dans le select
const listDates = ["2023-12-18", "2023-12-22", "2023-12-25", "2023-12-25", "2023-12-29"]
const selectDate = document.getElementById("selectDate")
for (const listDate of listDates) {
    var optionElement = document.createElement("option");

    optionElement.textContent = listDate
    optionElement.value = listDate
    selectDate.appendChild(optionElement)
}

// Ajouter un ticket
function addTicket(event) {
    const originalTicket = document.getElementById("ticket")
    const newTicket = originalTicket.cloneNode(true);
    newTicket.classList.add("ticket");
    document.querySelector("form").appendChild(newTicket)
    event.preventDefault()

    // Ajout du bouton de suppression
    const btnRemove = document.createElement("button");
    btnRemove.textContent = "Supprimer";
    btnRemove.addEventListener("click", () => removeTicket(newTicket));
    newTicket.appendChild(btnRemove);
}

// Suppression de ticket
function removeTicket(ticket) {
    ticket.parentNode.removeChild(ticket);
}
