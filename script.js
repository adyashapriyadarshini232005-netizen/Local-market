// Sample Data
const hotels = [
    { id: 1, name: "Hotel A", menu: [{name: "Burger", price: 120}, {name: "Pizza", price: 250}] },
    { id: 2, name: "Hotel B", menu: [{name: "Sandwich", price: 80}, {name: "Pasta", price: 200}] },
    { id: 3, name: "Hotel C", menu: [{name: "Sushi", price: 300}, {name: "Ramen", price: 250}] }
];

// Elements
const hotelList = document.getElementById('hotel-list');
const menuList = document.getElementById('menu-list');
const hotelName = document.getElementById('hotel-name');
const menuItems = document.getElementById('menu-items');
const backBtn = document.getElementById('back-btn');

// Display Hotels
function displayHotels() {
    hotelList.innerHTML = '';
    hotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'hotel-card';
        card.textContent = hotel.name;
        card.onclick = () => showMenu(hotel);
        hotelList.appendChild(card);
    });
}

// Show Menu
function showMenu(hotel) {
    hotelList.style.display = 'none';
    menuList.style.display = 'block';
    hotelName.textContent = hotel.name;
    menuItems.innerHTML = '';
    hotel.menu.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `<strong>${item.name}</strong> <p>₹${item.price}</p>`;
        menuItems.appendChild(card);
    });
}

// Back to Hotels
backBtn.addEventListener('click', () => {
    menuList.style.display = 'none';
    hotelList.style.display = 'block';
});

// Initialize
displayHotels();
