function startUpCompetition(startUpList) {
	let result = [];
	let ecommerse;
	let toursim;
	let healthTech;
	let agrotech;
	if (startUpList === undefined) {
		return `Invalid Data`
	}else if (Array.isArray(startUpList) === false) {
		return `Data Bukan Array`
	}else if(startUpList.length < 4){
		return `Incorrect Startup Data`
	}else{
		let baris = [];
		for (let i = startUpList.length - 1; i >= 0; i--) {
			let arrElementBidang = startUpList[i][1]
			if (arrElementBidang === 'Ecommerse') {
				ecommerse = startUpList[i]
			}else if(arrElementBidang === 'Toursim'){
				toursim = startUpList[i]
			}else if (arrElementBidang === 'Healthtech'){
				healthTech = startUpList[i]
			}else{
				agrotech = startUpList[i]
			}
		}
		baris.push(ecommerse);
		baris.push(toursim);
		baris.push(healthTech);
		baris.push(agrotech);
		result.push(baris)
	}
	return result
}
/*
let invalid = `[
	['Tikipidia', Ecommerce],
	['Shipi', Ecommerce]
]`;
*/

let indonesia = [
		['Tikipidia', 'Ecommerse'],
		['Bikilipik', 'Ecommerse'],
		['Bhiniki', 'Ecommerse'],
		['Triviliki', 'Toursim'],
		['Hilidic', 'Healthtech'],
		['Siyirbix', 'Agrotech'],
		['Tikingsiyir', 'Agrotech'],
		['Bleble', 'Ecommerse'],
		['Tikit', 'Toursim']
	]

/*let malaysia = [
		['Dropee', 'Ecommerse'],
		['Bookdoc', 'Healthtech'],
		['dahmakan', 'Agrotech'],
	]*/

console.log(startUpCompetition(indonesia))
/*[
  [
    [ 'Tikipidia', 'Ecommerse' ],
    [ 'Triviliki', 'Toursim' ],
    [ 'Hilidic', 'Healthtech' ],
    [ 'Siyirbix', 'Agrotech' ]
  ]
]
*/