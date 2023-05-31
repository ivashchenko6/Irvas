"use strict";

import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    

    checkNumInputs('input[name="user_phone"]')
    

    const message = {
        loading: 'Загрузка...',
        success: 'Успешно!',
        error: 'Что-то пошло не так :('
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        
        return await res.text();

    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            let formData = new FormData(item);
            if(item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }


            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success
                })
                .catch(err => {
                    console.log(err);
                    statusMessage.textContent = message.error
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(function() {
                        statusMessage.remove();
                    }, 3000);
                    formData = {};
                    state = {};
                    console.log(`FD`, formData);
                    setTimeout(() => {
                        document.querySelector('.popup_calc_end').style.display = 'none';
                    },2000)
                });

        });
    });

}

export default forms;


