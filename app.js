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


