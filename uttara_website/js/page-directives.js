(function(){
    var app = angular.module("page-directives", []);

    app.directive("headerPanel", function(){
        return {
            templateUrl: 'header.html'
        }
    });

    app.directive("footerPanel", function(){
        return {
            templateUrl: 'footer.html'
        }
    });

    app.directive("contentPanel", function(){
        return {
            templateUrl: 'home.html'
        }
    });
})();