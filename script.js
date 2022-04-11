

document.querySelectorAll('.accordion_question').forEach(item => {
    item.addEventListener('click', event => {

        if(!item.classList.contains('open')) {
            item.nextElementSibling.classList = 'accordion_collapse collapsing';

            setTimeout(() => {
                console.log('otvoreno');
                item.nextElementSibling.classList = 'accordion_collapse open';
            }, 300);
        } else {
            item.nextElementSibling.classList = 'accordion_collapse collapsing';

            setTimeout(() => {
                console.log('zatvoreno');
                item.nextElementSibling.classList = 'accordion_collapse collapse';
            }, 300);
        }








        item.classList.toggle('open');
    })
})
