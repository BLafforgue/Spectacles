// Ajout du premier ticket
window.onload = function () {
    addTicket()
};

// Ajout de dates dans le select
const listDates = ["2023-12-01", "2023-12-02", "2023-12-03", "2023-12-04", "2023-12-05"]
const selectDate = document.getElementById("selectDate")
for (const listDate of listDates) {
    const optionElement = document.createElement("option");
    optionElement.textContent = listDate
    optionElement.value = listDate
    selectDate.appendChild(optionElement)
}

// Ajouter un ticket
function addTicket(event) {
    // Sélection du dernier select du formulaire
    const select = document.querySelectorAll("select");
    const lastSelect = select[select.length - 1];

    // Suppression de la date sélectionnée du tableau
    const index = listDates.indexOf(lastSelect.value);
    if (index !== -1) {
        listDates.splice(index, 1);
        lastSelect.disabled = true;
    }

    // Supprimer les options précédentes du menu déroulant
    selectDate.innerHTML = '';

    // Réajout des options mises à jour dans le menu déroulant
    for (const listDate of listDates) {
        const optionElement = document.createElement("option");
        optionElement.textContent = listDate;
        optionElement.value = listDate;
        selectDate.appendChild(optionElement);
    }

    // Duplication ticket
    const originalTicket = document.getElementById("ticket");
    const newTicket = originalTicket.cloneNode(true);
    newTicket.classList.add("ticket");
    newTicket.style.display = "";
    document.querySelector("form").appendChild(newTicket);

    // Ajout du bouton d'ajout de ticket
    if (listDates.length > 1) {
        const btnAdd = document.createElement("button");
        btnAdd.classList.add("button-4");
        btnAdd.textContent = "Ajouter un ticket";
        btnAdd.addEventListener("click", addTicket);
        newTicket.appendChild(btnAdd);
    }

    event.preventDefault();

    // Ajout du bouton de suppression
    const btnRemove = document.createElement("button");
    btnRemove.classList.add("button-4");
    btnRemove.textContent = "Supprimer";
    btnRemove.addEventListener("click", function () {
        removeTicket(newTicket)
    });
    newTicket.appendChild(btnRemove);
}

// Suppression de ticket
function removeTicket(ticket) {
    // Récupération de la valeur du select
    const select = ticket.querySelector("select");
    const selectedDate = select.value;

    // Ajout de la valeur dans la liste
    listDates.push(selectedDate);
    listDates.sort();
    // Actualisation de la liste
    for (const listDate of listDates) {
        const optionElement = document.createElement("option");
        optionElement.textContent = listDate;
        optionElement.value = listDate;
        selectDate.appendChild(optionElement);
    }

    // Suppression du ticket
    ticket.parentNode.removeChild(ticket);
}

