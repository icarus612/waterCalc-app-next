const shop = {
	url: 'https://shop.treehousevineyards.com',
	name: 'Shop',
	menu: []
}

const wineryAndWines = {
	name: 'Wine List',
	url: '/wine-list'
}

const awards = {
	name: 'Awards',
	url: '/awards'
}

const photoGallery = {
	name: 'Photo Gallery',
	url: '/photo-gallery'
}

const FAQs = {
	name: 'FAQs',
	url: '/faqs'
}

const testimonials = {
	name: 'Testimonials',
	url: '/testimonials'
}

const events = {
	name: 'Events',
	url: '/events'
}

const news = {
	name: 'News',
	url: '/news'
}


const weddings = {
	name: 'Weddings',
	url: '/weddings'
}

const privateEvent = {
	name: 'Private Functions',
	url: '/private-functions'
}

const treehouseRentals = {
	name: 'Treehouse Rentals',
	url: '/treehouses'
}

const aboutUs = {
	url: '/about-us',
	name: 'About Us',
	menu: [wineryAndWines, awards, photoGallery, FAQs, testimonials]
}

const newsAndEvents = {
	url: '/news-and-events',
	name: 'News and Events',
	menu: [events, news]
}

const wineClub = {
	url: '/wine-club',
	name: 'Wine Club',
}

const planVisit = {
	url: '/visit',
	name: 'Plan A Visit',
}

const rentalsAndPrivateFunctions = {
	url: '/rentals',
	name: 'Rentals and Reservations',
	menu: [weddings, treehouseRentals, privateEvent]
}

const nav = [
	shop,
	aboutUs,
	wineClub,
	planVisit,
	rentalsAndPrivateFunctions,
]

export default nav