//! #########################----Database---################################

var comicsData = {
	marvel: {
		events: [
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRK5KKQgTJJ9J0kkoHJbtsJRzy9P5BquARKyQ_X__QRmtD5C4EfH9Wz6LH2ehzlWpOGi-BQK3tb7gEKxdV7jGenxEVuWIqE8BDCHx-DRfP6PSfHFsmshzzFY-GqTIbFtr1TUJ_LSoH22jXnaPImvtVnFsB5Gz6iCQHnaHkK7oYtWpwVN1GF8D0S6CXdA/s320/devils_reign.webp",
				name: "Devil's Reign",
				year: 2021,
				comicsCount: 9,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZbfFoSkWn5NpI5JJ3MlrbV1Bg6eyg6NijQSYRNK5-J67YX0m90EFJpo3fgz55bo8Iq7mK60T6I7Rj8oKtnGk63Kw3BPM21iDfWOXh3D5kbUmyaWbB4vw9jge9eNQh7nPXXonDARPgXEDpsBovxdrDtikGi8l1o5EgYfy5MeTq8MFM_jh_s1EVTbORfg/s3121/Spider-Man_One_More_Day.jpg",
				name: "One More Day",
				year: 2007,
				comicsCount: 9,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO8ejMo3vqZxBDLL8Y-q4AR33l5JMQPt41fBwPD43xnuWfP0jQPFSUM8VKQaXEVI7DWkI-wutKxh4phEeUocpIq5vA4HKk0O6vf7lWeGxj6VAbu-cgJYLFZhbCAf1a8gPhmYxEIa90Mfhx98YLgV5EiSXmc7OT-D3pS_x-FUmHfprFM7QQwTHHJGBQQA/s1537/civil_war.jpg",
				name: "Civil War",
				year: 2006,
				comicsCount: 21,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlU9dIHIVosSsPghIgKDYPLSYIe77w6f1O8hSlRV8Cligcvp6VPV_0Z-3AH-a2GT5WA0bPfsWCuDPejSAA_7wMDLURz417EinyuXf7tjXRW45x6EJd02uB55QGWsOCdhbu0gJUWVR-EsF54sdnWyK1uPf4Pr4BSvxclSFmvQupgCHcNZib8NE9uVO5Tg/s2726/Spider-Man_%20The%20Other%20-%20TPB%20(Part%201)%20-%2051~2.jpg",
				name: "Spider-Man: The Other",
				year: 2005,
				comicsCount: 12,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIhwhSElQQwgUb0RHVNy-Q-LmL2qZmPnBCezQH_joVMkpHojLkHrGEjTvbCFcZ20yACjfpelsjz8nODGHS52H71C1AH5JI8jPA7xX9Hn7Iv9vI7jX6xHrju-pj5bAJ_xuvMYgbArYdi-XwkjCBLQgv8uP6NlUp-Y5lI1Vupml-Rupwf_NnRfqUEcL5Mw/s640/second_clone_saga.jpeg",
				name: "Second Clone Saga",
				year: 1994,
				comicsCount: 63,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBgUNSBdOvuDJR5bL62meKP1MgmwMFyKf1dO5ghxTF6qpskFggs9YoWG2bbmi4il8NhBo0OCS2qIAwj5TZYRb5rlq-Sy6zd_aQSoQUHKJNCFt57GcJ4nQNvr7W4xATtGpbCnB7_QWcpOuh8RK75sYeIjLSYtK-CAYgm3Zg1fD81b77svIk52YnLtJV6Q/s2048/Spider-Man_%20Maximum_Carnage.jpg",
				name: "Maximum Carnage",
				year: 1993,
				comicsCount: 14,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDq-cvki75pFHEJPnF2jOGIZ6H--DEahH-OZDjbikCWsjRnvZUoGoq0kCWPUQuvWbkj6alWEcQed2ZFYNqhpYUxcUxdC4XrdzSRMVkxCnbYuOpRPVixlziTTzPXSecB23DeCc76MthgI6KqqPoiZbFGv4GnA6IH-XmEEQJ10wQnQwkSdKlRM2VQvcoBQ/s3056/Spider-Man_%20Kravens_Last_Hunt.jpg",
				name: "Kraven's Last Hunt",
				year: 1987,
				comicsCount: 7,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiptGTNVzO3thdC7WS5LxtX_hevhxRvEdiBwRLna7FHETOkseB5EDFqLcnLhYtWsTsuosUSBkU2yWSlK6o99__IZ34eweelzpQFfGObGe0IXruAWonPEiIyId5kGO417C5xuXIsg6NMfLVUiTaIMHNwayWuqfwUS0qA8NTicZ3-BV12C3Cv4pXCI_wSIw/s2914/Marvel_Super_Heroes_Secret_Wars.jpg",
				name: "Marvel Super Heroes Secret Wars",
				year: 1984,
				comicsCount: 12,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIVZAxGGD-l5W-MCpqaTBf2gZBmSZi3gQ6KC-vbOvOIcJAxFLYXvDfdwNJba5ezaz6UYMDpDTDil2E4j8YxRPrRTZuB25ttf3NXPBkSXuAATnsYezbEX6jkmRJbc50g7xXAA8z8AkoJ7eStXxsa9Vqjwx1RoJCiqY-KwYhSAXczTLsOmab8F-FhUtkEg/s396/original_clone_saga.jpg",
				name: "Original Clone Saga",
				year: 1973,
				comicsCount: 12,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkmFKcsXLbq0XPzhNXAodCVPXo0IoMCRUYcVSSP98H3QYBNwrGayMNgb3VHWiL6byROSYQe7mHHq761BcWfsGFEt5EVRZYkp4M_S2AaAm4rSURSujnaUqIqS7W3DNGqOYbj2TkMGORXZjDgHk_ZUXPMLxBOhA_QFG-ylPkwVZxo4pFrM9loF-RM8Wmmg/s972/thanos_war.webp",
				name: "Thanos War",
				year: 1973,
				comicsCount: 12,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVTIUmLgvI06iiDqpSl5vy8ltT2bdkrUwPabLN7ddOPQ2IacqFGrPFdB06qUxuB1azSbJRcfb8WVL5B2nXflLIp5rvBZ-V5cxf2dJPECP6jXq76GludYczqEJijKqQgVlhCactzWpAuFvXzUL35DExEijp-kCjyran6TE2va6m8rXrIIlVex5b2dPnYw/s1208/Avengers_Defenders_War.webp",
				name: "Avengers/Defenders War",
				year: 1973,
				comicsCount: 8,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimK_iCrimqAarZS3j_ruB6pv_CmR2CfHObLhABsWIOvEc4Qi2p8HgtoaTFOvxlloOvJKQSiwZSEs5IxuOv_Z78-8cvoA_hQhU5zlV4iUU_fPYtl54B8ZyySMheh1faG71wPwdSkka48RYW80_UEjuY4esLl7WExZQ1j_uUuLWe59Fvw1plMabQBrgHGA/s800/death-of-gwen-stacy.jpg",
				name: "The Nighty Gwen Stacy Died",
				year: 1973,
				comicsCount: 2,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO-2wLcz2MKLZGI_-mvNX00g33IRcb7qnKbTEbU7zjcLYk4pmQ1dIgTGpmU482sS0jpGg1sAbNTELoQxI_kBcCz_krBLSbXhJqbbpbSlawSgCR8Vn6fXlYpU8etC397k0v4zID9xgQXGxxG51dHgWYH8aoY-x8GOEdzIo-SLGdjQ1_Gw2rtE-58EumwA/s2209/kree_skrull_war.jpg",
				name: "Kree-Skrull War",
				year: 1971,
				comicsCount: 9,
			},
			{
				studio: "marvel",
				category: "marvel-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcPBNyObpZC4Z_lPa2pD5vu6gPffa5aBelDhP94AbImzJg-uf4__A1VIz7MvlDJ11nk9HX1vffjmqskiZxcQklJalDuRSsy75cirjTj1M9pEXkNz8FqlLdteHmarm7MEKz_mBly6-BT-Wi5C3jhsxn1KxHvl5A7dps4VPpMWbPXsYmBa0svuok4QZQBw/s320/ff_wedding.jpg",
				name: "Reed Richards and Sue Storm's Wedding",
				year: 1965,
				comicsCount: 1,
			},
		],
		characters: [
			{
				studio: "marvel",
				category: "marvel-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUNFJa4xUfI68OxUxCMUHLBMdM6QaD-0D6wtvh7ZLjimWlReTnNsUE_Iw5iEadrhC5Sux1XvfN_ABleXvjrp0CNwoHQ6izk-VrzXk6Vh4YG1qpgAhEnZMU_v-HLTQ6xs-vP_zBN4LbQgUhCmrBfMuTV2n5lzxn3iLqpvrCd9oUtgaDAdgWHzD8i7j0ow/s1600/Avengers.jpg",
				name: "Avengers",
				comicsCount: 76,
			},
			{
				studio: "marvel",
				category: "marvel-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgamwCAuhMge9mgo3zfy_9oOPsHsOcf41AkmLYYlO6QKWJcpj9-j9XyH1K3Fbr5MY3S76JDjyER6ucaBD83fZHhUmlswtOi4VNtIRfs25laeBNkVctL8TO523enqifqIkzDJvDhFV5lBl_Zd6StAd3TfG2AG2PB5BFco6Un8jIK08pjagrcsUVZuxlGUw/s1600/daredevil.jpg",
				name: "Daredevil",
				comicsCount: 42,
			},
			{
				studio: "marvel",
				category: "marvel-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOWIAGHDLkZgv6j5DJXVVIffBEbzu7LAF3EQmlkjuB4-SMGKoK5lQhUFDhCWofCwi9OV9Xd8q4eHWsqR4Qdk_xjOIuFCxRH_wAic1moNzg10G4TvbB9a75Oyd9dDSIxG5LSqLUmBeRe6qnz5JrTbMzv-kuXABg_FKSeRBLC6bdfSsbm0pL9fGpwVRzmA/s1600/iron_man.jpg",
				name: "Iron Man",
				comicsCount: 46,
			},
			{
				studio: "marvel",
				category: "marvel-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0tret6wsg5chcJClOGUijOeNskUPdG9EoEfKo8OhT38yqhUciU76wHciA5zOtkIV-61Zla5qSm2MkLGawIg1bdIltTYneC_dwB4pIVN0dLKe8uqsFOCSAI5x7lrq8g8Tu4VVtu_U-3rAnjA9IEjGn0YWjdog66XtwoZuie8pZh5bAnDliD4nq2AWORA/s1600/moon_knight.jpg",
				name: "Moon Knight",
				comicsCount: 94,
			},
			{
				studio: "marvel",
				category: "marvel-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7ugTr3w8ZzOlbCQLUzsMCJVnPiw3mte2sEcyz9Si_gSb44144GCPDfYwEB8M0wDIOoUZDoFmV6U2mzq4yDf1VPr-T6B7TRyW0NUK0r9sLZrIguHPPvKF48xBAWte-RQhaXjM3OEsnNS9nIC1kwwvkgyY_f7T1-miJIaB0K-IW5ml0GM6l8a4qYe7alA/s1600/ms_marvel.jpg",
				name: "Ms Marvel",
				comicsCount: 12,
			},
			{
				studio: "marvel",
				category: "marvel-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsz1NSb-C07LBA83nBphJQybNATJFXYEODznPmOG3acO7ZlNVUUNtMXrH03PJbGo__FfFpSGFKXtnBlNkuN3lZqnjXcOxwEhsatbBRcxg0-TuSUFKR-B1A50c7JEUhDOg8Gy4ArMkih1WffOE_xc01ky9m607fUnDOkpX2m9nPQBFMUcUBDC8NCRTtmw/s1600/Spider-Man.jpg",
				name: "Spider-Man",
				comicsCount: 532,
			},
			{
				studio: "marvel",
				category: "marvel-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAtyy-jOPg8zmsCgtiT-GleSAaeVfMtWmKLM58GJnLlf7ZeShz-_S5EiRToOUel6DXSZX6KEh27B3DokGlPayeIZXbc0PnkB5RHI_7jsLjxjGjOfiuv3oYifRZoy2s_3_6EdoBMIN5poljxZXgH1rUTN97BfOk1mWrMONcGUsfim47i5gP7sNFj1Hgeg/s1600/Thor.jpg",
				name: "Thor",
				comicsCount: 168,
			},
		],
	},
	dc: {
		events: [
			{
				studio: "dc",
				category: "dc-event",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj68GEHQuPSwSDylTSjKJpLf4quYGvsAIjMXRkrRIlxeFRdusypRhy9FC2lpigCk-bXVpF3g3SRXmL_wq8417VzHtLSOp9EeWpH4m9l039VpJXXyZuzzAEU56SwB8JqZy3v9YEaWmkOBNjUpxX-v4c7lBDUWOHmpno9ZKYX5mnuMP8dWmdl1v6KEPVY6w/s3056/Flashpoint(2011).jpg",
				name: "Flashpoint",
				year: 2011,
				comicsCount: 14,
			},
		],
		characters: [
			{
				studio: "dc",
				category: "dc-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinYIer0RKtf3E_fSHhGNKNfGKDtBCAg3kHF1ZCn5ID-U9W9CtP2PdvNmn1NsiE5-FiIxNeGvuCQY4_YZDKO9V2SbUu6sohj9Xv-FncHGFQ5V5pDgd-iBaSlU6i8v04uceXPc1PP_QJjK5aRQRN5W4pSl815uq78T2yRZkcAmbc9ebxyNZPdQedqouyAw/s3840/batman.jpg",
				name: "Batman",
				comicsCount: 61,
			},
			{
				studio: "dc",
				category: "dc-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtqkO4vljOnV0Ax_e9wfexBISlLMMwJMN3K6ottEwnvdXGfzASgUbWf97HLNAvOmrfn89J0dFOJi825Old8A4QNa8FFoaqSV7oxhRkhW3BAKbsMeck9P3QR8bL2OyAGsKZFYKOi7iTydkiTSBv3-lrC2u_WRBRshqZLJACS0a2wymY_fu6iCGK9_dndA/s1440/blue_beetle.webp",
				name: "Blue Beetle",
				comicsCount: 7,
			},
			{
				studio: "dc",
				category: "dc-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0JEA-1nA6EKs0dCtE2P0ILZWqfqvC68QPqvU6LCKrvJ-L8AV27StI8tntmKFJxGw0VJPPH11yUG3tjnsofrjcG6OKGP4FTyo45EvyenkY5S5Of7S1Wa7AAySsi_SrsLR92Sy5_0u_EFlN6ARuZfRkpDCm9igdo1JRq6Pcva1FzHIJmVFHz0_Lkk708g/s1920/superman.jpg",
				name: "Superman",
				comicsCount: 4,
			},
			{
				studio: "dc",
				category: "dc-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBPG_oDk3YnOMO-wFwOZEpil9WrFAeIr2Cpz3vrQX_XTEKCYV_29FfUtRH2_6GNwXccUPoJxDncRRTuRJ0-y9vwFgvQmT9RxgrpYEbGY64ljZ3wNVEPGv-oqZsgLkXs6RgYyA1hMw1_sCmgtvmoEIXpRzYZTxqa4lpMOSiLvII52b4F0jsi1buoump1Q/s1920/flash.webp",
				name: "The Flash",
				comicsCount: 27,
			},
		],
	},
	image: {
		events: [],
		characters: [
			{
				studio: "image",
				category: "image-character",
				img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinTdWRMp6tYJ3X7d10YxJujjjBjbHuUK_OvPhlgBnD7amWzTli9dQ7GTQe77DXLbod_sVGmwyj_OwAyUAFAeAd9WiBiuZDl7Sg7y5O7JxBhQahcJ57U-dKvoJe63uvoOg31x3ogJbB3IMp466jlc4j3SzQJCCzgVxL_P40aq2ngDCKCVxTV1jk7k_d9Q/s1600/invincible.webp",
				name: "Invincible",
				comicsCount: 145,
			},
		],
	},
	studios: [
		{
			studioName: "Marvel Comics",
			img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlpGVMGp3hDN97LeAyPlDL8U5HK0VmJsL1iXPnDo_5NXX6P8EPtss3hm3faVY9L48TYp1PvMh2OPa9Rx7VIbP_TRQoliRcsk49iRnQP2EdUrAX6545kKIpLjzrl5KQ-exO7VkpktGWmNhMUfnwoKoTFlbqmJzY5R_fhz1nE9LRVPfPtsG2NL4JP1bsdA/s1600/Marvel_Comics_1990_logo.webp",
		},
		{
			studioName: "Dc Comics",
			img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfsUr228l0WnBFISdXgfFOsQyIyfihp4sSBlma1hmFJqtzjODpL0D77Sq2lTECdwGaBQ_zorK1yxEZNsFXI4CCCPbkk2cMYfwQp1xYBGDwul5YAZnD5I3JPyul9StIZThFCr07gNhoLyW4v0vrMEkQlDt-Fv45p96ZHz7-4y8VOHsdoRoqwFP2doEYww/s1600/DC_Comics_logo.png",
		},
		{
			studioName: "image Comics",
			img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU4LvATEvsBLBGigHG3uuJetQk9Wq-P39eZGzKmEBr5beU5_I0sy7xQ76PlJDS936sas75Qhk_TaUT6lWFDWheLgknRXgnqrTkYp_jEVbVb1Sz8YHa61GdGdWYkYsubKJvYU2eK4jJYY3KKYGGQI_QDyzrOrpU_ee4oJxqbJgMf8HF-XyRPjWodG5FWQ/s1600/Image-Comics-Logo.jpg",
		},
	],
};

