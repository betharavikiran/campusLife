/**
 * Created by betha on 5/20/2016.
 */
Meteor.publish('eventsCalender', function() {
    console.log("called" + eventsCalender.find().count());
    return eventsCalender.find();
});