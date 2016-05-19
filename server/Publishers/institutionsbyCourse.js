/**
 * Created by betha on 5/18/2016.
 */
Meteor.publish('InstitutionsByCourse', function(course) {

    if(course){
        console.log(course);
         if(course=="All"){
            return institutions.find();
         }
         else{
            var courseObject = courses.findOne({ course_keywords: course});
            return institutions.find({courses:{ "$in" : [course]}});
        }

    }
});