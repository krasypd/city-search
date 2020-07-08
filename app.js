const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint).then((brbr) => brbr.json()).then((data) => cities.push(...data));

// functions

function findCities(cityToMatch, cities) {
	return cities.filter((place) => {
		const regex = new RegExp(cityToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function displayMatches() {
	const matchArray = findCities(this.value, cities);

	const html = matchArray
		.map((place) => {
			return `
        <li>
            <span class='name'>${place.city}, ${place.state} </span>
            <span class='population'>${place.population}</span>
        </li>`;
		})
		.join(' ');
	suggestInput.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestInput = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);
