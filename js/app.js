//  filtwe qullary

    
$(document).ready(function(){
    $('.list').click(function(){
        const value =$(this).attr('data-filter');
        if (value == 'All'){

            $('.itembox').show('1000');
        }
        else{
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');
        }
    })
    //add active class on selected item hmmm
   
}) 


 
// clint says slider

const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const productCards = document.querySelectorAll('.product-card');

let slideIndex = 0;
const slideWidth = productCards[0].offsetWidth + 40;

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = productCards.length - 1;
  }
  sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > productCards.length - 1) {
    slideIndex = 0;
  }
  sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

// end

const form = document.getElementById('contact-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  // send form data to server using fetch or XMLHttpRequest
}

 