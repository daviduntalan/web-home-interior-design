document.addEventListener('DOMContentLoaded', (event) => {
    let stars = document.querySelectorAll('.star-rating .star');

    stars.forEach(star => {
        star.addEventListener('click', setRating);
    });

    function setRating(ev) {
        let span = ev.currentTarget;
        let stars = ev.currentTarget.parentElement.children;
        let match = false;
        let num = 0;

        for (let i = 0; i < stars.length; i++) {
            if (match) {
                stars[i].classList.remove('checked');
            } else {
                stars[i].classList.add('checked');
            }

            if (stars[i] === span) {
                match = true;
                num = i + 1;
            }
        }

        ev.currentTarget.parentElement.setAttribute('data-rating', num);
    }
});


/**************************************************************************************************************************************
 
1.  DOMContentLoaded Event Listener:

    document.addEventListener('DOMContentLoaded', (event) => {
            
    This line sets up an event listener that listens for the DOMContentLoaded event. This event is fired when the initial HTML document 
    has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. The provided 
    callback function will be executed when this event occurs.

2.  Querying the Star Elements:

    let stars = document.querySelectorAll('.star-rating .star');

    This line selects all elements with the class star that are inside an element with the class star-rating. 
    It uses document.querySelectorAll to return a NodeList of these elements, and assigns this NodeList to the stars variable.

3.  Adding Click Event Listeners to Stars:

    stars.forEach(star => {
        star.addEventListener('click', setRating);
    });

    This code loops through each element in the stars NodeList and adds a click event listener to each one. 
    When a star is clicked, the setRating function will be called.

4.  setRating Function Definition:

    function setRating(ev) {
        let span = ev.currentTarget;
        let stars = ev.currentTarget.parentElement.children;
        let match = false;
        let num = 0;

    The setRating function is defined to handle the click event on a star. The ev parameter is the event object passed to 
    the function when an event is triggered.

    - let span = ev.currentTarget; --> This line gets the clicked element (span) from the event's currentTarget property.
    - let stars = ev.currentTarget.parentElement.children; --> This line gets all the sibling elements (stars) of the clicked element.
    - let match = false; --> This variable is used to track whether the current star has been matched with the clicked star.
    - let num = 0; --> This variable will store the rating value (number of stars).

5.  Iterating Over Stars to Set Rating:

    for (let i = 0; i < stars.length; i++) {
        if (match) {
            stars[i].classList.remove('checked');
        } else {
            stars[i].classList.add('checked');
        }

        if (stars[i] === span) {
            match = true;
            num = i + 1;
        }
    }

    This loop iterates over each star element.

    - If the match variable is true, it removes the checked class from the current star element, indicating that this star and 
      any stars after it should not be marked as selected.

    - If match is false, it adds the checked class to the current star element, indicating that this star and 
      any stars before it should be marked as selected.

    - If the current star element is the clicked element (span), it sets match to true and updates the num variable to 
      the current star's index plus one (to convert zero-based index to one-based rating).

6.  Setting the Data-Rating Attribute:

    ev.currentTarget.parentElement.setAttribute('data-rating', num);

    This line sets a custom attribute data-rating on the parent element of the clicked star. The value of this attribute is 
    the rating number (num), representing how many stars are selected.

7.  Closing the Event Listener:

    });

**************************************************************************************************************************************/