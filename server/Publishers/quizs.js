/**
 * Created by betha on 5/20/2016.
 */
Meteor.publish('quizs', function() {
    console.log("quizs" + quizs.find().count());
    return quizs.find({},{limit:1});
});
