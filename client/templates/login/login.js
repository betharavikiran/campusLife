this.LoginController = RouteController.extend({
    template: "Login",

    yieldTemplates: {
        /*YIELD_TEMPLATES*/
    },

    onBeforeAction: function() {
        this.next();
    },

    action: function() {

        this.render();
    },

    subscriptionSetup: function() {
        var subs = [];
        var ready = true;
        _.each(subs, function(sub) {
            if(!sub.ready())
                ready = false;
        });
        return ready;
    },

    data: function() {
        return {
            params: this.params || {}
        };
        /*DATA_FUNCTION*/
    },

    onAfterAction: function() {

    }
});

Template.Login.events({
    'click #facebook-login':function(event){
        Meteor.loginWithFacebook({},function(err){
           if(err){
               throw new Meteor.Error("Facebook login failed");
           } 
           else{
              Router.go('home');    
           }
        });
    } 
});

Template.Login.rendered = function(){
    $('body').addClass('showmap');
}
