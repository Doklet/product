'use strict';

angular.module('productApp')
  .service('Client', function() {

    var _sessionId;
    var _doclet;

    this.getSessionId = function() {
      return _sessionId;
    };

    this.setSessionId = function(sessionId) {
      _sessionId = sessionId;
    };

    this.setDoclet = function(doclet) {
      if (doclet !== undefined) {
        _doclet = doclet;
      }
    };

    this.getDoclet = function() {
      return _doclet;
    };

  });
