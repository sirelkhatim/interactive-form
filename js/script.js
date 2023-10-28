console.log('test');
document.getElementsByTagName('form')[0].reset();
addEventListener("load", (event) => {
    document.getElementById('name').focus();
    document.getElementById('other-job-role').style.visibility = 'hidden';
});
const jobRole = document.getElementById('title');
jobRole.addEventListener('change', (e) => {
    if(jobRole.value ==='other'){
        document.getElementById('other-job-role').style.visibility = 'visible';
    }else{
        document.getElementById('other-job-role').style.visibility = 'none';
    }
});
const color = document.getElementById('color');
color.disabled=true;
const design = document.getElementById('design');
let totalCost = 0;
design.addEventListener('change',  (e)=>{
    color.disabled = false;
    for(let i = 0; i < color.length; i++){
        let colorOption = color[i].getAttribute(`data-theme`);
        if(e.target.value===colorOption){
            color[i].hidden = false;
            color[i].setAttribute(`selected`, ``)
        }else{
            color[i].hidden = true;
            color[i].removeAttribute(`selected`)
        }

    }

} );


const activities =  document.getElementById('activities');
const activity_cost = document.getElementById('activities-cost');
activities.addEventListener('change', (e) =>{
    const check = e.target;
    const cost = parseInt(check.getAttribute(`data-cost`));
    const date_time = check.getAttribute(`data-day-and-time`);
    if(check.checked){
    totalCost += cost;
    }else{
        totalCost-= cost;
    }
    
    activity_cost.innerHTML = `Total ${totalCost}`;
});

const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementsById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paymentMethod.value = 'credit-card';
paypal.hidden = true;
bitcoin.hidden = true;

paymentMethod.addEventListener('change', (e)=> {
    val = e.target.value;
    
    for(let i = 0; i < paymentMethod.length; i++){
        let paymentOption = paymentMethod[i].getAttribute('value');
        if(val===paymentOption){
            paymentMethod[i].hidden = false;
        }else{
            paymentnMethod[i].hidden = true;
        }
    }
});

