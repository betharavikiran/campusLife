/**
 * Created by betha on 5/18/2016.
 */
this.InstitutionInfoController = RouteController.extend(
    {
        template:"institutionInfo",

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

Template.institutionInfo.helpers({
    foodPlaces:function () {
        return foodPlaces.find().fetch();
    }
});


/*******************OnCreated*******************/
Template.institutionInfo.onCreated(function() {
    var self = this;
    var institution = Session.get("current-InstitutionRecord");
    var latitude = institution.location.coordinates[0];
    var longitude = institution.location.coordinates[1];

    this.autorun(function() {
       var subscriptionFoodPlaces = self.subscribe('foodPlacesByLocation',latitude,longitude);
    });
});

Template.institutionInfo.events({
      /*  'change #filterByCourse' : function (event) {
            event.preventDefault();
            Session.set("filterByCourse", event.target.value);
        },*/
    }
);
