const buttonModal = document.querySelector('.add-board');

const generateEditboard = () => {
    const board = document.createElement('div');
    board.classList.add('board-modal');
    board.innerHTML = `
        <input type="text" class="input" id="title" placeholder="Title">
        <textarea class="input" id="description" placeholder="Description"></textarea>
        <div class="close" id="closeModal">Close</div>
        `;
    return board;
};

const generateBoard = (title, description) => {
    const board = document.createElement('div');
    board.classList.add('board-modal');
    board.innerHTML = `
        <div class="title">${title}</div>
        <div class="description">${description}</div>
        <div class="close" id="closeModal">Close</div>
        `;
    return board;
};

const addboard = (modal) => {
    const title = modal.querySelector('.title');
    const description = modal.querySelector('.description');
    console.log(title, description);
};


const closeModal = (modal) => {
    const close = document.getElementById('closeModal');
    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
};


buttonModal.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';
    modal.insertBefore(generateEditboard(), modal.firstChild);
    // modal.appendChild(generateboard());
    closeModal(modal);

});




// create a dummy object
const example = [
    {
        title: 'Example 1',
        description: 'This is a example',
    },
    {
        title: 'Example 2',
        description: 'This is a example',
    },];

// store it in local storage
localStorage.setItem('example', JSON.stringify(example));

// retrieve it from local storage
const exampleLocalStorage = JSON.parse(localStorage.getItem('example'));
console.log(exampleLocalStorage);
