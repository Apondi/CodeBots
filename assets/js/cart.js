var badge = document.getElementsByClassName('badge')[0];
var credit = 0;
console.log("itworked")
document.onclick = function (x) {
    console.log(x.target.className)
    if (x.target.className === 'sidebar-nav-item' && x.target.checked) {
        credit = credit + parseInt(x.target.value);
        badge.innerHTML = credit;
    }else if (x.target.className === 'sidebar-nav-item' && !x.target.checked){
        credit = credit-parseInt(x.target.value);
        badge.innerHTML = credit;
    }

    if (x.target.className === 'btn btn-primary') {
        credit = credit-parseInt(x.target.value);
        badge.innerHTML = credit;
        var delayInMilliseconds = 1000;

setTimeout(function() {
    x.target.innerHTML="Product Added!";
}, delayInMilliseconds);

    }
};
