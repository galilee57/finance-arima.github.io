async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        displayFlags(countries);
    } catch (error) {
        console.error('Erreur lors de la récupération du pays:', error);
    }
}

function displayFlags(countries) {
    const container = document.getElementById('flags-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');

        const img = document.createElement('img');
        img.src = country.flags.svg;
        img.alt = `Drapeau de ${country.name.common}`;
        img.classList.add('flag');

        const countryName = document.createElement('p');
        countryName.textContent = country.name.common;

        countryDiv.appendChild(img);
        countryDiv.appendChild(countryName);
        container.appendChild(countryDiv);
    });
}
// Appel de la fonction
fetchCountries();