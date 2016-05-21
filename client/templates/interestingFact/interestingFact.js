/**
 * Created by betha on 5/20/2016.
 */

this.InterestingFactsController = RouteController.extend({
    template: "interestingFact",

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
Template.interestingFact.onCreated(function() {
    var self = this;
    this.autorun(function() {
        var subscriptionEvents = self.subscribe('interestingFacts');
    })
});


Template.interestingFact.helpers({
    interestingFact:function () {
        return interestingFacts.find().fetch();
    },
});