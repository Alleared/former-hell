
// AMBIENCE SECTION CODE

const ambienceData = [
	{
		artist: "ookashippo",
		address:
			"https://cdn.donmai.us/sample/f7/7e/__mizuhashi_parsee_and_hoshiguma_yuugi_touhou_drawn_by_ookashippo__sample-f77e1a9bd00b4cb86b077b4cc43c5824.jpg",
		source: "https://danbooru.donmai.us/posts/2956028",
		alt: "The Streets of Former Hell",
	},

	{
		artist: "rat huang",
		address:
			"https://cdn.donmai.us/sample/84/ce/__ibuki_suika_mizuhashi_parsee_hoshiguma_yuugi_and_kurodani_yamame_touhou_drawn_by_rat_huang__sample-84cee9c323db91c54293dc31f40fdfb5.jpg",
		source: "https://danbooru.donmai.us/posts/1508305",
		alt: "The Former Capital",
	},
	{
		artist: "starjinxin",
		address:
			"https://cdn.donmai.us/sample/76/1a/__komeiji_koishi_komeiji_satori_kaenbyou_rin_reiuji_utsuho_mystia_lorelei_and_5_more_touhou_and_1_more_drawn_by_starjinxin__sample-761a7d8bcddec07f06d55b3ac0e7895c.jpg",
		source: "https://danbooru.donmai.us/posts/5188710",
		alt: "Mystia visiting Former Hell",
	},
	{
		artist: "nagi",
		address:
			"https://cdn.donmai.us/sample/f4/a0/__shameimaru_aya_inubashiri_momiji_kawashiro_nitori_ibuki_suika_hoshiguma_yuugi_and_4_more_touhou_drawn_by_nagi_xx001122__sample-f4a0f712d9dced65775199ba696e4819.jpg",
		source: "https://danbooru.donmai.us/posts/2634771",
		alt: "Moonlight",
	},
	{
		artist: "neonparrot",
		address: "images/ambience/former-hell4.jpg",
		source: "https://www.deviantart.com/neonparrot/art/Former-hell-846451611",
		alt: "The Streets",
	},
	{
		artist: "taikodon",
		address: "images/ambience/former-hell3.jpg",
		source: "https://danbooru.donmai.us/posts/3024250",
		alt: "The Market",
	},
];


// CHARACTERS PORTRAITS CODE

