(function () {
  "use strict";

  angular
    .module('event', ["ui.router", "mnPluggableUiRegistry"])
    .config(function($stateProvider, mnPluggableUiRegistryProvider) {
      $stateProvider
      .state('app.admin.event', {
        url: '/event',
        templateUrl: '/_p/ui/event/index.start.html'
      })
      mnPluggableUiRegistryProvider.registerConfig({
        name: 'Eventing',
        state: 'app.admin.event',
        plugIn: 'adminTab',
        after: 'indexes',
      });
    })
  angular.module('mnAdmin').requires.push('event');
}());
