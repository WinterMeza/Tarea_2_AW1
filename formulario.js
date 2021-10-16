var inputs = document.getElementsByClassName('input');
for (var winter = 0; winter< inputs.length; winter++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        } else{
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}