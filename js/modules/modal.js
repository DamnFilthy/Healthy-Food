function closeModal(modalSelector) {
    const modalDiv = document.querySelector(modalSelector);

    modalDiv.style.display = 'none';
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
    const modalDiv = document.querySelector(modalSelector);

    document.body.style.overflow = 'hidden';
    modalDiv.style.display = 'block';

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }

}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modalDiv = document.querySelector(modalSelector);
        // modalClose = document.querySelector('[data-close]'),




        modalTrigger.forEach((elem) => {
            elem.addEventListener('click', () => openModal(modalSelector, modalTimerId));
        })

    // modalClose.addEventListener('click', closeModal);

    modalDiv.addEventListener('click', (e) => {
        if (e.target === modalDiv || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal(modalSelector);
        }
    })

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}
export default modal;
export {
    closeModal
};
export {
    openModal
};