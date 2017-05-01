/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT

       url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=19c593fbc7e6e191716c96844602d0f9&photoset_id=72157682989569756&user_id=148525640%40N05&format=json&nojsoncallback=1&auth_token=72157680430306982-bc59dc18f177f0e9&api_sig=5f81a4952bf4414613756feeed17b279',
    data: {
        format: 'json',
        method: 'flickr.photosets.getPhotos',
        photoset_ID: '72157682989569756',
        user_ID: '148525640@N05',
      api_key: '750c3a4b0f0103b3a5b0c635adb67c88' // jshint ignore:line
    },



 */

/* global blueimp, $ */

$(function () {
  'use strict'

  // Load demo images from flickr:
  $.ajax({
      url: 'https://api.flickr.com/services/rest/',
    data: {
      format: 'json',
      method: 'flickr.interestingness.getList',
      api_key: '750c3a4b0f0103b3a5b0c635adb67c88' // jshint ignore:line
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
  }).done(function (result) {
    var carouselLinks = []
    var linksContainer = $('#links')
    var baseUrl
    // Add the demo images as links with thumbnails to the page:
    $.each(result.photos.photo, function (index, photo) {
      baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
      photo.server + '/' + photo.id + '_' + photo.secret
      $('<a/>')
        .append($('<img>').prop('src', baseUrl + '_s.jpg'))
        .prop('href', baseUrl + '_b.jpg')
        .prop('title', photo.title)
        .attr('data-gallery', '')
        .appendTo(linksContainer)
      carouselLinks.push({
        href: baseUrl + '_c.jpg',
        title: photo.title
      })
    })
    // Initialize the Gallery as image carousel:
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  }) 
})
