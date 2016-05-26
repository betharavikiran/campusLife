/**
 * Created by betha on 5/23/2016.
 */
this.EditProfileController = RouteController.extend({
    template: "editProfile",

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

Template.editProfile.helpers({
    profile:function () {
        return profile.findOne({"user_id":Meteor.userId()});
    },
});


/*******************OnCreated*******************/
Template.editProfile.onCreated(function() {
    var self = this;

    this.autorun(function() {
        var subscriptionProfile = self.subscribe('profileByUserID',Meteor.userId());
    });
});

Template.editProfile.events({
        'change #filterByCourse' : function (event) {
            event.preventDefault();
            Session.set("filterByCourse", event.target.value);
        },
    }
);