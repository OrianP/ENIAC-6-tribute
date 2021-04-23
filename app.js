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

// Pop up infos
// Declare variable for buttons associated with pop up. Assign unique ID to each person? 
const overlay = document.getElementById('overlay')
const eniacButton = document.querySelector('.eniac-button');
const eniacModal = document.querySelector('#eniac-modal');
// Declare a function that displays the pop up info
const openModal = () => {
    // this selects all elements with a class of modal 
    //how do we make it open only the one we want?
    const modal = document.querySelectorAll('.modal');
    modal.classList.add('active');
    overlay.classList.add('active');
}
// Add event listener for 'click' events that call the above function

// how to hide from screen readers - visibility: hidden hides from screen readers!!! 
// use button element as opposed to anchor tag for semantics sake
