const btnAdd = document.getElementById("add")
btnAdd.addEventListener("click", addTicket)

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
