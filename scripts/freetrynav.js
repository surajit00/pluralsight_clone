import footer from "../components/footer.js";
import { navigation, popuppart } from "../components/nav1.js"
import searchpart from "../components/searchpart.js"

let navItems = document.getElementById('navItems');
navItems.innerHTML = popuppart()
let nav = document.getElementById('nav');
nav.innerHTML = navigation();
let searchBar = document.getElementById('searchBar');
searchBar.innerHTML = searchpart();


let footerdiv = document.getElementById('footer');
footerdiv.innerHTML = footer();
console.log(footer);