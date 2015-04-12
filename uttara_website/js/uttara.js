(function(){
    var app = angular.module("uttara", ['page-directives']);

    app.controller("MainController", function(){
        this.tab = 'home';

        this.setTab = function(selectedTab){
            this.tab = selectedTab;
        };

        this.isTabSelected = function(tab){
            return this.tab === tab;
        };

    });
})();