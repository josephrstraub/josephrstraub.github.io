import $ from "jquery";
import _ from "lodash";
import moment from "moment";
import {ajax} from '../models/ajax.js';

function getExistingMessages() {
  ajax.getJSON(renderChatView);
}

var renderChatView = function(chatPosts) {
  $(".login").hide();
  $("ul, .message").show();
  chatPosts = _.orderBy(chatPosts, "created-at", "asc");
  var existingChatPosts = chatPosts.map(post =>
    `<li data-id="${post.id}" data-username="${post.attributes.username}">
      <p>${post.attributes.text}</p>
      <h2>${post.attributes.username}</h2>
      <h2>${moment(post.attributes["created-at"]).calendar()}</h2>
      <button>Delete</button>
    </li>`
  )
  .join("\n");
  $(".chatbox").html(existingChatPosts);
};


export {getExistingMessages};
