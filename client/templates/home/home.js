/**
 * Created by betha on 5/18/2016.
 */
this.HomeController = RouteController.extend({
    template: "home",

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

/*******************OnCreated*******************/
Template.home.onCreated(function() {

    var self = this;
    this.autorun(function() {
            var subscriptionProfile = self.subscribe('profileByUserID',Meteor.userId());
    });
});


Template.home.helpers({
    communities:function () {
        return profiles.findOne({"user_id":Meteor.userId()}).communities_subscribed;
    },

    courses:function(){
        return courses.find({});
    },
    institutions:function(){
        alert(institutions.find({}).count());
        return institutions.find({});
    },
    course_display_level:function(){
        return courses.findOne().display_Name;
    }

});
