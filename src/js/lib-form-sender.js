class FormSender {
    constructor({ selector, api }) {
        this.forms = [...document.querySelectorAll(selector)];
        this.api = api;
        this._initForms();
    }

    _initForms() {
        this.forms.forEach((form) => {
            form.addEventListener('submit', (event) => {
                this._submitCallback(event, form);
            });
        });
    }

    _submitCallback(event, form) {
        event.preventDefault();
        const result = this._validateFormData(event.target);
        console.log(result);
        if (result.find((el) => el.type === 'error'))
            return this._errorHandler(result, form);
        return this._submitForm(form);
    }

    _validateFormData(fields) {
        return [...fields].map(this._fieldValidator).filter((el) => el.type !== 'hide');
    }

    _fieldValidator(field) {
        const returnError = (field) => ({ type: 'error', field });
        const returnSuccess = (field, value) => ({ type: 'success', field, value });
        const returnHide = (field) => ({ type: 'hide', field });

        if (field.tagName === 'FIELDSET') {
            return returnHide(field);
        }

        if (field.tagName === 'INPUT') {
            // Проверка почты
            if (field.name === 'email') {
                const testEmail = /^.*@.*\..{2,}$/;
                if (!testEmail.test(field.value)) return returnError(field.name);
                return returnSuccess(field.name, field.value);
            }
            if (field.name === 'lang') return returnHide(field.name, 'lang');

        }
        if (field.tagName === 'BUTTON') {
            // Проверка кнопки
            if (field.type === 'submit') return returnHide(field.type, 'submit');
        }
        return returnError(field);
    }

    _submitForm(form) {
        let data = {}
        let formData = new FormData(form)
        formData.forEach(function(value, key){
            data[key] = value;
        });

        const method = 'post';
        const headers = {
            //'Content-Type': 'multipart/form-data',
            'X-Requested-With': 'XMLHttpRequest',
        };

        this.postData(this.api, data, method, headers)
            .then((data) => {
                console.log(data);
                this._resultForm(data, form)

            });
    }

    async postData(url = '', data = {}, method, headers) {
        return await fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
        });
    }

    _resultForm(data, form) {
        if(data.status === 200 && data.ok === true){
            form.reset();
            //todo trigger complete
        }
        else {
            //todo trigger error
        }
    }

    _errorHandler(result = [], form) {
        const errorsMap = {};
        const fieldsMap = {};
        const errorsBlocks = [...form.querySelectorAll('[data-error]')];

        errorsBlocks.forEach((el) => {
            el.classList.remove('active');
        });

        [...form].forEach((el) => {
            el.classList.remove('field-error');
        });

        result
            .filter((el) => el.type === 'error')
            .forEach((el) => (errorsMap[el.field] = el));
        [...form].forEach((el) => (fieldsMap[el.name] = el));

        let focus = false;
        errorsBlocks.forEach((el, index) => {
            if (errorsMap[el.dataset.error]) {
                if (!focus) {
                    fieldsMap[el.dataset.error].focus();
                    focus = true;
                }
                el.classList.add('active');
                fieldsMap[el.dataset.error].classList.add('field-error');
            }
        });
    }
}

//шаблон для валидации и отправки форм на сайте. максимально простой.
// Для валидации капчи нужно допиливать
document.addEventListener('DOMContentLoaded', () => {
    new FormSender({
        selector: 'form.subscribe-form',
        //api: '/send.php', //обработчик
    });
});