const characters = [
	{
		name: "Kisume",
		title: "None",
		species: "Tsurube-otoshi",
		abilities: "Unknown",
		occupation: "Killing People",
		location: "Wells of Gensokyo",
		mainTheme: "The Dark Blowhole",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/kisume/kisume1-thumbnail.jpg",
				source:
					"https://cdn.donmai.us/sample/c6/6b/__kisume_touhou_drawn_by_ruu_tksymkw__sample-c66bff7562a981a948cedede07512537.jpg",
				artist: "ruu (tksymkw)",
			}),
			(art = {
				thumbnail: "images/characters/characters/kisume/kisume2-thumbnail.jpg",
				source:
					"https://cdn.donmai.us/sample/76/94/__kisume_touhou_and_1_more_drawn_by_rotte_1109__sample-76948e792b63bf4ad2bdf2e01c98e352.jpg",
				artist: "rotte (1109)",
			}),
			(art = {
				thumbnail: "images/characters/characters/kisume/kisume3-thumbnail.jpg",
				source:
					"https://cdn.donmai.us/sample/25/b6/__kisume_touhou_drawn_by_kaigen_1025__sample-25b6ea2afae45dab4aeec20b246ef219.jpg",
				artist: "kaigen 1025",
			}),
		],
	},

	{
		name: "Yamame Kurodani",
		title: "The Bright Net in the Dark Cave",
		species: "Tsuchigumo",
		abilities: "Manipulation of illness (mainly infectious disease)",
		occupation: "Unknown",
		location: "Underworld",
		mainTheme: "The Sealed-Away Youkai - Lost Place",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/yamame/yamame1-thumbnail.jpg",
				source: "https://cdn.donmai.us/sample/9a/e1/__kurodani_yamame_touhou_drawn_by_ini_inunabe00__sample-9ae16c7136e43e152cd301f1a980ee28.jpg",
				artist: "ini (inunabe00)",
			}),
			(art = {
				thumbnail: "images/characters/characters/yamame/yamame2-thumbnail.jpg",
				source: "https://cdn.donmai.us/sample/00/8e/__kurodani_yamame_touhou_drawn_by_ruu_tksymkw__sample-008eca0d490a9169b2b809ef4074d8d7.jpg",
				artist: "ruu (tksymkw)",
			}),
			(art = {
				thumbnail: "images/characters/characters/yamame/yamame3-thumbnail.png",
				source:
					"https://cdn.donmai.us/sample/9b/9e/__kurodani_yamame_touhou_drawn_by_chibeany__sample-9b9e2719f7bdf2e993e14adf0c0fa240.jpg",
				artist: "chibeany"
			})
		],
	},

	{
		name: "Parsee Mizuhashi",
		title: "The Jealousy Beneath the Earth's Crust",
		species: "Hashihime",
		abilities: "Manipulation of Jealousy",
		occupation: "Bridge Overseer",
		location: "Underworld",
		mainTheme: "Green-Eyed Jealousy",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/parsee/parsee1-thumbnail.png",
				source: "images/characters/characters/parsee/parsee1.png",
				artist: scarristo,
			}),
			(art = {
				thumbnail: "images/characters/characters/parsee/parsee2-thumbnail.jpg",
				source: "https://cdn.donmai.us/sample/80/91/__mizuhashi_parsee_touhou_drawn_by_otaeriaaoba__sample-80910b7cdda6f11a66ecc6bb620a1594.jpg",
				artist: `<a href="https://twitter.com/OtaeriaAoba"
				target="_blank">Otaeria</a>`,
			}),
			(art = {
				thumbnail: "images/characters/characters/parsee/parsee3-thumbnail.png",
				source: "https://cdn.donmai.us/original/6d/f5/__mizuhashi_parsee_touhou_drawn_by_toukotsu__6df52e9960a176e380a2924d062246f9.jpg",
				artist: "toukotsu"
			})
		],
	},

	{
		name: "Yuugi Hoshiguma",
		title: "The So-Called Unexplainable Phenomenon",
		species: "Oni",
		abilities: "Wielding unexplainable phenomenon",
		occupation: `Manager of Former Hell's Hot Spring <a href="four-devas-of-mountain/devas-of-the-mountain.html">Former member of the Four Devas of the Mountain</a>`,
		location: "Former Capital",
		mainTheme: "A Flower-Studded Sake Dish on Mt. Ooe",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/yuugi/yuugi1-thumbnail.png",
				source: "images/characters/characters/yuugi/yuugi1.png",
				artist: scarristo,
			}),
			(art = {
				thumbnail: "images/characters/characters/yuugi/yuugi2-thumbnail.png",
				source: "images/characters/characters/yuugi/yuugi2.png",
				artist: shadowChevy,
			}),
			(art = {
				thumbnail: "images/characters/characters/yuugi/yuugi3-thumbnail.png",
				source:
					"https://cdn.donmai.us/sample/73/a5/__hoshiguma_yuugi_touhou_drawn_by_parasite_oyatsu__sample-73a59ecdbbec7d3bad96571562df39b2.jpg",
				artist: `<a href="https://www.pixiv.net/en/artworks/104814404"
				target="_blank">Parasite Oyatsu</a>`,
			})
		]
	},

	{
		name: "Satori Komeiji",
		title: "The Girl Even the Vengeful Spirits Fear",
		species: "Satori",
		abilities: "Reading minds",
		occupation: "Master of the Palace of the Earth Spirits, Anonymous book writer, Detective",
		location: "Palace of the Earth Spirits",
		mainTheme: "Satori Maiden ~ 3rd Eye",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/satori/satori1-thumbnail.png",
				source: "images/characters/characters/satori/satori1.png",
				artist: scarristo,
			}),
			(art = {
				thumbnail: "images/characters/characters/satori/satori2-thumbnail.jpg", 
				source: "https://cdn.donmai.us/sample/f8/cb/__komeiji_satori_touhou_drawn_by_high_meron__sample-f8cb3428548fcc64867f83853668f17a.jpg",
				artist: "high meron",
			}),
			(art = {
				thumbnail: "images/characters/characters/satori/satori3-thumbnail.jpg",
				source:
					"https://cdn.donmai.us/sample/4d/a0/__komeiji_satori_touhou_drawn_by_creenoy__sample-4da040aec870f8f510d7332134e1527a.jpg",
				artist: "creenoy"
			})
		]
	},

	{
		name: "Rin 'Orin' Kaenbyou",
		title: "Hell's Traffic Accident",
		species: "Kasha",
		abilities: "Carrying away corpses, controlling and communicating with spirits",
		occupation: "Controller of spirits in the remnants of the Hell of Blazing Fires",
		location: "Hell of Blazing Fires, Palace of the Earth Spirits",
		mainTheme: "Corpse Voyage ~ Be of Good Cheer!",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/orin/orin1-thumbnail.png",
				source: "images/characters/characters/orin/orin1.png",
				artist: shadowChevy,
			}),
			(art = {
				thumbnail: "images/characters/characters/orin/orin2-thumbnail.jpg", 
				source: "https://cdn.donmai.us/sample/7e/b9/__kaenbyou_rin_touhou_drawn_by_ponpochi__sample-7eb9e3c074c3baa27d0f3d2e7e56b075.jpg",
				artist: "ponpochi",
			}),
			(art = {
				thumbnail: "images/characters/characters/orin/orin3-thumbnail.jpg",
				source:
					"https://cdn.donmai.us/sample/89/92/__kaenbyou_rin_touhou_drawn_by_hanaon__sample-89928feb60ba9e1ffac25119c723e01a.jpg",
				artist: "hanaon"
			})
		]
	},

	{
		name: "Reiuji 'Okuu' Utsuho",
		title: "Scorching, Troublesome Divine Flame",
		species: "Hell raven with Yatagarasu",
		abilities: "Manipulation of nuclear fusion",
		occupation: "Regulator of the flames  in the Former Hell of Blazing Fires",
		location: "The Former Hell of Blazing Fires",
		mainTheme: "Solar Sect of Mystic Wisdom ~ Nuclear Fusion",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/okuu/okuu1-thumbnail.png",
				source: "images/characters/characters/okuu/okuu1.png",
				artist: scarristo,
			}),
			(art = {
				thumbnail: "images/characters/characters/okuu/okuu2-thumbnail.jpg", 
				source: "https://cdn.donmai.us/sample/98/ec/__reiuji_utsuho_touhou_drawn_by_shundou_heishirou__sample-98ec40e609bdc58e9b48bcc8e743f47c.jpg",
				artist: "shundou heishirou",
			}),
			(art = {
				thumbnail: "images/characters/characters/okuu/okuu3-thumbnail.jpg",
				source:
					"https://cdn.donmai.us/sample/de/ad/__reiuji_utsuho_touhou_drawn_by_chikuwa_savy__sample-deadc6248f20313ef981d6b7815bfc69.jpg",
				artist: "chikuwa savy"
			})
		]
	},

	{
		name: "Koishi Komeiji",
		title: "The Closed Eyes of Love",
		species: "Satori",
		abilities: "Manipulation of the Unconscious Mind, Reading Minds(Lost)",
		occupation: "None",
		location: "Palace of the Earth Spirits, Myouren Temple",
		mainTheme: "Hartmann's Youkai Girl",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/koishi/koishi1-thumbnail.png",
				source: "images/characters/characters/koishi/koishi1.png",
				artist: shadowChevy,
			}),
			(art = {
				thumbnail: "images/characters/characters/koishi/koishi2-thumbnail.png", 
				source: "images/characters/characters/koishi/koishi2.png",
				artist: scarristo,
			}),
			(art = {
				thumbnail: "images/characters/characters/koishi/koishi3-thumbnail.jpg",
				source:
					"https://cdn.donmai.us/sample/81/48/__komeiji_koishi_touhou_drawn_by_yuzu_shino_bon2rose__sample-81487f66ae2ae8d8c56e3f74c432471b.jpg",
				artist: "yuzu shino"
			})
		]
	},

	{
		name: "Suika Ibuki",
		title: "Tiny Night Parade of One Hundred Demons",
		species: "Oni",
		abilities: "Manipulation of density and sparseness",
		occupation: `Former member of the <a href="four-devas-of-mountain/devas-of-the-moutain.html">Four Devas of the Mountain</a></p>`,
		location: "Somewhere in Gensokyo (Commonly seen around Youkai Mountain, Heaven and the Hakurei Shrine). Used to live in Former Capital",
		mainTheme: "Broken Moon",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/suika/suika1-thumbnail.png",
				source: "images/characters/characters/suika/suika1.png",
				artist: shadowChevy,
			}),
			(art = {
				thumbnail: "images/characters/characters/suika/suika2-thumbnail.png", 
				source: "images/characters/characters/suika/suika2.png",
				artist: scarristo,
			}),
			(art = {
				thumbnail: "images/characters/characters/suika/suika3-thumbnail.png",
				source:
					"images/characters/characters/suika/suika3.png",
				artist: shadowChevy
			})
		]
	},

	{
		name: "Zanmu Nippaku",
		title: "King of the Silent Bliss of Nirvana",
		species: "Human Oni",
		abilities: "Manipulating nothingness",
		occupation: "None",
		location: "Former Hell, mostly",
		mainTheme: "The Deviants Unobstructed Light",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/zanmu/zanmu1-thumbnail.png",
				source: "images/characters/characters/zanmu/zanmu1.png",
				artist: shadowChevy,
			}),
			(art = {
				thumbnail: "images/characters/characters/zanmu/zanmu2-thumbnail.jpg", 
				source: "https://cdn.donmai.us/sample/7f/79/__nippaku_zanmu_touhou_drawn_by_tarutsu__sample-7f7955664c9eea45de9a88264f543e62.jpg",
				artist: "tarutsu",
			}),
			(art = {
				thumbnail: "images/characters/characters/zanmu/zanmu3-thumbnail.jpg",
				source:
					"https://cdn.donmai.us/sample/ff/3f/__nippaku_zanmu_touhou_drawn_by_ramudia_lamyun__sample-ff3f7bd413a78c4811eff58c8ecb86a1.jpg",
				artist: "ramudia (lamyun)"
			})
		]
	},

	{
		name: "Kasen Ibaraki",
		title: "The One-Armed, Horned Hermit",
		species: "Oni/Hermit",
		abilities: "Guiding animals",
		occupation: `Sage and former member of the <a href="four-devas-of-mountain/devas-of-the-moutain.html">Four Devas of the Mountain</a></p>`,
		location: "Youkai Mountain, also seen at the Hakurei Shrine",
		mainTheme: "Battlefield of the Flower Threshold",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/kasen/kasen1-thumbnail.png",
				source: "images/characters/characters/kasen/kasen1.png",
				artist: scarristo,
			}),
			(art = {
				thumbnail: "images/characters/characters/kasen/kasen2-thumbnail.png", 
				source: "images/characters/characters/kasen/kasen2.png",
				artist: shadowChevy,
			}),
			(art = {
				thumbnail: "images/characters/characters/kasen/kasen3-thumbnail.png",
				source:	"images/characters/characters/kasen/kasen3.png",
				artist: `<a href="https://twitter.com/ThirdTrumpet"
				target="_blank">3rdTrumpet</a>`
			})
		]
	},

	{
		name: "Yuuma Toutetsu",
		title: "Undefeated Matriarch of the Gouyoku Alliance",
		species: "Taotie",
		abilities: "Absorbing anything",
		occupation: "Chairwoman of the Gouyooku Alliance",
		location: "Unknown",
		mainTheme: "Memento of the Greedy Beast",
		otherArts: [
			(art = {
				thumbnail: "images/characters/characters/yuuma/yuuma1-thumbnail.png",
				source: "images/characters/characters/yuuma/yuuma1.png",
				artist: shadowChevy,
			}),
			(art = {
				thumbnail: "images/characters/characters/yuuma/yuuma2-thumbnail.jpg", 
				source: "https://cdn.donmai.us/sample/bd/c8/__toutetsu_yuuma_touhou_drawn_by_e_o__sample-bdc8b420768f3446fe8223350c24f432.jpg",
				artist: "e. o.",
			}),
			(art = {
				thumbnail: "images/characters/characters/yuuma/yuuma3-thumbnail.jpg",
				source:	"https://cdn.donmai.us/sample/74/47/__toutetsu_yuuma_touhou_drawn_by_rozugadena__sample-744701b5989ac64916dc236f26c93846.jpg",
				artist: "rozugadena"
			})
		]
	},
];



