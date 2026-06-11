//ui.js

//render breed dropdown
export function renderBreeds(breeds, selectEl) {
selectEl.innerHTML = breeds
.map(breed => `<option value="${breed.id}">${breed.name}</option`)
.join("");
}

//render dog images
export function renderDogs(dogs, container) {
    container.innerHTML = dogs
    .map(
        dog =>`
        <div class="dog=card">
        <img src="${dog.url}"width="200"/>
        <button data-id="${dog.id}">Favorite</button>
        </div>
        `
    )
        .join("");
}