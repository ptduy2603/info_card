const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// get need element 
const modalFormEl = $('.form-modal');
const formElement = $('.form__content');
const btnCloseForm = $('.form__btn-close');
const btnContactEl = $('.btn-contact');
const formInputNameEl = $('#from__input-name');
const formInputEmailEl = $('#form__input-email');
const formMessageEl = $('#form__massage');
const btnSendFormEl = $('.form__btn-send');
const formInputs = $$('.form__input')

// declare functions
const handleRefreshForm = () => {
    formInputs.forEach((input, index) => {
        if(index === 0)
            input.focus();

        input.value = ""
        input.classList.remove('invalid')
    })
}

const handleValidateForm = () => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(!formInputNameEl.value.trim())
    {
        formInputNameEl.classList.add('invalid');
        formInputNameEl.value = "";
        formInputNameEl.focus();
        return false;
    }

    if(!formInputEmailEl.value.trim() || !emailPattern.test(formInputEmailEl.value.trim()))
    {
        formInputEmailEl.classList.add('invalid');
        formInputEmailEl.focus();
       return false;
    }

    if(!formMessageEl.value.trim())
    {
        formMessageEl.classList.add('invalid');
        formMessageEl.focus();
        return false
    }

    return true;

}

//events
window.onload = () => {
    handleRefreshForm();
}

btnContactEl.onclick = (event) => {
    modalFormEl.classList.add('active')
}

btnCloseForm.onclick = (event) => {
    handleRefreshForm();
    modalFormEl.classList.remove('active')
}

formInputs.forEach((input) => {
    input.oninput = (e) => {
        e.target.classList.remove('invalid')
    }
})

btnSendFormEl.onclick = (event)  => {
    if(handleValidateForm())
    {
        window.alert("Your message was sent successfully!")
        event.target.submit();
        handleRefreshForm();
    }    
}
