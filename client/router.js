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

    this.route("institutionList", {path: "/institutionList", controller: "InstitutionListController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("institutionRecord", {path: "/institutionRecord", controller: "InstitutionRecordController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("institutionInfo", {path: "/institutionInfo", controller: "InstitutionInfoController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("eventsCalender", {path: "/eventsCalender", controller: "EventsCalenderController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("interestingFacts", {path: "/interestingFacts", controller: "InterestingFactsController",action : function(){
        var currentUser = Meteor.userId();
        if(currentUser) {
            this.render();
        }else{
            Router.go('login');
        }
    } });

    this.route("quizs", {path: "/quizs", controller: "QuizsController",action : function(){
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
