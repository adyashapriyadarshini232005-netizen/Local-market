from flask import Flask, render_template

app = Flask(__name__)

# Sample hotel data
hotels = {

    1: {"name": "Sai Dawat", "menu": [
        {"name": "RICE", "price": 180},
        {"name": "Paneer", "price": 150}
    ]},
    2: {"name": "Foodie's Hub", "menu": [
        {"name": "Veg Thali", "price": 120},
        {"name": "Mutton Curry", "price": 220}
    ]},
    3: {"name": "Spice Garden", "menu": [
        {"name": "Masala Dosa", "price": 80},
        {"name": "Idli Sambhar", "price": 60}
    ]},
    4: {"name": "Khuntia Fastfood", "menu": [
        {"name": "Masala Dosa", "price": 80},
        {"name": "Idli Sambhar", "price": 60}
    ]}
}

@app.route("/")
def index():
    return render_template("index.html", hotels=hotels)

@app.route("/hotel/<int:hotel_id>")
def menu(hotel_id):
    hotel = hotels.get(hotel_id)
    if not hotel:
        return "Hotel not found", 404
    return render_template("menu.html", hotel=hotel)

if __name__ == "__main__":
    app.run(debug=True)
