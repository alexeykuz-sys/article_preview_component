const SHARESIGN = document.getElementById('share-sign');
const SHARESIGN2 = document.getElementById('share-sign-2');
const CARDFOOTER =document.getElementById('card-footer');
const CARDFOOTERGREY =document.getElementById('card-footer-grey');

function footerHandler (){
    if (CARDFOOTER.classList.contains('show')){
        CARDFOOTER.classList.remove('show')
        CARDFOOTER.classList.add('none')
        CARDFOOTERGREY.classList.add('show')
    } else if (CARDFOOTERGREY.classList.contains('show')){
        CARDFOOTERGREY.classList.remove('show')
        CARDFOOTERGREY.classList.add('none')
        CARDFOOTER.classList.add('show')
    }
}


SHARESIGN.addEventListener('click', footerHandler);
SHARESIGN2.addEventListener('click', footerHandler);