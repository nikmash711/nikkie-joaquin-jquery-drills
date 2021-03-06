'use strict';
/*eslint-env jquery*/
//^js comment that eslint parses

function generateListItem(item) //does this also need to be wrapped in a jquery object?
{
  return `<li>
  <span class="shopping-item">${item}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`


$(function(){
  $('form').submit((event)=>{
    event.preventDefault(); //since we're submitting we need to prevent the default 

    //grab what was inputted
    const newItem = $('form input').val();

    //clear the input box
    event.target.reset();

    //make a list element with the input
    const listElement = generateListItem(newItem);

    //make that list element appear
    $('.shopping-list').append(listElement);

  });
  //add delete functionality
  $('.shopping-list').on('click', '.shopping-item-delete', event =>{
    $(event.target).closest('li').remove();
  });

  //toggle check functionality: 
  $('.shopping-list').on('click', '.shopping-item-toggle', event =>{

    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

  });
});