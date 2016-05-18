/**
 * Created by betha on 5/17/2016.
 */

Router.configure({
    notFoundTemplate: "notFound",
    loadingTemplate: "loading"
});


Router.map(function () {
    this.route("login", {path: "/", controller: "LoginController",action : function(){
        var currentUser = Session.get('current_user');
        if(!currentUser){
            this.render();
        }else{
            Router.go('aroundMe');
        }
    } });

    this.route("aroundMe", {path: "/aroundMe", controller: "AroundMeController",action : function(){
         this.render();
    } });

    this.route("accomodations", {path: "/accomodations", controller: "AccomodationsController",action : function(){
        this.render();
    } });

    this.route("foodPlaces", {path: "/foodPlaces", controller: "FoodPlacesController",action : function(){
        this.render();
    } });

    this.route("institutions", {path: "/institutions", controller: "InstitutionsController",action : function(){
        this.render();
    } });


    this.route("accomodation", {path: "/accomodation", controller: "AccomodationController",action : function(){
        this.render();
    } });

    this.route("foodPlace", {path: "/foodPlace", controller: "FoodPlaceController",action : function(){
        this.render();
    } });

    this.route("institution", {path: "/institution", controller: "InstitutionController",action : function(){
        this.render();
    } });

    this.route("logout", {path: "/logout", controller: "LogoutController"});

});
