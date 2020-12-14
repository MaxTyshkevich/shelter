/* let pets = [
	{
		src: "../../assets/images/cards-img/pets-katrine.png",
		name: "Katrine",
	},
	{
		src: "../../assets/images/cards-img/pets-jennifer.png",
		name: "Jennifer",
	},
	{
		src: "../../assets/images/cards-img/pets-woody.png",
		name: "Woody",
	},
	{
		src: "../../assets/images/cards-img/pets-sophia.png",
		name: "Sophia",
	},
	{
		src: "../../assets/images/cards-img/pets-timmy.png",
		name: "Timmy",
	},
	{
		src: "../../assets/images/cards-img/pets-charly.png",
		name: "Charly",
	},
	{
		src: "../../assets/images/cards-img/pets-scarlet.png",
		name: "Scarlett",
	},
	{
		src: "../../assets/images/cards-img/pets-freddie.png",
		name: "Freddie",
	},
];

window.onload = () => {
	addArrowHandler();
};

const addArrowHandler = () => {
	let next = document.querySelector(".button-arrow--right");
	let last = document.querySelector(".button-arrow--left");

	let buttonArrows = document.querySelectorAll(".button-arrow");
	buttonArrows.forEach((button) =>
		button.addEventListener("click", handlerClick)
	);
};

const handlerClick = (e) => {
	let cards = Array.from(document.querySelectorAll(".card")).filter(
		(elem) => getComputedStyle(elem).display === "flex"
	);
	let cardsCount = cards.length;

	console.log(cards);
};
 */
/* 
if (e.target.closest(".button-arrow--right")) {
   
  }
  else if (e.target.closest(".button-arrow--left")) {
 */
