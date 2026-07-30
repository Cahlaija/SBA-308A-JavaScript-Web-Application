
// Handles all communication with The Dog API

const BASE_URL = "https://api.thedogapi.com/v1";

const API_KEY = "live_JvkNEu0MHG8YAk8V1JOSV7Wg2Jz8klQagvDTS1x2T6WRQxwG3Ek92qNVeDZQYjFw";


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


// Add dog image to favorites
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
        throw new Error("Failed to add dog to favorites.");
    }

    return await response.json();
}