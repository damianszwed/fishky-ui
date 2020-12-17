import {EventSourcePolyfill} from 'event-source-polyfill';

export default {
  getEventStream: function (onMessage, accessToken, url) {
    console.log("Will try to connect to " + url);
    let es = new EventSourcePolyfill(url, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });

    let onOpen = function (event) {
      console.log("EventSource has been opened. Event type is: " + event.type + ".");
    };
    let onError = function (event) {
      console.log("On error event received: " + event.type + "!");
      switch (event.target.readyState) {
        case EventSource.CONNECTING:
          console.log('Ready state is CONNECTING.');
          break;

        case EventSource.CLOSED:
          console.log('Ready state is CLOSED. Will not reconnect. Now rely on the backup polling.');
          break;

        default:
          console.log("State is: " + event.target.readyState + ".");
          break;
      }
    };

    es.addEventListener("open", onOpen);
    es.addEventListener("message", onMessage);
    es.addEventListener("error", onError, false);
  }
}
