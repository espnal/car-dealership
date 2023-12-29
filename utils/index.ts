export async function fetchCars(){
    const headers = {
		'X-RapidAPI-Key': 'fdd83ea56dmsh73491a6da632f28p13acecjsn59fba46694d1',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {headers: headers});

    const result = await response.json();

    return result
}