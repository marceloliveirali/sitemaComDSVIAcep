function State() {
    this.listSection = null;
}

const state = new State();

export function init() {
    state.listSection = window.document.querySelector("#list-section");
}

export function addCard(address) {
    const card = createCard(address);
    state.listSection.appendChild(card);
}

function createCard(address) {
    const div = window.document.createElement("div");
    div.classList.add("card-list-item");

    const h3 = window.document.createElement("h3");
    h3.innerHTML = address.city;

    const line = window.document.createElement("p");
    line.classList.add("address-line");
    line.innerHTML = `${address.street}, ${address.number}`;

    const cep = window.document.createElement("p");
    cep.classList.add('address-cep');
    cep.innerHTML = address.cep;

    div.appendChild(h3);
    div.appendChild(line);
    div.appendChild(cep);

    return div;
}