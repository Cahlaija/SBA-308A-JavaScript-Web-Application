// api.js

const BASE_URL = "https://api.thedogapi.com/v1";

// Replace this with your own API key from The Dog API
const API_KEY = "YOUR_API_KEY_HERE";

// Get all dog breeds
export async function getBreeds() {
    const response = await fetch(`${BASE_URL}/breeds`, {
        headers: {
            "x-api-key": API_KEY,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to load dog breeds.");
    }

    return await response.json();
}

// Search dog images by breed
export async function searchDogsByBreed(breedId) {
    const response = await fetch(
        `${BASE_URL}/images/search?breed_ids=${breedId}&limit=6`,
        {
            headers: {
                "x-api-key": API_KEY,
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to load dog images.");
    }

    return await response.json();
}

// Add a dog image to favorites
export async function favoriteDog(imageId) {
    const response = await fetch(`${BASE_URL}/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
        },
        body: JSON.stringify({
            image_id: imageId,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to add favorite.");
    }

    return await response.json();
}