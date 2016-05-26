/**
 * Created by betha on 5/18/2016.
 */
this.InstitutionListController = RouteController.extend(
    {
        template:"institutionList",

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
    }
);

Template.institutionList.helpers({
    institutions:function () {
        return institutions.find().fetch();
    },
});


/*******************OnCreated*******************/
Template.institutionList.onCreated(function() {
    var self = this;
    Session.set("filterByCourse", 'All');

    this.autorun(function() {
        var subscriptionCourses = self.subscribe('institutionsByCourse',Session.get('filterByCourse'));
    });
});

Template.institutionList.events({
        'change #filterByCourse' : function (event) {
            event.preventDefault();
            Session.set("filterByCourse", event.target.value);
        },
    }
);
