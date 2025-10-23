
async function getPeople() {
	try {
		const response = await fetch("https://randomuser.me/api/?results=25&nat=us");
		if (!response.ok) {
			throw new Error(`HTTP Error: ${response.status}`);
        }
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(`Could not get names: ${error}`);
	}
}

async function buildTable() {
	try {
		const data = await getPeople();
		const people = data.results;

		people.forEach(person => {
			const name = `${person.first = person.name.first, person.last = person.name.last}`;
			const address = `${person.address = person.location.street.number}`;
			const city = `${person.city = person.location.city}`;
			const state = `${person.state = person.location.state}`;
			const zip = `${person.zip = person.location.postcode}`;
			const longitude = `${person.longitude = person.location.coordinates.longitude}`;
			const latitude = `${person.latitude = person.location.coordinates.latitude}`;
			console.log(`Name: ${name}, Address: ${address}, City: ${city}, State: ${state}, Zip: ${zip}, Longitude: ${longitude}, Latitude: ${latitude}`);

		$("#people tbody").append(`
			<tr>
				<td>${name}</td>
				<td>${address}</td>
				<td>${city}</td>
				<td>${state}</td>
				<td>${zip}</td>
				<td>${longitude}</td>
				<td>${latitude}</td>
			</tr>
			`);
			});
	} catch (e) {
		console.log("Error " + e);
	}
}

$(document).ready(function() {
	buildTable();
});
