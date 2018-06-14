
function HideOrShow (PortfolioOpacityValue, ButtonOpacityValue, PortDisplay) {


	var PortfolioValue, ButtonValue;

	console.log("HideOrShow " + PortfolioOpacityValue + ButtonOpacityValue);

	var Portfolio = document.getElementById('mainPortfolio');
	var backButton = document.getElementById('backButton');
	// var portfolioCont = document.getElementById('portfolioCont');

	Portfolio.style.opacity = PortfolioOpacityValue;
	backButton.style.opacity = ButtonOpacityValue;

	Portfolio.style.display = PortDisplay;

	console.log(portfolioCont);
}

//
function changePortTitle (titleText) {
	document.getElementById('portfolioTitle').innerHTML = titleText;
	// document.getElementById('portfolioTitle').style.padding = "2em 0px 0px 0px";
}
function showOrHideWork (displayValue) {
	var displayValue;
	document.getElementById('worksPage').style.display = displayValue;
}

//
function editWorksPage ( titleDescr, projectTechnics, projectApps, projectLayout, imgNum, imgNum_2, projectDescriptionBottomContent ) {
	// title
	document.getElementById('projectDescriptionTop').innerHTML = titleDescr;
	//  ul technincs
	document.getElementById('projectTechnics').innerHTML = projectTechnics;
	document.getElementById('projectApps').innerHTML = projectApps;
	document.getElementById('projectLayout').innerHTML = projectLayout;
	document.getElementById('projectDescriptionBottomContent').innerHTML = projectDescriptionBottomContent;
	document.getElementById("workImg_1").src = "./img/" + imgNum + ".jpg";
	document.getElementById("workImg_2").src = "./img/" + imgNum_2 + ".jpg";

}

	// Back Button
	backButton.onclick = function clickBack(event) {
		event.preventDefault();
		// show
		HideOrShow(1, 0, "flex");
		changePortTitle("Portfolio");
		showOrHideWork("none");

	}

	// #########
	// ##Works##
	// #########

	// Work 1
	// Yes I know this is veru stupid method
	work_1.onclick = function showWork(event) { //event важная вещь для Firefox

	event.preventDefault();

	var titleDescr, projectTechnics, projectApps, projectLayout, imgNum, imgNum_2, projectDescriptionBottomContent;
	titleDescr = "Сайт для семейной пары фотографов";
	imgNum = "8";
	imgNum_2 = "9";
	projectTechnics = "jQuery, Jacascript";
	projectApps = "Adobe Illustrator, Adobe Photoshop";
	projectLayout = "Sass, CSS";
	projectDescriptionBottomContent = "123";

	HideOrShow(0, 1, "none"); // hide

	changePortTitle("V&K Dondenko");
	editWorksPage ( titleDescr, projectTechnics, projectApps, projectLayout, imgNum, imgNum_2, projectDescriptionBottomContent );
	showOrHideWork("block");
}
	// Work 2

	work_2.onclick = function showWork(event) { //event важная вещь для Firefox

	event.preventDefault();

	var titleDescr, projectTechnics, projectApps, projectLayout, imgNum, imgNum_2, projectDescriptionBottomContent;
	titleDescr = "Разработка сайта для Израильской туристической фирмы";
	imgNum = "10";
	imgNum_2 = "11";
	projectTechnics = "WordPress, jQuery, Jacascript";
	projectApps = "Adobe Illustrator, Adobe Photoshop, Atom";
	projectLayout = "Sass, CSS";
	projectDescriptionBottomContent = "Для реализации первого этапа был выбран Reacr.JS, Yeoman и SASS фреймворк. Использование Gulp и дополнительных плагинов значительно сократило время на разработку и позволило получить статичные страницы на выходе, готовые к быстрому дальнейшему внедрению.В качестве второго этапа разработанную верстку нужно было добавить на CMS-платформу. Учитывая оптимальную разработку на первом шаге, процесс не занял много времени. В качестве результата заказчик быстро получил конечный продукт и смог использовать его в своём бизнесе.";

	HideOrShow(0, 1, "none"); // hide

	changePortTitle("Atlantistravel");
	editWorksPage ( titleDescr, projectTechnics, projectApps, projectLayout, imgNum, imgNum_2, projectDescriptionBottomContent );
	showOrHideWork("block");
	}

	// Work 3
	// Yes I know this is veru stupid method
	work_3.onclick = function showWork(event) { //event важная вещь для Firefox

	event.preventDefault();

	var titleDescr, projectTechnics, projectApps, projectLayout, imgNum, imgNum_2, projectDescriptionBottomContent;
	titleDescr = "Разработка Landing Page для молодого московского бренда по продаже ";
	imgNum = "12";
	imgNum_2 = "13";
	projectTechnics = "jQuery, Jacascript";
	projectApps = "Adobe Illustrator, Adobe Photoshop";
	projectLayout = "Sass, CSS";
	projectDescriptionBottomContent = "123";

	HideOrShow(0, 1, "none"); // hide

	changePortTitle("ChurchillShop");
	editWorksPage ( titleDescr, projectTechnics, projectApps, projectLayout, imgNum, imgNum_2, projectDescriptionBottomContent );
	showOrHideWork("block");
}

// Contact Form
sendButton.onclick = function sendForm(event) { //event важная вещь для Firefox

	event.preventDefault();

	var userName = document.getElementById('inputName');
	var userNumber = document.getElementById('inputPhone');
	var userMail = document.getElementById('inputEmail');
	var userText = document.getElementById('inputText');

	var alertMessage = document.getElementById('alertMessage');

  var contactForm = document.getElementById('sectionForm');

	var userName_Class = userName.classList;
	var userNumber_Class = userNumber.classList;
	var userMail_Class = userMail.classList;
	var userText_Class = userText.classList;

	var alertMessage_Class = alertMessage.classList;

  // User Name

	if (userName.value == "") {
		userName_Class.add("pink", "lighten-2");

	}
	else {
		userName_Class.remove("pink", "lighten-2");

	}

  // User Number

	if (userNumber.value == "") {
		userNumber_Class.add("pink", "lighten-2");

	}
	else {
		userNumber_Class.remove("pink", "lighten-2");

	}

  // User Email

	if (userMail.value == "") {
		userMail_Class.add("pink", "lighten-2");

	}
	else {
		userMail_Class.remove("pink", "lighten-2");

	}


	// Text Message

	if (userText.value == "") {
		userText_Class.add("pink", "lighten-2");
		console.log('Text mesage here');

	}
	else {
		userText_Class.remove("pink", "lighten-2");

	}


	console.log(userName.classList);
	console.log(userMail.classList);
	console.log(userText.classList);


	if (userName.value != "" && userNumber.value != "" && userMail.value != "" && userText.value != "") {
		// form.style.display = "none";
		// classNamesForm.remove("form");
		console.log('Form sent');
    alertMessage.style.opacity = "0";
    sendButton.style.margin = "20px auto auto auto";
		// alert("Форма отправки пока что не подключена");

    $(function() {
    $.ajax({
    type: "POST",
    url: "./js/mail.php",
    data: $("form").serialize()
  }).done(function() {
    $("#form").find("input").val("");
    $("#form").trigger("reset");
    contactForm.style.display = "none";
    alert("Message sent!");
  });
  return false;
});

	}
  else {
    console.log('else');
		alertMessage.style.opacity = "1";
    sendButton.style.margin = "20px auto 15px auto";

	}

}
