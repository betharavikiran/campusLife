/**
 * Created by betha on 5/18/2016.
 */
this.ProfileController = RouteController.extend({
    template: "profile",

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

Template.profile.helpers({
    profile:function () {
        return profiles.findOne({"user_id":Meteor.userId()});
    },

    isAdding:function(){
        return Session.get("isAddingEducation");
    },

    educations:function(){
       var profile = profiles.findOne({"user_id":Meteor.userId()});
       return profile.educations;
    },

});

/*******************OnCreated*******************/
Template.profile.onCreated(function() {
    var self = this;
    Session.set("isAddingEducation",false);
    Session.set("coursesByLevel",4);

    this.autorun(function() {
        var subscriptionProfile = self.subscribe('profileByUserID',Meteor.userId());
    });
});


Template.profile.onRendered(function() {
    var self = this;
    var profile = profiles.findOne({"user_id":Meteor.userId()})
 });


Template.profile.events({
        'click #add-education' : function (event) {
            event.preventDefault();



            var profile = profiles.findOne({"user_id":Meteor.userId()});
            if(profile){
                if(profile.educations){
                    var course_level = 0;
                    profile.educations.forEach(function(education) {

                            if(education.course_level > course_level){
                                course_level =education.course_level;
                            }
                    })

                    Session.set("coursesByLevel",course_level+1);
                }
            }

            Session.set("isAddingEducation",true);
        },
    }
);