import {ajax} from './ajax.js';
import {renderChatView} from '../views/chat.js';

function Message(message) {
  this.timestamp = message.attributes["created-at"];
  this.sender = message.attributes.username;
  this.body = message.attributes.text;
  this.id = message.id;
}

//I don't use either of these functions. I don't know how to implement them.
//Seems like an unnecessary middleman.
Message.prototype.save = function() {
  ajax.create(this, function(response) {
    renderChatPost(response.data);
  })
}

Message.prototype.delete = function() {
  ajax.destroy(this.id);
}

export {Message};
