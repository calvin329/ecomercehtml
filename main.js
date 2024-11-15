const menuBtn= document.getElementsById("menu-btn")
const navLinks= document.getElementsById("nav_links")
const menuBtnIcon= menuBtn.queryselector("i")

menuBtn.addEventlistener("click", (e) =>
{navLinks.classlist.toggle("open");
const isopen = navLinks.classlist.contains("open");
menuBtnIcon.setAttribute("class", isopen?"ri-close-line" :"ri-menu-line")
	});

navLinks.addEventlistener("click", (e) => {
	navLinks.classlist.remove("open");
	menuBtnIcon.setAttribute("class", "ri-menu-line");
	});
const scrollRevealoption ={
origin:"bottom",
distance:"50px",
duration:1000,
};

scrollReveal().reveal(".header_container h1" ,{
	...scrollRevealoption,
});

scrollReveal().reveal(".header_container form" ,{
	...scrollRevealoption,
	delay:500,
});
scrollReveal().reveal(".header_container img" ,{
	...scrollRevealoption,
	delay:1000,
});
scrollReveal().reveal(".range_card",{
	duration:1000,
	interval:500,
});
scrollReveal().reveal(".location_image img",{
	...scrollRevealoption,
	origin:"right",
});
scrollReveal().reveal(".location_content .section_header",{
	...scrollRevealoption,
	delay:500,
});
scrollReveal().reveal(".location_content p",{
	...scrollRevealoption,
	delay:1000,
});
scrollReveal().reveal(".location_content location_btn",{
	...scrollRevealoption,
	delay:1500,
});
const selectcards = document.queryselectorAll(".select_card");
selectcards[0].classlist.add("show_info");

const price = ["225", "455", "275", "625","395"];

const priceE1 = document.getElementsById("select-price");

function updateswiperImage(eventName,args) {
	if (eventName === "slidechangeTransitionStart") {
		const index = args && args[0].realindex;
		priceE1.innerText = price[index];
		selectcards.forEach((item) => {
			item.classlist.remove("show_info");
		});
		selectcards[index].classlist.add("show_info");
	}
}

const swiper = new swiper(".swiper",{
	loop:true,
	effect:"coverflow",
	grabcursor:true,
	centeredslides:true,
	slidesperview:"auto",
	coverflowEffect:{
		rotate:0,
		depth:500,
		modifier:1,
		scale:0.75,
		slideshadows:false,
		stretch:-100,
	},
	onAny(event, ...args){
		updateswiperImage(event, args);
	},
});
scrollReveal().reveal(".story_card",{
	...scrollRevealoption,
	interval:500,
});
const banner = document.queryselector(".banner_wrapper");

const bannercontent = Array.from(banner.children);

bannercontent.forEach((item) => { appendchild(node: Node): Node
	const duplicateNode = item.cloneNode(true);
	duplicateNode.setAttribute("aria-hidden", true);
	banner.appendchild(duplicateNode);

});

scrollReveal().reveal(".download_image img",{
	...scrollRevealoption,
	origin:"right",
});
scrollReveal().reveal(".download_content .section_header",{
	...scrollRevealoption,
	delay:500,
});
scrollReveal().reveal(".download_links",{
	...scrollRevealoption,
	delay:1000,
});