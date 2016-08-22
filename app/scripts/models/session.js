import $ from "jquery";
import {getExistingMessages} from '../views/chat.js';

function setUsername() {
  $(".login").submit(function(event) {
    var username = $(".username").val();
    localStorage.setItem('username', username);
    getExistingMessages();
    window.setInterval(getExistingMessages, 10000);
    event.preventDefault();
  })
}

export {setUsername};
