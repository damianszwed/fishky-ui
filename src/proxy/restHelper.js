// import jquery from 'jquery'
const $ = require('jquery');

export default {
  get: function (url) {
    return new Promise(function (success, error) {
      $.ajax({
        url: url,
        dataType: "json",
        success: success,
        error: error
      })
    })
  },
  post: function (url, data) {
    return new Promise(function (success, error) {
      $.ajax({
        url: url,
        contentType: "application/json",
        type: "POST",
        data: JSON.stringify(data),
        success: success,
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('jqXHR:');
          console.log(jqXHR);
          console.log('textStatus:');
          console.log(textStatus);
          console.log('errorThrown:');
          console.log(errorThrown);
        }
      })
    })
  },
  patch: function (url, data) {
    return new Promise(function (success, error) {
      $.ajax({
        url: url,
        type: "PATCH",
        data: data,
        success: success,
        error: error
      })
    })
  },
  delete: function (url) {
    return new Promise(function (success, error) {
      $.ajax({
        url: url,
        type: "DELETE",
        success: success,
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('jqXHR:');
          console.log(jqXHR);
          console.log('textStatus:');
          console.log(textStatus);
          console.log('errorThrown:');
          console.log(errorThrown);
        }
      })
    })
  }
}
