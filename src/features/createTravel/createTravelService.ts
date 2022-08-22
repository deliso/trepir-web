import { getLatLng } from 'use-places-autocomplete';

export const BASE_URL = 'https://trepir.herokuapp.com/';

const createTravel = async (
	travelInput: any,
	uid: string,
	tripId: string,
	data: any = null
) => {
	console.log('pre-fetch', travelInput);

	// if (travelInput.departureDate) {
	// 	const { departureDate, travelType } = travelInput;
	// } else {
	let departureDate;
	let travelType;
	if (data) {
		departureDate = data.departureDate;
		travelType = data.travelType;
	} else {
		departureDate = travelInput.departureDate;
		travelType = travelInput.travelType;
	}

	const departurePhotoUrl =
		await travelInput.departureLocation.photos[0].getUrl();
	const arrivalPhotoUrl = await travelInput.arrivalLocation.photos[0].getUrl();
	const departureCoordinates = await getLatLng(travelInput.departureLocation);
	const arrivalCoordinates = await getLatLng(travelInput.arrivalLocation);

	const departureLocation = {
		formattedAddress: travelInput.departureLocation.formatted_address,
		country: travelInput.departureLocation.formatted_address,
		googleId: travelInput.departureLocation.place_id,
		locationName: travelInput.departureLocation.name,
		latitude: departureCoordinates.lat,
		longitude: departureCoordinates.lng,
		photoUrl: departurePhotoUrl,
	};
	const arrivalLocation = {
		formattedAddress: travelInput.arrivalLocation.formatted_address,
		country: travelInput.arrivalLocation.formatted_address,
		googleId: travelInput.arrivalLocation.place_id,
		locationName: travelInput.arrivalLocation.name,
		latitude: arrivalCoordinates.lat,
		longitude: arrivalCoordinates.lng,
		photoUrl: arrivalPhotoUrl,
	};

	const formattedTravel = {
		departure: departureDate,
		travelType,
		origin: departureLocation,
		destination: arrivalLocation,
		uid,
		tripId,
	};

	console.log('formattedTravel', formattedTravel);

	const createdTravel = await fetch(`${BASE_URL}trip/addTravelEvent`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(formattedTravel),
	});
	const jsonCreatedTravel = await createdTravel.json();
	console.log('hello', jsonCreatedTravel);

	return jsonCreatedTravel;
};

export default createTravel;

// Object {

// }