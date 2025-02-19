const meal_plan = {
  "Monday": { "Tiffin": "Idli", "Lunch": "Egg/Panneer Curry", "Snacks": "Onion Bajji", "Dinner": "Guttivankaya Curry" },
  "Tuesday": { "Tiffin": "Puri", "Lunch": "Pakodi Curry, Alu 65 Fry", "Snacks": "Banana Bajji", "Dinner": "Potato Kurma" },
  "Wednesday": { "Tiffin": "Utappam/Upma", "Lunch": "Aalu Mealmakers Curry", "Snacks": "Samosa", "Dinner": "Chicken/Panneer (Banana)" },
  "Thursday": { "Tiffin": "Vada(Gare)/Upma", "Lunch": "Bobbarla Tamato Curry", "Snacks": "Masala Vada", "Dinner": "Potato Fry, Pappu Charu" },
  "Friday": { "Tiffin": "Onion Bajji", "Lunch": "Vankaya Mealmakers Curry", "Snacks": "Onion Pakodi", "Dinner": "Egg/Veg Fried Rice (Aalu Kurma)" },
  "Saturday": { "Tiffin": "Onion Dosa", "Lunch": "Drumstick Tamato Curry", "Snacks": "Samosa", "Dinner": "Sanagalu Curry" },
  "Sunday": { "Tiffin": "Chapati", "Lunch": "Cabbage Sanagapappu Curry", "Snacks": "Dilpasand", "Dinner": "Chicken/Panneer and Butter Milk" }
};

document.addEventListener("DOMContentLoaded", function() {
  const today = new Date().toLocaleString('en-us', { weekday: 'long' });
  const menu = meal_plan[today];
  const menuContainer = document.getElementById("menu-container");

  if (menu && menuContainer) {
      menuContainer.innerHTML = `
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background: url('food-background.jpg') no-repeat center center fixed;
                  background-size: cover;
                  text-align: center;
                  padding: 20px;
              }
              #menu-container {
                  background: rgba(255, 243, 205, 0.9);
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                  display: inline-block;
                  margin-top: 20px;
                  border: 2px solid #ffa500;
              }
              h2 {
                  color: #d2691e;
              }
              p {
                  font-size: 18px;
                  color: #8b4513;
              }
              strong {
                  color: #ff4500;
              }
          </style>
          <h2>Today's Meal Plan (${today})</h2>
          <p><strong>Tiffin:</strong> ${menu.Tiffin}</p>
          <p><strong>Lunch:</strong> ${menu.Lunch}</p>
          <p><strong>Snacks:</strong> ${menu.Snacks}</p>
          <p><strong>Dinner:</strong> ${menu.Dinner}</p>`;
  } else {
      menuContainer.innerHTML = "<h2>No meal plan available for today.</h2>";
  }
});

document.write('<div id="menu-container"></div>');
