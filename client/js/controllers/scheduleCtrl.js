angular.module('fanFlight')
  .controller('scheduleCtrl', function($scope, scheduleService){

    scheduleService.getSchedule().then(
      function(schedule) {
        $scope.schedule = schedule;
      });
  });
