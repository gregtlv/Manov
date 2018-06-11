function showWork (event) {
	
	// body... 

	event.preventDefault();

	var mainPortfolio = document.getElementById('mainPortfolio');

	let mainPortfolio_class = mainPortfolio.classList;

	console.log(mainPortfolio_class);

    mainPortfolio_class.style.display = "none";

}