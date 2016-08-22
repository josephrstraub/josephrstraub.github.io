import {Message} from './message.js';

var ajax = {
  baseUrl: 'http://fathomless-woodland-51903.herokuapp.com/messages',
  headers: {
    'Authorization': 'Token token=supadupasecret'
  },
  getJSON: function (callback) {
    $.getJSON({
      url: this.baseUrl,
      headers: this.headers,
      success: function (response) {
        response.data.forEach(message => {
          new Message(message);
        })
        callback(response.data)
      }
    })
  },
  create: function (value, callback) {
    $.post({
      url: this.baseUrl,
      headers: this.headers,
      data: {message: value},
      success: function () {
        callback()
      }
    })
  },
  destroy: function (postId) {
    $.ajax({
      type: "DELETE",
      url: `${this.baseUrl}/${postId}`,
      headers: this.headers
    });
  }
};

export {ajax};
