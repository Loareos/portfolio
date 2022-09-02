document.querySelectorAll(".carousel").forEach(carousel => {
	const items = carousel.querySelectorAll(".carousel_item");
	const btnHtml = Array.from(items, () => {
		return `<span class="carousel_btn"></span>`;
	});

	carousel.insertAdjacentHTML("beforeend", `
		<div class="carousel_nav">
			${ btnHtml.join("")}
		</div>
	`);

	const parent = carousel.parentNode;
	const left = parent.querySelector('.left'); 
	const right = parent.querySelector('.right'); 
	var i = 0;

	const btns = carousel.querySelectorAll(".carousel_btn");

//	console.log(items.length);

	right.addEventListener("click", () => {
		if(i == items.length-1){
			i=0;
		}else{
			i++;
		}
		items.forEach(item => item.classList.remove("carousel_item-selected"));
		btns.forEach(btn => btn.classList.remove("carousel_btn-selected"));
		items[i].classList.add("carousel_item-selected");
		btns[i].classList.add("carousel_btn-selected");					
	});

	left.addEventListener("click", () => {
		if(i == 0){
			i=items.length-1;
		}else{
			i--;
		}
		items.forEach(item => item.classList.remove("carousel_item-selected"));
		btns.forEach(btn => btn.classList.remove("carousel_btn-selected"));
		items[i].classList.add("carousel_item-selected");
		btns[i].classList.add("carousel_btn-selected");					
	});

	items[i].classList.add("carousel_item-selected");
	btns[i].classList.add("carousel_btn-selected");
});