//! #########################----Functions---################################

function displayEventsitems(eventArray) {
	let eventData = eventArray.map(function (item) {
		var text = `<div class="box">
		<img src="${item.img}" alt="">
		<h3>${item.name}</h3>
		<h4>Year: <span>${item.year}</span></h4>
		<p>Total Comics: <span>${item.comicsCount}</span></p>
	</div>`;
		return text;
	});
	eventData = eventData.join("");
	return eventData;
}

function displayCharactersitems(characterArray) {
	let characterData = characterArray.map(function (item) {
		var text = `<div class="ch-box">
		<img src="${item.img}" alt="">
		<h3>${item.name}</h3>
		<h4>Total Comics: <span class="ch-total" data-chval="">${item.comicsCount}</span></h4>
	</div>`;
		return text;
	});
	characterData = characterData.join("");
	return characterData;
}

function displayFullData(eventData, characterData) {
	var fullData = `<div class="events-read">
	<div class="title">
		<h2>Events Read </h2>
		<h4 class="total">Total Comics: <span class="total-value events-value">00</span></h4>
	</div>

	<div class="events-info-container">
		${eventData}
	</div>
</div>;
	<div class="characters-read">
		<div class="title">
			<h2>Characters Read</h2>
			<h4 class="total">
				Total Comics: <span class="total-value characters-value">00</span>
			</h4>
		</div>

		<div class="characters-info-container">${characterData}</div>
	</div>;`;
	return fullData;
}

