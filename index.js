let negative = document.querySelector('.negative');
let positive = document.querySelector('.positive');
negative.addEventListener('click',()=>{
    let digit = document.querySelector('.digit');
    let variable = digit.textContent;
    variable = variable - 1;
    digit.textContent = variable;
})
positive.addEventListener('click',() => {
    let digit = document.querySelector('.digit');
    let variable = digit.textContent;
    let variable_2 = parseInt(variable);
    variable_2 += 1;
    digit.textContent = variable_2;
}) 