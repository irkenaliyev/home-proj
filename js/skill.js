let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.innerHTML = 0;
    let endValue = item.getAttribute('data-num');
    console.log(endValue);
    let increament = endValue/10;
    function changeNumber(){
        let value = +item.innerHTML;
        if(value<endValue){
            value += Math.round(increament);
            item.innerHTML = value;
            setTimeout(changeNumber, 100);
        }else{
            item.innerHTML = endValue;
        }
    }
    changeNumber();
})