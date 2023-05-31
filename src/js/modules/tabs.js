// const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    
    
//     const header = document.querySelector(headerSelector); //Родитель кнопок
//     const tab = document.querySelectorAll(tabSelector); //Все табы
//     const content = document.querySelectorAll(contentSelector); //Весь контент

//     const hideTabContent = () => {
//         content.forEach(item => {
//             item.style.display = 'none';

//         });

//         tab.forEach(item => {
//             item.classList.remove(activeClass)
//         });
//     };

//     const showTabContent = (i = 0) => {
//         content[i].style.display = 'block';
//         tab[i].classList.add(activeClass);
//     };

//     hideTabContent();
//     showTabContent();


//     header.addEventListener('click', (e) => {
//         const target = e.target;
        
//         if(target && 
//             (target.classList.contains(tabSelector.replace(/\./, '')) || 
//         target.parentElement.classList.contains(tabSelector.replace(/\./, ''))) ){
//             tab.forEach((item, i) => {
//                 if(item === target || target.parentElement == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     })
// }
// export default tabs;
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block')  => {
    const parent = document.querySelector(headerSelector);
    const tabsElements = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);


    const hideTabContent = () => {
        content.forEach(item => {
            item.style.display = 'none';

        });

        tabsElements.forEach(item => {
            item.classList.remove(activeClass);
        });
    };

    const showTabContent = (i = 0) => {
        content[i].style.display = display;
        tabsElements[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    parent.addEventListener('click', (e) => {
        const target = e.target;

        if(target && (target.classList.contains(tabSelector.slice(1)) || target.parentElement.classList.contains(tabSelector.slice(1)))) {
            tabsElements.forEach((item, i) => {
                if(item === target || target.parentElement === item ) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}



export default tabs;