// MAIN ARTISTS SOURCES

const shadowChevy = `<a href="https://twitter.com/Shadow_Chevy"
target="_blank">Shadow Chevy</a>`;

const scarristo = `<a href="https://twitter.com/Scarristo"
target="_blank">Scarristo</a>`;


// Main ambience image / currently shown
const selectedAmbiencePic = document.querySelector(".selected-ambience-pic");
// Figcaption with the Artist's name
const figCaptionArtist = document.querySelector("figcaption");

// other ambience arts
const ambienceButtons = document.querySelectorAll(".ambience-buttons");

let mainButton = 0;

ambienceButtons.forEach((button) => {
	button.onclick = () => {
		buttonBorderSwitcher(ambienceButtons, button);
		mainButton = button.value;

		figCaptionArtist.innerHTML = `${ambienceData[mainButton].alt} by <a href="${ambienceData[mainButton].source}" target="_blank"> ${ambienceData[mainButton].artist}</a>`;
		selectedAmbiencePic.src = ambienceData[mainButton].address;
		selectedAmbiencePic.alt = ambienceData[mainButton].alt;
	};
});

// FUNCTION TO SWITCH OFF OTHER BUTTONS WHEN CLICKING
// AMBIENCE SECTION AND THUMBNAIL SECTION
function buttonBorderSwitcher(buttons, button) {
	buttons.forEach((unselect) => {
		unselect.classList.remove("selected-border");
	});

	button.classList.add("selected-border");
}

