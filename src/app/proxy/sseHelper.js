import {EventSourcePolyfill} from 'event-source-polyfill';

export default {
  getEventStream: function (onMessage, accessToken, url) {
    /*let es = new EventSourcePolyfill(url, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });*/
    console.log("Will try to connect to " + url);
    let es = new EventSource(url);

    let onOpen = function (event) {
      console.log("event " + event);
      console.log("event " + event.type);
    };
    let onError = function (event) {
      console.log("event " + event);
      console.log("event " + event.type);
      console.log("event.target " + event.target);
      console.log("event.target.readyState " + event.target.readyState);
      switch (event.target.readyState) {

        case EventSource.CONNECTING:
          console.log('Reconnecting...');
          break;

        case EventSource.CLOSED:
          console.log('Connection failed, will not reconnect');
          break;
      }
    };

    es.addEventListener("open", onOpen);
    es.addEventListener("message", onMessage);
    es.addEventListener("error", onError, false);
  }
}
