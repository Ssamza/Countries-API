let allCountries = require('../countriesData');
const axios = require('axios');
const { Country, Activity } = require('../db');

const getAPI = async () => {
	// const countries = await axios.get("https://restcountries.com/v3.1/all");---> We can't access the data because the service is currently down,
	// so I have to store the data in an array;

	const countries = allCountries.map((country) => {
		return {
			id: country.cca3,
			flags: country.flags.svg,
			name: country.name.common
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, ''),
			capital: country.capital
				? country.capital[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '')
				: null,
			continent: country.continents
				? country.continents[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '')
				: null,
			subregion: country.subregion
				? country.subregion.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
				: null,
			area: country.area,
			population: country.population,
		};
	});
	return countries;
};
const getAll = async () => {
	const count = await Country.count();
	if (count > 0) {
		const countriesDB = await Country.findAll({
			include: {
				model: Activity,
				attributes: ['name'],
				through: {
					attributes: [],
				},
			},
		});
		return countriesDB;
	} else {
		const countriesAPI = await getAPI();
		const DB = await Country.bulkCreate(countriesAPI);
		return DB;
	}
};

module.exports = getAll;
// module.exports = getAPI;
