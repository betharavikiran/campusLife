/**
 * Created by betha on 5/19/2016.
 */
Meteor.publish('foodPlacesByLocation', function(latitude,longitude) {
    if(typeof latitude !== 'undefined' && typeof longitude !== 'undefined' ) {

       return  foodPlaces.find( { location:
                          { $geoWithin :
                           { $centerSphere : [ [latitude,longitude ] ,10 / 3963.2 ] }
        } } );

    }
});