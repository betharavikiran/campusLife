/**
 * Created by betha on 5/19/2016.
 */
Meteor.publish('accomodationsByLocation', function(latitude,longitude) {
    if(typeof latitude !== 'undefined' && typeof longitude !== 'undefined' ) {

        return  accomodations.find( { location:
        { $geoWithin :
        { $centerSphere : [ [latitude,longitude ] ,10 / 3963.2 ] }
        } } );

    }
});