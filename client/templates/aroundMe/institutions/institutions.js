/**
 * Created by betha on 5/18/2016.
 */
this.InstitutionsController = RouteController.extend(
    {
        template:"institutions",

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

Template.institutions.helpers({
    institutions:function () {
        return institutions.find().fetch();
    },
});