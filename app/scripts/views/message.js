import $ from "jquery";
import {ajax} from '../models/ajax.js';
import {getExistingMessages} from './chat.js';

function addNewMessage(message) {
  ajax.create(message, getExistingMessages);
}

function formSubmitEvent() {
  $(".message").submit(function(event) {
    var text = $("textarea").val();
    var username = localStorage.getItem('username');
    addNewMessage({username, text});
    $("textarea").val("");
    event.preventDefault();
  })
}

function messageDeleteEvent() {
  $("ul").on("click", "li button", function() {
    var idOfMessageToDelete = $(this).parent().attr("data-id");
    var userWhoCreatedMessage = $(this).parent().attr("data-username");
    // var messageToDelete = messages.filter(message => message.id === idOfMessageToDelete)[0];
    // console.log(messageToDelete);
    // messageToDelete.delete();
    if (userWhoCreatedMessage === localStorage.getItem('username')) {
      ajax.destroy(idOfMessageToDelete);
    }
  })
}

export {formSubmitEvent, messageDeleteEvent};
