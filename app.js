let guests = [];
const guestList = document.querySelector('#guest-list');

async function fetchGuests(){
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
  const json = await response.json();
  guests = json.data;
  renderGuests();
}

function renderGuests(){
  const html = guests.map((guest) => {
    return `
    <div>
      <h2>${guest.name}</h2>
      <p>${guest.description} <br>
      ${guest.location}</p>
      
    </div>`;
  }).join('');
  guestList.innerHTML = html;
}

fetchGuests();