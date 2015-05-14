define([
  'marionette',
  '#book/views/book'
],

function (Marionette, BookView) {
  'use strict';

  return Marionette.CollectionView.extend({
    className: 'books-list small-block-grid-1 medium-block-grid-3 large-block-grid-4',
    tagName: 'ul',
    childView: BookView
  });
});