function eventsCharactersAdder(studio) {
	let events = comicsData[`${studio}`]["events"];
	events.sort(function (a, b) {
		return b.year - a.year;
	});
	let characters = comicsData[`${studio}`]["characters"];
	characters.sort(function (a, b) {
		return b.year - a.year;
	});

	document.querySelector(".comics-info").innerHTML = displayFullData(
		displayEventsitems(events),
		displayCharactersitems(characters)
	);
}

function totalComicRead(studio) {
	var currentArray = comicsData[studio];
	var eventsTotal = 0;
	var charactersTotal = 0;

	currentArray["events"].forEach(function (event) {
		eventsTotal += event.comicsCount;
	});
	currentArray["characters"].forEach(function (event) {
		charactersTotal += event.comicsCount;
	});

	return {
		eventsTotalComics: eventsTotal,
		charactersTotalComics: charactersTotal,
		totalComics: eventsTotal + charactersTotal,
	};
}

function statsLoader() {
	var top10Characters = [];
	var allCharacters = [
		...comicsData.marvel.characters,
		...comicsData.dc.characters,
		...comicsData.image.characters,
	];
	allCharacters.sort(function (a, b) {
		return b.comicsCount - a.comicsCount;
	});

	var fullDataText = `<div class="allData">

	<div class="comicTotalData">

		<h2>Events Overall Data</h2>
		<table>
			<th>
			<td class="headers">Studios</td>
			<td class="headers">Total Comics Overall</td>
			<td class="headers">Events Total Comics</td>
			<td class="headers">Characters Total Comics</td>
			</th>
			<tr>
				<td><img src="${comicsData.studios[0]["img"]}" alt=""></td>
				<td>
					<h3>${comicsData.studios[0]["studioName"]}</h3>
				</td>
				<td class="stats-value">${totalComicRead("marvel").totalComics}</td>
				<td class="stats-value">${totalComicRead("marvel").eventsTotalComics}</td>
				<td class="stats-value">${totalComicRead("marvel").charactersTotalComics}</td>
			</tr>
			<tr>
				<td><img src="${comicsData.studios[1]["img"]}" alt=""></td>
				<td>
					<h3>${comicsData.studios[1]["studioName"]}</h3>
				</td>
				<td class="stats-value">${totalComicRead("dc").totalComics}</td>
				<td class="stats-value">${totalComicRead("dc").eventsTotalComics}</td>
				<td class="stats-value">${totalComicRead("dc").charactersTotalComics}</td>
			</tr>
			<tr>
				<td><img src="${comicsData.studios[2]["img"]}" alt=""></td>
				<td>
					<h3>${comicsData.studios[2]["studioName"]}</h3>
				</td>
				<td class="stats-value">${totalComicRead("image").totalComics}</td>
				<td class="stats-value">${totalComicRead("image").eventsTotalComics}</td>
				<td class="stats-value">${totalComicRead("image").charactersTotalComics}</td>
			</tr>
		</table>
	</div>

	<div class="characterTotalData">
		<h2>Top 5 Characters</h2>
		<table>

			<tr>
				<td>1</td>
				<td><img src="${allCharacters[0].img}" alt=""></td>
				<td>
					<h3>${allCharacters[0].name}</h3>
				</td>
				<td class="stats-studios">${allCharacters[0].studio}</td>
				<td class="stats-value">${allCharacters[0].comicsCount}</td>
			</tr>
			<tr>
				<td>2</td>
				<td><img src="${allCharacters[1].img}" alt=""></td>
				<td>
					<h3>${allCharacters[1].name}</h3>
				</td>
				<td class="stats-studios">${allCharacters[1].studio}</td>
				<td class="stats-value">${allCharacters[1].comicsCount}</td>
			</tr>
			<tr>
				<td>3</td>
				<td><img src="${allCharacters[2].img}" alt=""></td>
				<td>
					<h3>${allCharacters[2].name}</h3>
				</td>
				<td class="stats-studios">${allCharacters[2].studio}</td>
				<td class="stats-value">${allCharacters[2].comicsCount}</td>
			</tr>
			<tr>
				<td>4</td>
				<td><img src="${allCharacters[3].img}" alt=""></td>
				<td>
					<h3>${allCharacters[3].name}</h3>
				</td>
				<td class="stats-studios">${allCharacters[3].studio}</td>
				<td class="stats-value">${allCharacters[3].comicsCount}</td>
			</tr>
			<tr>
				<td>5</td>
				<td><img src="${allCharacters[4].img}" alt=""></td>
				<td>
					<h3>${allCharacters[4].name}</h3>
				</td>
				<td class="stats-studios">${allCharacters[4].studio}</td>
				<td class="stats-value">${allCharacters[4].comicsCount}</td>
			</tr>

		</table>
	</div>

</div>`;
	document.querySelector(".comics-info").innerHTML = fullDataText;
}

