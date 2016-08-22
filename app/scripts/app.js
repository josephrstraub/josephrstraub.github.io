import $ from "jquery";
import {Message} from './models/message.js';
import {getExistingMessages} from './views/chat.js';
import {formSubmitEvent, messageDeleteEvent} from './views/message.js';
import {setUsername} from './models/session.js';
import {renderLoginView} from './views/login.js';

'use strict';

$(document).ready(function() {
  renderLoginView();
  setUsername();
  formSubmitEvent();
  messageDeleteEvent();
})
