$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $(".add").on('click', function() {
      var input = $("input[type='text']").val();
      $(".todo_list").append(buildTodo(input));  
    }); 
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
  }

  $('.todo_list').on('click', function(e){
    if ($(e.target).is('.delete')) {
      $(e.target).parents('.todo').remove();
    }

    if ($(e.target).is('.complete')) {
      $(e.target).parents('.todo').addClass('complete');
    }
  })

  //Create functions to add, remove and complete todos

  

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});
