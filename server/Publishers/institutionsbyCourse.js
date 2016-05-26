/**
 * Created by betha on 5/18/2016.
 */
Meteor.publish('institutionsByCourse', function(courseName) {
    console.log(courseName);
    if(courseName=="All"){
       return institutions.find();
    }else{

        console.log(institutions.find({ courses:{$elemMatch: {course:courseName}}}).count());
        return institutions.find({ courses:{$elemMatch: {course:courseName}}});
    }
});