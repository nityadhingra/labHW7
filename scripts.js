document.body.style.backgroundColor = "#9dbcd4";

function clickNyc(){
	nyc.classList.add("clear")
	doggo.classList.remove("clear")
	food.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "I'm currently in New York City."
}

let nyc = document.querySelector("#nyc");
nyc.addEventListener("click", clickNyc);


function clickDoggo(){
	doggo.classList.add("clear")
	nyc.classList.remove("clear")
	food.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "I'm a little obsessed with my dog and I miss him:("
}

let doggo = document.querySelector("#doggo");
doggo.addEventListener("click", clickDoggo);


function clickFood(){
	food.classList.add("clear")
	nyc.classList.remove("clear")
	doggo.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "Food makes me happy and I've been cooking a lot more lately."
}

let food = document.querySelector("#food");
food.addEventListener("click", clickFood);



