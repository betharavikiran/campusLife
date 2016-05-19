/**
 * Created by betha on 5/17/2016.
 */

Router.configure({
    notFoundTemplate: "notFound",
    loadingTemplate: "loading"
});


Router.map(function () {
    this.route("login", {path: "/", controller: "LoginController",action : function(){
        var currentUser = Meteor.userId();

        if(!currentUser){
            this.render();
        }else{
            Router.go('home');
        }
    } });

    this.route("home", {path: "/home", controller: "HomeController",action : function(){

        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }

    } });

    this.route("search", {path: "/search", controller: "SearchController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("accomodations", {path: "/accomodations", controller: "AccomodationsController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("foodPlaces", {path: "/foodPlaces", controller: "FoodPlacesController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("institutions", {path: "/institutions", controller: "InstitutionsController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });


    this.route("accomodation", {path: "/accomodation", controller: "AccomodationController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("foodPlace", {path: "/foodPlace", controller: "FoodPlaceController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("institution", {path: "/institution", controller: "InstitutionController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("profile", {path: "/profile", controller: "ProfileController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("preferences", {path: "/preferences", controller: "PreferencesController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("logout", {path: "/logout", controller: "LogoutController"});

});
