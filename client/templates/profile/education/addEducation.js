/**
 * Created by betha on 5/23/2016.
 */
this.AddEducationController = RouteController.extend({
    template: "addEducation",

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

Template.addEducation.helpers({
    profile:function () {
        return profiles.findOne({"user_id":Meteor.userId()});
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


/*******************OnCreated*******************/
Template.addEducation.onCreated(function() {
    Session.set("filterByCourse", "");
    Session.set("institutionsByCourse", "");
    
    var self = this;

    alert(Session.get("coursesByLevel"));
    // Lets start from Secondary education
    var course = "";

    this.autorun(function() {
        var subscriptionProfile = self.subscribe('profileByUserID',Meteor.userId());
        var subscriptionCourses = self.subscribe('coursesByLevel',Session.get("coursesByLevel"));
        course = Session.get("institutionsByCourse");
        if(course.length >0){
            var subscriptionInstitutions = self.subscribe('institutionsByCourse',course);
        }
    });
});

Template.addEducation.onRendered(function(){

});

Template.addEducation.events({'click #add-education' : function (event) {
            event.preventDefault();
            Session.set("filterByCourse", event.target.value);
        },

        'change #course' : function (event) {
            if(typeof event.target.value === "undefined" || event.target.value===''){
            }
            else{
                Session.set("institutionsByCourse",  event.target.value);
            }
        },

        'click #cancel':function(){
            Session.set("isAddingEducation",false);
        },

        'click #processing':function(){
            var education = {
                user_id: Meteor.userId(),
                course: $('#course').val(),
                course_level: Session.get("coursesByLevel"),
                institution: $('#institution').val(),
                course_start:  $('#course_start').val(),
                course_end:$('#course_end').val(),
                status: $('#status').val()
            };

            Meteor.call('updateEducation', {education: education}, function(error, response) {
                if(error) {
                    Session.set('serverDataResponse', "Error:" + error.reason);
                }
                else {
                    console.log(response);
                    if (response.indexOf("status") > -1) {
                        Session.set("isAddingEducation",false);

                        var result = JSON.parse(response);

                        if (result.status === "Success") {
                            $('#processing').removeClass('processing');
                            alert(result.Message);
                        }
                        else if (result.status === "Fail") {
                            $('#processing').removeClass('processing');
                            alert(result.Message);
                        }
                        else if (result.status === "Error") {
                            $('#processing').removeClass('processing');
                            alert(result.Message);
                        }
                    }
                }
            });
        },
});
