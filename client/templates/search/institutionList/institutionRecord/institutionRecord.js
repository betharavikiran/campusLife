/**
 * Created by betha on 5/18/2016.
 */
this.InstitutionRecordController = RouteController.extend(
    {
        template:"institutionRecord",

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

Template.institutionRecord.helpers({
    
});

Template.institutionRecord.events({
   'click #btn-nearby':function(event){
       Session.set("current-InstitutionRecord",this);
       Router.go("institutionInfo");
   }
});