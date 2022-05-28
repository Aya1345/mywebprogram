function drop() {
    const togglebutton = document.getElementsByClassName('toggle-button')[0]
    const navbarlinks = document.getElementsByClassName('navbar-links')[0]
    togglebutton.addEventListener('click', () => { navbarlinks.classList.toggle('show') })
}
function opfunction(){
    window.open("https://www.allrecipes.com/recipes/250/main-dish/pizza/","_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=37,left=37,width=1340,height=640")
  }
      function opfunction1(){
    window.open("https://sandersonfarms.com/recipes/sticky-orange-glazed-chicken-wings/","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=37,left=37,width=1340,height=640")
  }
  function opfunction2(){
    window.open("https://www.allrecipes.com/gallery/strawberry-rhubarb-recipes/","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=37,left=37,width=1340,height=640")
  }
  function opfunction3(){
    window.open("https://www.allrecipes.com/gallery/memorial-day-cakes/","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=37,left=37,width=1340,height=640")
  }
  
  function opfunction4(){
    window.open("https://www.allrecipes.com/recipe/254449/grilled-grapefruit-paloma-cocktail/","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=37,left=37,width=1340,height=640")
  }
  function opfunction5(){
    window.open("https://www.allrecipes.com/recipe/235850/starbucks-caramel-frappuccino-copycat-recipe/","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=37,left=37,width=1340,height=640")
}
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block"; }
  
