// Sample Hotel Data
const hotels = [
    { name: "Khuntia Fast food Center", details: "Famous for burgers and sandwiches" },
    { name: "Sai Dawat", details: "Best pasta and Italian food" },
    { name: "Omm Fast Food", details: "Specializes in sushi and ramen" }
];

// Elements
const hotelList = document.getElementById('hotel-list');

// Display Hotels
function displayHotels() {
    hotelList.innerHTML = '';
    hotels.forEach((hotel, index) => {
        const card = document.createElement('div');
        card.className = 'hotel-card';
        card.innerHTML = `
            <p><strong>Hotel #${index + 1}</strong></p>
            <p>Name: ${hotel.name}</p>
            <p>Details: ${hotel.details}</p>
        `;
        hotelList.appendChild(card);
    });
}

// Initialize
displayHotels();
