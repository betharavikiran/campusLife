/**
 * Created by betha on 5/24/2016.
 */
Meteor.publish('coursesByLevel', function(course_level) {

    console.log(course_level);
    if(typeof course_level !== 'undefined') {
        console.log(courses.find( { course_level:course_level}));
        return  courses.find( { course_level:course_level});
    }
});