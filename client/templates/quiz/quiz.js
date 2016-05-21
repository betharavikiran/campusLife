/**
 * Created by betha on 5/20/2016.
 */

this.QuizController = RouteController.extend({
    template: "quiz",

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
Template.quiz.onCreated(function() {
    var self = this;
    this.autorun(function() {
        var subscriptionEvents = self.subscribe('quizs');
    })
});

Template.quiz.helpers({
    quiz:function () {
        return quizs.find().fetch();
    },
});

Template.quiz.events({
        'click #quiz-option1' : function (event) {
            event.preventDefault();
            alert(event.valueOf().toString());
        },
    }
);