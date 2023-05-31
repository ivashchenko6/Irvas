import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm =  document.querySelectorAll('.balcon_icons_img'); // Форма !
    const windowWidth = document.querySelectorAll('#width'); //Длина окна !
    const windowHeight = document.querySelectorAll('#height'); //Высота окна !
    const windowType = document.querySelectorAll('#view_type'); //Тип окна
    const windowProfile = document.querySelectorAll('.checkbox'); //label


    checkNumInputs('#width');
    checkNumInputs('#height');

    



    function bindActionToElems(event, elem, prop) {

        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {

                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ?  state[prop] = "Холодное" : state[prop] = 'Тёплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if(i === j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }   
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
            });
        });

        
    }

    bindActionToElems('click', windowForm, 'form');
    

    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');

    bindActionToElems('change', windowType, 'type');

    bindActionToElems('change', windowProfile, 'profile');

};


export default changeModalState;