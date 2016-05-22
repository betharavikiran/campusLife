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
            if(this.option1 == this.answer){
               /* quizs.update({_id: this.id},
                    {$push: {schema: {participants: "text", size: 7, name: name, label: "First Name2"}}})*/
            }
            else{
                alert("Wrong ");
            }
        },
        'click #quiz-option2' : function (event) {
            event.preventDefault();
            if(this.option2 == this.answer){
                alert("Correct ");
            }
            else{
                alert("Wrong ");
            }
        },
        'click #quiz-option3' : function (event) {
            event.preventDefault();
            if(this.option3 == this.answer){
                alert("Correct ");
            }
            else{
                alert("Wrong ");
            }
        },
        'click #quiz-option4' : function (event) {
            event.preventDefault();
            if(this.option4 == this.answer){
                alert("Correct ");
            }
            else{
                alert("Wrong ");
            }
        },
    }
);