// ROUND THE IMAGE INSIDE THE BUTTON WHEN CLICKED ON
function portraitImageSwticher (image) {
	
	portraitImage.forEach(image => {
		image.classList.remove('selected-char')
	})
	
	image.classList.add('selected-char');
};


// Character Portrait Buttons and image
const characterPortraitButton = document.querySelectorAll(".char-portrait-button");
const portraitImage = document.querySelectorAll('.portrait-pic');


// Main art img
const selectedArt = document.querySelector(".selected-art");

// Figcaption showing the name of the artist
const charArtist = document.querySelector(".char-figcaption");

// Thumbnail buttons.
const thumbnailButton = document.querySelectorAll(".thumbnail-button");

// Set Initial default for Characters and Thumbnails
let currentChar = 3;
let currentThumbnail = 0;


characterPortraitButton.forEach((button) => {
	button.addEventListener("click", () => {
		characterSwitcher(button);

		currentChar = button.value;

		updateThumbnails(currentChar);
	});
});

// Rouding the image inside the buttons on click.
portraitImage.forEach(images => {
	images.onclick = () => {
		portraitImageSwticher(images);
		// images.classList.add('selected-char');
	}
	
})


// CHARACTERS SWITCHER
function characterSwitcher(characterBtn) {
	// Characters buttons value
	currentChar = characterBtn.value;

	characterPortraitButton.forEach((button) => {
		button.classList.remove("selected-char");
	});

	characterBtn.classList.add("selected-char");

	

	// Character Name and Title
	// Change Characters name and title to the current by clicking in that characters
	document.querySelector(".char-title").innerHTML = `
		<h3>${characters[currentChar].name}</h3>
		<p>&ldquo;${characters[currentChar].title}&rdquo;</p>
	`;

	// Character Description Container
	document.querySelector(".char-description").innerHTML = `
		<p> <span class="bold-text">Species&colon;</span> ${characters[currentChar].species}</p>
		<p> <span class="bold-text">Abilities&colon;</span> ${characters[currentChar].abilities}</p>
		<p> <span class="bold-text">Occupation&colon;</span> ${characters[currentChar].occupation}</p>
		<p> <span class="bold-text">Location&colon;</span> ${characters[currentChar].location}</p>
		<p> <span class="bold-text">Main Theme&colon;</span> ${characters[currentChar].mainTheme}</p>
	`;
}


