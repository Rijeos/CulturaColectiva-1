/**
 * ViewLastVersionPost model events
 */

'use strict';

import {EventEmitter} from 'events';
var ViewLastVersionPost = require('../../sqldb').ViewLastVersionPost;
var ViewLastVersionPostEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ViewLastVersionPostEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  ViewLastVersionPost.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    ViewLastVersionPostEvents.emit(event + ':' + doc._id, doc);
    ViewLastVersionPostEvents.emit(event, doc);
    done(null);
  }
}

export default ViewLastVersionPostEvents;
