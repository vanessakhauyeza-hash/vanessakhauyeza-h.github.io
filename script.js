// This script shows a welcome message when the page loads
window.onload = function() {
    alert("Welcome to my portfolio website!");
};
function suggestMeal() {
    let meals = [
        "Grilled chicken with vegetables",
        "Rice + beans (full protein!)",
        "Fruit salad with yoghurt",
        "Sweet potato + spinach",
        "Oatmeal with bananas",
        "Fish with avocado and greens",
        "Nsima with veggies and beans"
    ];

    let pick = meals[Math.floor(Math.random() * meals.length)];
    document.getElementById("mealSuggestion").innerText = "Try this meal: " + pick;
}
