/* MODALS */

// Declare variables for overlay and all open and close buttons returning an iterable Nodelist 
// Using the data attribute as selector inside querySelectorAll 
const overlay = document.getElementById('overlay')
const openModalButtons = document.querySelectorAll('[aria-controls]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const modals = document.querySelectorAll('.modal');

// Add event listener for each button
// 'click' events create a variable targeting the specific modal based on data target attribute
// call the openModal function

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
    const specificModal = document.querySelector(button.getAttribute('aria-controls'));
    openModal(specificModal);
});
});

/* code not working 
const closeButton = document.querySelector('.close-button');

modals.forEach(modal => {
    window.addEventListener('keydown', (event) => {
        if (event.key === "Tab") {
        console.log(event);
        closeButton.focus();
        }
    });
});*/

// Add event listener to overlay to close the active modal when overlay is clicked 
// Do I need the forEach since no two modals will be open at once? 
overlay.addEventListener('click', () => {
    const activeModal = document.querySelectorAll('.modal.active');
    activeModal.forEach(activeModal => {
        closeModal(activeModal);    
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parentModal = button.closest('.modal');
        closeModal (parentModal);
    });
});

// Declare functions that open and close the modal
const openModal = (modal) => {
    modal.classList.add('active');
    overlay.classList.add('active');
};

const closeModal = (modal) => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
};

// research aria to replace data-target
// use button element as opposed to anchor tag for semantics sake

/* COMMENTS */

// Declare form variable
const form = document.querySelector('#form');

// Listen for form submission
// Prevent default form button behavior
    form.addEventListener('submit', function(e) {
        e.preventDefault();
// Declare variables for the comment and name inputs
    const comment = form.elements.comment;
    const name = form.elements.name;
// Pass the input values to the newPost function
    newPost(comment.value, name.value);
// Clear inputs after comment has been posted
    comment.value = '';
    name.value = '';
});

// Function for creating new posts
    const newPost = (comment, name) => {
// Declare variable for ul
        const posts = document.querySelector('#posts');
// Create new li element and assign it to a variable
        const newComment = document.createElement('li');
// Update the text of newComment to equal the parameters passed
        newComment.textContent = `${comment} - ${name}`;
// Append the new li to the ul 
        posts.appendChild(newComment);    
    }