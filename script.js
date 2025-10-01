const hotels = [
    {
        id: 1,
        name: "Hotel Paradise",
        menu: [
            { name: "Chicken Biryani", price: 180 },
            { name: "Paneer Butter Masala", price: 150 }
        ]
    },
    {
        id: 2,
        name: "Foodie's Hub",
        menu: [
            { name: "Veg Thali", price: 120 },
            { name: "Mutton Curry", price: 220 }
        ]
    },
    {
        id: 3,
        name: "Spice Garden",
        menu: [
            { name: "Masala Dosa", price: 80 },
            { name: "Idli Sambhar", price: 60 }
        ]
    }
];

const hotelListDiv = document.getElementById('hotel-list');
const menuListDiv = document.getElementById('menu-list');
const menuItemsDiv = document.getElementById('menu-items');
const hotelNameH2 = document.getElementById('hotel-name');
const backBtn = document.getElementById('back-btn');

// Show hotel cards
hotels.forEach(hotel => {
    const card = document.createElement('div');
    card.className = 'hotel-card';
    card.innerHTML = `<h2>${hotel.name}</h2><p>Click to view menu</p>`;
    card.addEventListener('click', () => showMenu(hotel.id));
    hotelListDiv.appendChild(card);
});

// Show menu for a hotel
function showMenu(hotelId) {
    const hotel = hotels.find(h => h.id === hotelId);
    if (!hotel) return;
    hotelNameH2.textContent = hotel.name;
    menuItemsDiv.innerHTML = '';
    hotel.menu.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `<span>${item.name}</span><span>₹${item.price}</span>`;
        menuItemsDiv.appendChild(div);
    });
    hotelListDiv.style.display = 'none';
    menuListDiv.style.display = 'block';
}

// Back to hotels
backBtn.addEventListener('click', () => {
    menuListDiv.style.display = 'none';
    hotelListDiv.style.display = 'flex';
});
