//SBA 308A: JavaScript Web Application

//api

const BASE_URL = "https://api.thedogapi.com/v1";

const API_KEY = "live_JvkNEu0MHG8YAk8V1JOSV7Wg2Jz8klQagvDTS1x2T6WRQxwG3Ek92qNVeDZQYjFw"

//get dog breeds

export async function getBreeds() {
    const res = await fetch(`${BASE_URL}/breeds`);
    return res.json();
}

//SEARCH images by breed
export async function searchDogsByBreed(breedIn) {
    const res = await fetch(
        `${BASE_URL}/images/search?breed_ids=${breedId}&limit=6`
    );
    return res.json();
}

//FAVORITE dog
export async function favoriteDog(imageId) {
    const res = await fetch(`${BASE_URL}/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key":API_KEY,
        },
        body: JSON.stringify({
            image_id: imageId,
        }),
});

return res.json();
}