window.onload = () => {

    let result = document.getElementById('titleForResult');
    result.style.display = "none";
    
    function gcdFinder(x, y, e) {
        event.preventDefault(e)

        x = document.getElementById('firstNumber').value;
        y = document.getElementById('secNumber').value;

        if ((isNaN(x)) || (isNaN(y))) {
            window.alert("Not a number!!!!! You need to put integers only!!");
            return false
        }
    
        while(y) {
            var t = y;
            y = x % y;
            x = t;
        }

        console.log(x); 

        let resultOfGcd = document.getElementById('resultOfGcd'); 
        result.style.display = "flex";
        resultOfGcd.innerText = " " + x;
    }


    let form = document.getElementById('formToSent');
    form.addEventListener('submit', gcdFinder);
}
