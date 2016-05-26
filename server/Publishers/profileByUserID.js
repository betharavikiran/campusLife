/**
 * Created by betha on 5/23/2016.
 */
Meteor.publish('profileByUserID', function(userID) {
    if(typeof userID !== 'undefined') {

        return  profiles.find({ user_id:userID } );

    }
});