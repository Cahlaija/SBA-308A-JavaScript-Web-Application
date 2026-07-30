import { getBreeds, searchDogsByBreed, favoriteDog } from "./api.js";
import { renderBreeds, renderDogs } from "./ui.js";

const breedSelect = document.querySelector("#breedSelect");
const searchBtn = document.querySelector("#searchBtn");
const resultsDiv = document.querySelector("#results");

// Load breeds when the page loads
async function init() {
    try {
        const breeds = await getBreeds();
        renderBreeds(breeds, breedSelect);
    } catch (error) {
        console.error("Error loading breeds:", error);
        resultsDiv.innerHTML = "<p>Unable to load dog breeds.</p>";
    }
}

init();

// Search button click
searchBtn.addEventListener("click", async () => {
    const breedId = breedSelect.value;

    if (!breedId) {
        alert("Please select a dog breed.");
        return;
    }

    searchBtn.disabled = true;
    searchBtn.textContent = "Loading...";

    try {
        const dogs = await searchDogsByBreed(breedId);
        renderDogs(dogs, resultsDiv);
    } catch (error) {
        console.error("Error searching dogs:", error);
        resultsDiv.innerHTML = "<p>Unable to load dogs.</p>";
    } finally {
        searchBtn.disabled = false;
        searchBtn.textContent = "Search Dogs";
    }
});

// Favorite button click
resultsDiv.addEventListener("click", async (e) => {
    if (e.target.tagName === "BUTTON") {
        const imageId = e.target.dataset.id;

        try {
            await favoriteDog(imageId);
            alert("Dog added to favorites!");
        } catch (error) {
            console.error("Error adding favorite:", error);
            alert("Unable to add favorite.");
        }
    }
});