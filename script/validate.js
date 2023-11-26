
(function(){
    /*Garantir um script válido*/
    'use strict';

    /*Para todos os formulários que tiverem a clase .needs-validation*/
    let forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function(form){
        form.addEventListener('submit', function(event){
            if(!form.checkValidity()){
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})
/*Chamada da função*/
()