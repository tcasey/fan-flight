angular.module('fanFlight')
  .service('scheduleService', function($http){

    var baseUrl = 'http://api.sportradar.us/ncaafb-t1/2015/REG/7/schedule.json?api_key=7hvvvfn2evky5t4jyjgpk2gf';

      this.getSchedule = function() {
        return $http({
          method: 'GET',
          url: baseUrl,
        })
        .then(function (response) {
          console.log(response);
          return response.data;
        });
      };
  });
