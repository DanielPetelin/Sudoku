document.querySelector('#push').onclick = function() {
    if (document.querySelector('.num-1').value == 5 &&
        document.querySelector('.num-2').value == 7 &&
        document.querySelector('.num-3').value == 2 &&
        document.querySelector('.num-4').value == 4 &&
        document.querySelector('.num-5').value == 4 &&
        document.querySelector('.num-6').value == 5 &&
        document.querySelector('.num-7').value == 2 &&
        document.querySelector('.num-8').value == 1 &&
        document.querySelector('.num-9').value == 4 &&
        document.querySelector('.num-10').value == 8 &&
        document.querySelector('.num-11').value == 5 &&
        document.querySelector('.num-12').value == 1 &&
        document.querySelector('.num-13').value == 8 &&
        document.querySelector('.num-14').value == 3 &&
        document.querySelector('.num-15').value == 5 &&
        document.querySelector('.num-16').value == 4 &&
        document.querySelector('.num-17').value == 9 &&
        document.querySelector('.num-18').value == 6 &&
        document.querySelector('.num-19').value == 6 &&
        document.querySelector('.num-20').value == 1 &&
        document.querySelector('.num-21').value == 3 &&
        document.querySelector('.num-22').value == 5 &&
        document.querySelector('.num-23').value == 3 &&
        document.querySelector('.num-24').value == 2 &&
        document.querySelector('.num-25').value == 4 &&
        document.querySelector('.num-26').value == 9 &&
        document.querySelector('.num-27').value == 1 &&
        document.querySelector('.num-28').value == 8 &&
        document.querySelector('.num-29').value == 7 &&
        document.querySelector('.num-30').value == 1 &&
        document.querySelector('.num-31').value == 8 &&
        document.querySelector('.num-32').value == 6 &&
        document.querySelector('.num-33').value == 4 &&
        document.querySelector('.num-34').value == 3 &&
        document.querySelector('.num-35').value == 2 &&
        document.querySelector('.num-36').value == 1 &&
        document.querySelector('.num-37').value == 5 &&
        document.querySelector('.num-38').value == 4 &&
        document.querySelector('.num-39').value == 9 &&
        document.querySelector('.num-40').value == 8 &&
        document.querySelector('.num-41').value == 5 &&
        document.querySelector('.num-42').value == 8 &&
        document.querySelector('.num-43').value == 3 &&
        document.querySelector('.num-44').value == 9 &&
        document.querySelector('.num-45').value == 7 &&
        document.querySelector('.num-46').value == 6 &&
        document.querySelector('.num-47').value == 2
    ) {
        document.querySelector('#out').innerHTML = '<br>' + '<center><h5><b>Вы победили!</b></h5></center>';
    } else {
        document.querySelector('#out').innerHTML = '<br>' + '<center><h5><b>Вы где-то ошиблись! Проверьте ещё раз!</b></h5></center>';
    };
};