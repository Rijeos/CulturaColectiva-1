/**
 * VersionPost model events
 */

'use strict';

import {EventEmitter} from 'events';
var VersionPost = require('../../sqldb').VersionPost;
var VersionPostEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
VersionPostEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  VersionPost.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    VersionPostEvents.emit(event + ':' + doc._id, doc);
    VersionPostEvents.emit(event, doc);
    done(null);
  }
}

export default VersionPostEvents;