// THUMBNAILS
function updateThumbnails(currentChar) {
	const thumbnail = characters[currentChar].otherArts;
	const name = characters[currentChar].name;

	thumbnailButton.forEach((button) => {
		const currentIndex = button.value;

		// Selected Character Art
		button.innerHTML = `
				<img class="thumbnail-art" src="${thumbnail.at(currentIndex).thumbnail}"
				alt="${name}">
			`;
	});

	// Selected Art
	selectedArt.src = thumbnail.at(currentThumbnail).source;

	// Current Figcaption Artist
	charArtist.innerHTML = thumbnail.at(currentThumbnail).artist;
}


// OTHER ARTS/THUMBNAIL CODE
thumbnailButton.forEach((button) => {
	button.onclick = () => {
		buttonBorderSwitcher(thumbnailButton, button);

		currentThumbnail = button.value;
		const selected = characters[currentChar].otherArts;

		// Changing Selected Art to the thumbnails arts
		selectedArt.src = selected.at(currentThumbnail).source;

		// Changing the thumbnail Artist based on the art clicked;
		charArtist.innerHTML = selected.at(currentThumbnail).artist;
	};
});



// Full screen picture code
function fullScreenImage (fullScreen) {
	
	const fullImageContainer = document.querySelector('.full-screen-image-container');
	const fullImage = document.querySelector('.full-screen-image');
	const closeFullScreen = document.querySelector('.close-full-screen');
	
	// Characters full screen
	const artFullScreen = characters[currentChar].otherArts;
	

	// location
	fullImageContainer.classList.remove('hidden');
	
	if (fullScreen === 'ambience')  {

		// characters Pics
		fullImage.src = artFullScreen.at(currentThumbnail).source;
		fullImage.alt = characters[currentChar].name;
		
	} else if (fullScreen === 'character') {
		
		// Ambience 
		fullImage.src = ambienceData[mainButton].address;
		fullImage.alt = ambienceData[mainButton].source;
		
	} 

	closeFullScreen.addEventListener('click', function () {
		fullImageContainer.classList.add('hidden');
	})
}

selectedArt.onclick = () => fullScreenImage('ambience');
selectedAmbiencePic.onclick = () => fullScreenImage('character');
