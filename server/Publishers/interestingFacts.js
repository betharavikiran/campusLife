/**
 * Created by betha on 5/20/2016.
 */
Meteor.publish('interestingFacts', function() {
    console.log("intersting fact" + interestingFacts.find().count());
    return interestingFacts.find({},{limit:1});
});