const $ = require('jquery');

export default {
  get: function (accessToken, url) {
    return new Promise(function (success, error) {
      $.ajax({
        headers: {
          Authorization: 'Bearer ' + accessToken
        },
        url: url,
        dataType: "json",
        success: success,
        error: error
      })
    })
  },
  post: function (accessToken, url, data) {
    return new Promise(function (success, error) {
      $.ajax({
        headers: {
          Authorization: 'Bearer ' + accessToken
        },
        url: url,
        contentType: "application/json",
        type: "POST",
        data: JSON.stringify(data),
        success: success,
        error: function (jqXHR, textStatus, errorThrown) {
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
  put: function (accessToken, url, data) {
    return new Promise(function (success, error) {
      $.ajax({
        headers: {
          Authorization: 'Bearer ' + accessToken
        },
        url: url,
        contentType: "application/json",
        type: "PUT",
        data: JSON.stringify(data),
        success: success,
        error: function (jqXHR, textStatus, errorThrown) {
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
  patch: function (accessToken, url, data) {
    return new Promise(function (success, error) {
      $.ajax({
        headers: {
          Authorization: 'Bearer ' + accessToken
        },
        url: url,
        type: "PATCH",
        data: data,
        success: success,
        error: error
      })
    })
  },
  delete: function (accessToken, url) {
    return new Promise(function (success, error) {
      $.ajax({
        headers: {
          Authorization: 'Bearer ' + accessToken
        },
        url: url,
        type: "DELETE",
        success: success,
        error: function (jqXHR, textStatus, errorThrown) {
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