//! ########################----Adding the Total Number of Comics Read-###########################
totalComicsReadOverall =
	totalComicRead("marvel").totalComics +
	totalComicRead("dc").totalComics +
	totalComicRead("image").totalComics;
document.querySelector(".value").innerText = totalComicsReadOverall;

//! ########################----Toggling between studios-###########################

var allBtn = document.querySelector("#all-toggle");
var marvelBtn = document.querySelector("#marvel-toggle");
var dcBtn = document.querySelector("#dc-toggle");
var imageBtn = document.querySelector("#image-toggle");

allBtn.addEventListener("click", function () {
	allBtn.classList.add("active-studios");
	marvelBtn.classList.remove("active-studios");
	dcBtn.classList.remove("active-studios");
	imageBtn.classList.remove("active-studios");

	statsLoader();
});

marvelBtn.addEventListener("click", function () {
	marvelBtn.classList.add("active-studios");
	allBtn.classList.remove("active-studios");
	dcBtn.classList.remove("active-studios");
	imageBtn.classList.remove("active-studios");

	eventsCharactersAdder("marvel");
	var readData = totalComicRead("marvel");

	document.querySelector(".events-value").innerText =
		readData.eventsTotalComics;
	document.querySelector(".characters-value").innerText =
		readData.charactersTotalComics;
});

dcBtn.addEventListener("click", function () {
	dcBtn.classList.add("active-studios");
	allBtn.classList.remove("active-studios");
	marvelBtn.classList.remove("active-studios");
	imageBtn.classList.remove("active-studios");

	eventsCharactersAdder("dc");
	var readData = totalComicRead("dc");

	document.querySelector(".events-value").innerText =
		readData.eventsTotalComics;
	document.querySelector(".characters-value").innerText =
		readData.charactersTotalComics;
});

imageBtn.addEventListener("click", function () {
	imageBtn.classList.add("active-studios");
	allBtn.classList.remove("active-studios");
	marvelBtn.classList.remove("active-studios");
	dcBtn.classList.remove("active-studios");

	eventsCharactersAdder("image");
	var readData = totalComicRead("image");

	document.querySelector(".events-value").innerText =
		readData.eventsTotalComics;
	document.querySelector(".characters-value").innerText =
		readData.charactersTotalComics;
});

window.addEventListener("load", () => {
	statsLoader();
});
