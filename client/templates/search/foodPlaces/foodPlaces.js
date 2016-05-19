/**
 * Created by betha on 5/18/2016.
 */
this.FoodPlacesController = RouteController.extend(
    {
        template:"foodPlaces",

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

Template.foodPlaces.helpers({
    foodPlaces:function () {
        return foodPlaces.find().fetch();
    },
});
