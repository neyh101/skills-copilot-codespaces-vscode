function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'components/member/skillsMember.html',
    controller: function() {
      this.skills = [
        {
          name: 'HTML',
          level: 5
        },
        {
          name: 'CSS',
          level: 4
        },
        {
          name: 'JavaScript',
          level: 3
        }
      ];
    },
    controllerAs: 'skills'
  };
}