// SBA 308A: JavaScript Web Application
// api.js

const BASE_URL = "https://api.thedogapi.com/v1";

const API_KEY = "YOUR_API_KEY_HERE";

// Get all dog breeds
export async function getBreeds() {
    const res = await fetch(`${BASE_URL}/breeds`);

    if (!res.ok) {
        throw new Error("Failed to load dog breeds.");
    }

    return await res.json();
}

// Search images by breed
export async function searchDogsByBreed(breedId) {
    const res = await fetch(
        `${BASE_URL}/images/search?breed_ids=${breedId}&limit=6`
    );

    if (!res.ok) {
        throw new Error("Failed to load dog images.");
    }

    return await res.json();
}

// Favorite a dog
export async function favoriteDog(imageId) {
    const res = await fetch(`${BASE_URL}/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
        },
        body: JSON.stringify({
            image_id: imageId,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to add favorite.");
    }

    return await res.json();
}