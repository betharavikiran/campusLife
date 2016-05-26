if (Meteor.isServer) {

    Meteor.methods({
        updateEducation: function (doc) {
            var user_id = doc.education.user_id;
            var course = doc.education.course;
            var course_level = doc.education.course_level;
            var course_level_display = getDisplayLevel(course_level);
            var institution = doc.education.institution;
            var course_start = new Date(doc.education.course_start);
            var course_end =new Date( doc.education.course_end);
            var status = doc.education.status;



            // Set the education record in Profile Object.
            profiles.upsert(
                { user_id: user_id },
                { $push: { educations: { institution:institution,course:course,course_level:course_level,course_level_display:course_level_display,course_start:course_start,course_end:course_end,status:status} } }
            );

            var subscribing_communities =  communities.find({system_name:{$in:[course,institution]}});

            var subscription =[];

            subscribing_communities.forEach(function(community) {
                profiles.upsert(
                    { user_id: user_id },
                    { $push: { communities_subscribed: community } }
                );
            })


            var rtrn = '{"status" : "Success", "Message":"Education was updated successfully!"}';
            return rtrn;
        }

    });


    function getDisplayLevel(numericlevel){
        if (numericlevel ==0){
            return 'Pre-Primary';
        }else if(numericlevel ==1) {
            return 'Primary';
        }else if(numericlevel ==2) {
            return 'Secondary';
        }else if(numericlevel ==3) {
            return 'Certification';
        }else if(numericlevel ==4) {
            return 'Degree';
        }else if(numericlevel ==5) {
            return 'Professional';
        }else if(numericlevel ==6) {
            return 'Masters';
        }
    }

}