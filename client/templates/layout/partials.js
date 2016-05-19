if (Meteor.isClient) {
    Template.sidebar.onCreated(function() {
        var self = this;
    });

    Template.sidebar.events({
        'click #logout':function(event){
            Meteor.logout(function(err){
                if(err){
                    throw new Meteor.Error("Logout Failed");
                }
                else{
                    Router.go("login");
                }
            })
        }
        
    });

    Template.sidebar.helpers({
        currentUser: function() {
            var currentUser = Meteor.user();
            return currentUser;
        }
    })

}

