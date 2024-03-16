const devasOni = [
	{
		id: 1,
		name: "Suika Ibuki",
		quote: `"I've been watching all of you this while time. You all responded to my 'foregathering ability' without noticing, and came to these feasts. Do you know what this means? It means that none of you can defeat me."`,

		description: `<span class="bold-text">Suika Ibuki</span> is the main antagonist of Immaterial and Missing Power. She&apos;s a typical oni that loves drinking and fighting. Just as the folktales say, she has two horns on her head that symbolize her oni heritage, and enough physical strength to throw large boulders single&dash;handedly.`,
		mainImage: "images/main-images/suika-lost-word.png",
	},
	{
		id: 2,
		name: "Yuugi Hoshiguma",
		quote: `"Ahahahaha! Would would we want to do that now? This place may have been Hell once, but now it's our paradise. We're even thankful for the sages above ground. They won't let anyone bother us here. But more importantly, you! You're strong for a human, and it looks like you know Suika, too. I haven't been this excited in a long time!"`,

		description: `<span class="bold-text">Yuugi Hoshiguma</span> is an oni currently living in the Ancient City, which is in the Underworld. She has an unexplainable ability. She was once one of the Big Four of the Mountain, along with Suika Ibuki, and she lives alongside many other oni that were forced below ground.`,
		mainImage: "images/main-images/yuugi-lost-word.png",
	},
	{
		id: 3,
		name: "Kasen Ibaraki",
		quote: `"Do you think that classical, behind-the-times youkai like yourselves can stand up to this era's humans and their collective knowledge?" "Humans truly have become foolish. Have you forgotten the enigmatic terror of the youkai? Have you forgotten the mind-numbing darkness of the night?"`,

		description: `<span class="bold-text">Kasen Ibaraki</span>, who also goes by the pseudonym Ibarakasen or just Kasen, is the main protagonist of Wild and Horned Hermit. She is a mysterious self-proclaimed hermit living in the mountains. Possessing an artificial arm and various special abilities, she can often be seen dispensing knowledge to Reimu Hakurei, Marisa Kirisame, Sanae Kochiya and others. Kasen is also a Sage of Gensokyo and, as of Wild and Horned Hermit Chapter 49 Part 2, is confirmed to be an oni and one of the Big Four of the Mountain.`,
		mainImage: "images/main-images/kasen-lost-word.png",
	},
	{
		id: 4,
		name: "Konngara",
		quote: "No quote",
		description: `<span class="bold-text">Konngara</span> is a being that Reimu Hakurei encounters at Hell's Silent Shrine in Highly Responsive to Prayers. Konngara is the final enemy Reimu confronts before returning to her shrine in the Hell route of the game. Due to Konngara's lack of dialogue, little is known about the enemy. Like most other characters from Highly Responsive to Prayers, Konngara's gender is unknown.`,
		mainImage: "images/main-images/konngara-full.png",
	},
];


const main = document.querySelector("main");
const h2 = document.querySelector('h2');
const quotParagraph = document.querySelector('.quot-paragraph');
const descriptionParagraph = document.querySelector('.description');
const mainImage = document.querySelector('.main-image');


// Select all the characters buttons
const buttons = document.querySelectorAll(".oni-button");

// Select the random button
const randomButton = document.querySelector('.random-button');


// Random Oni Generator
function generateRandomOni () {
	let	randomOni = Math.floor(Math.random() * devasOni.length)
	return randomOni;
}


// Get random Oni event Listener
randomButton.addEventListener('click', function () {
	let randomOni = generateRandomOni();
	
	console.log(randomOni);
	
	h2.innerHTML = devasOni[randomOni].name;
	quotParagraph.innerHTML = devasOni[randomOni].quote;
	descriptionParagraph.innerHTML = devasOni[randomOni].description;
	mainImage.src = devasOni[randomOni].mainImage;
	mainImage.alt = devasOni[randomOni].name;
})


// Choose the Oni 
buttons.forEach((button) => {
	
	button.addEventListener('click', function () {
		
		const currentOni = button.dataset.oni;

		h2.innerHTML = devasOni[currentOni].name;
		quotParagraph.innerHTML = devasOni[currentOni].quote;
		descriptionParagraph.innerHTML = devasOni[currentOni].description;
		mainImage.src = devasOni[currentOni].mainImage;
		mainImage.alt = devasOni[currentOni].name;
						
	}) 
	
});

