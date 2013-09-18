var mainModule = angular.module('MainModule', []);

mainModule.filter('quietFilter', function() {
  var quietFilter = function(input) {
    var words = input.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase()
    }
    return words.join(' ');
  };
  return quietFilter;
});

function MainController($scope) {
  $scope.pageHeading = 'I AM A LOUD TWEENAGER';
}
