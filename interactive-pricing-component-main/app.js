const view = document.querySelector('.pageviews');
const price = document.querySelector(".price");
const inputRange = document.querySelector(".input-range");
const switchToggle = document.getElementById("switch");
const span = document.querySelector(".span-billing");
const pageViews = ["10K pageviews", "50K pageviews", "100K pageviews", "500K pageviews", "1M pageviews", ]
const perMonth = [8.00, 12.00, 16.00, 24.00, 36.00];

let isYearly = false;
const value = inputRange.value;

inputRange.addEventListener("input", ()=>{
    getUpdate()
    view.textContent = pageViews[inputRange.value]
    
});

switchToggle.addEventListener('change', ()=> {
    if(isYearly == false){
        isYearly = true
    } else {
        isYearly = false;
    }
    getUpdate()
});


function getUpdate(){
    if(isYearly){
        price.textContent = `$ ${perMonth[inputRange.value].toFixed(2) * .75 * 12}`;
        span.textContent = "/ year"
    }else {
        price.textContent = `$ ${perMonth[inputRange.value].toFixed(2)}`
        span.textContent = "/ month"
    }
}

