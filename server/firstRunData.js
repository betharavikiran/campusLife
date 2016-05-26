/**
 * Created by betha on 5/18/2016.
 */
Meteor.startup(function() {


    if (institutions.find().count() === 0) {

        // create sample employees
        var sample_institutions = [
            {
                name:"Bullayya College",
                system_name:"BULLAYYA_COLLEGE",
                institution_type:"Degree College",
                institution_est_year:"1965",
                institution_govt_private:"Private",
                institution_affiliate:"Andhra University",
                institution_url:"www.bullayyacollege.com",
                institution_Hostel:"Available",
                institution_coedu_single:"Co-Education",
                institution_transport:"Available",
                institution_location:"TB Hospital",
                institution_city:"Vizag",
                institution_state:"Andhra Pradesh",
                institution_country:"India",
                institution_email:"bullayya.college@gmail.com",
                institution_phone:"0891-2728692",
                location: {"type": "Point", "coordinates": [17.728125, 83.310353]},
                courses:[{course:"BA",specializations:["Arts","Psychology"]},{course:"BSC",specializations:["Botnay","Home Science"]},{course:"BCA",specializations:["Computers"]},{course:"BBA",specializations:["Management"]}]
            },
            {
                name:"BVK College",
                system_name:"BVK_COLLEGE",
                institution_type:"Degree College",
                institution_est_year:"1965",
                institution_govt_private:"Private",
                institution_affiliate:"Andhra University",
                institution_url:"www.bvkcollege.com",
                institution_Hostel:"Available",
                institution_coedu_single:"Only Girls",
                institution_transport:"Available",
                institution_location:"Seethamapetta",
                institution_city:"Vizag",
                institution_state:"Andhra Pradesh",
                institution_country:"India",
                institution_email:"bvk.college@gmail.com",
                institution_phone:"0891-2728492",
                location: {"type": "Point", "coordinates": [17.728163, 83.310350]},
                courses:[{course:"BA",specializations:["Arts","Psychology"]},{course:"BSC",specializations:["Botnay","Home Science"]},{course:"BBA",specializations:["Management"]}]
            },
        ];

        _.each(sample_institutions, function(institution) {
            institutions.insert(institution);
        });

    }

    if (communities.find().count() === 0) {

        // create sample communities
        var sample_communities = [
            {
                name:"Bullayya College",
                system_name:"BULLAYYA_COLLEGE",
                community_type:"Institution",
            },
            {
                name:"BVK College",
                system_name:"BVK_COLLEGE",
                community_type:"Institution",
            },
            {
                name:"Bachelors of Computer Applications",
                system_name:"BCA",
                community_type:"Course",
            },
            {
                name:"Bachelors of Business Administration",
                system_name:"BBA",
                community_type:"Course",
            },
            {
                name:"Masters of Business Administration",
                system_name:"MBA",
                community_type:"Course",
            },
            {
                name:"Masters of Computer Applications",
                system_name:"MCA",
                community_type:"Course",
            },
        ];

        _.each(sample_communities, function(community) {
            communities.insert(community);
        });
    }
    
    

    if (accomodations.find().count() === 0) {

        // create sample employees
        var sample_accomodations = [
            {
                name:"Sandy Boys Hostel",
                accomodation_type:"Hostel",
                accomodation_location:"Plot No.4, Sector-10, MVP Colony",
                accomodation_city:"Visakhapatnam",
                accomodation_state:"Andhra Pradesh",
                accomodation_country:"India",
                accomodation_email:"",
                accomodation_phone:"0891 2714584",
                location: {"type": "Point", "coordinates": [17.728680, 83.312934]},
            },
            {
                name:"Rama Boys Hostel",
                accomodation_type:"Hostel",
                accomodation_location:"Plot No.4, Sector-10, MVP Colony",
                accomodation_city:"Visakhapatnam",
                accomodation_state:"Andhra Pradesh",
                accomodation_country:"India",
                accomodation_email:"",
                accomodation_phone:"0891 2714584",
                location: {"type": "Point", "coordinates": [17.728680, 83.312934]},
            },
            {
                name:"Krishna Boys Hostel",
                accomodation_type:"Hostel",
                accomodation_location:"Plot No.4, Sector-10, MVP Colony",
                accomodation_city:"Visakhapatnam",
                accomodation_state:"Andhra Pradesh",
                accomodation_country:"India",
                accomodation_email:"",
                accomodation_phone:"0891 2714584",
                location: {"type": "Point", "coordinates": [17.728680, 83.312934]},
            },
        ];

        _.each(sample_accomodations, function(accomodation) {
            accomodations.insert(accomodation);
        });

    }

    if (foodPlaces.find().count() === 0) {

        // create sample employees
        var sample_foodPlaces = [
            {
                name: "Vikram Parcels",
                foodPlace_type: "Take ways",
                foodPlace_location: "Plot No.4, Sector-10, MVP Colony",
                foodPlace_city: "Visakhapatnam",
                foodPlace_state: "Andhra Pradesh",
                foodPlace_country: "India",
                foodPlace_email: "",
                foodPlace_phone: "0891 2714584",
                location: {"type": "Point", "coordinates": [17.741009, 83.338363]},

            },
            {
                name:"Anuskha Parcels",
                foodPlace_type:"Take ways",
                foodPlace_location:"Plot No.4, Sector-10, MVP Colony",
                foodPlace_city:"Visakhapatnam",
                foodPlace_state:"Andhra Pradesh",
                foodPlace_country:"India",
                foodPlace_email:"",
                foodPlace_phone:"0891 2714584",
                location: {"type": "Point", "coordinates": [17.741009, 83.338363]},
            },
            {
                name:"Amala Parcels",
                foodPlace_type:"Take ways",
                foodPlace_location:"Plot No.4, Sector-10, MVP Colony",
                foodPlace_city:"Visakhapatnam",
                foodPlace_state:"Andhra Pradesh",
                foodPlace_country:"India",
                foodPlace_email:"",
                foodPlace_phone:"0891 2714584",
                location: {"type": "Point", "coordinates": [17.741009, 83.338363]},
            },
        ];

        _.each(sample_foodPlaces, function(foodPlace) {
            foodPlaces.insert(foodPlace);
        });

    }

    if (courses.find().count() === 0) {

        // create sample employees
        var sample_courses = [
            {
                display_Name:"Bachelors of Computer Applications",
                system_Name:"BCA",
                course_type:"Degree",
                course_level:4,
                course_duration:36,
                course_keywords:["BCA"]
            },
            {
                display_Name:"Bachelors of Business Administration",
                system_Name:"BBA",
                course_type:"Degree",
                course_level:4,
                course_duration:36,
                course_keywords:["BBA"]
            },
            {
                display_Name:"Masters of Business Administration",
                system_Name:"MBA",
                course_type:"Masters",
                course_level:6,
                course_duration:24,
                course_keywords:["MBA"]
            },
            {
                display_Name:"Masters of Computer Applications",
                system_Name:"MCA",
                course_type:"Masters",
                course_level:6,
                course_duration:24,
                course_keywords:["MCA"]
            },
        ];

        _.each(sample_courses, function(course) {
            courses.insert(course);
        });
   }

    if (eventsCalender.find().count() === 0) {
        var sample_events =[ { title: 'Bullayya Fest', start: '2016-05-03', end: '2016-05-12', editable: false, type: 'Institution',notes:"Outsiders would need a pass"},
        { title: 'AIIMS Exam', start: '2016-05-27', end: '2016-05-27', editable: false, type: 'Exam',notes:"Excam starts are 9 am." }];

        _.each(sample_events, function(event) {
            eventsCalender.insert(event);
        });
    }

    if (interestingFacts.find().count() === 0) {
        var sample_facts =[ { factIntroduction: 'Arya-Siddhanta', factDescription: "The Arya-siddhanta, a lost work on astronomical computations, is known through the writings of Aryabhata's contemporary Varahamihira, as well as through later mathematicians and commentators including Brahmagupta and Bhaskara I. This work appears to be based on the older Surya Siddhanta, and uses the midnight-day-reckoning, as opposed to sunrise in Aryabhatiya. This also contained a description of several astronomical instruments, the gnomon (shanku-yantra), a shadow instrument (chhAyA-yantra), possibly angle-measuring devices, semi-circle and circle shaped (dhanur-yantra / chakra-yantra), a cylindrical stick yasti-yantra, an umbrella-shaped device called chhatra-yantra, and water clocks of at least two types, bow-shaped and cylindrical.", factGenere:"General", imageUrl:"http://www.studyhelpline.net/Biography/images/Aryabhatta%20(1).jpg",factUrl:''},
        ];

        _.each(sample_facts, function(facts) {
            interestingFacts.insert(facts);
        });
    }

    if (quizs.find().count() === 0) {
        var sample_quizs =
            [ { publishDate: new Date(), genere: "General", question:"Who is Atum? ",option1:"A Robot",option2:"A Man",option3:"A Student",option3:"A boy",option4:"A Baby", answer:"A Robot",responseCorrect:"Hey you knew Atum more than we do.",responseWrong:"Atum is still a stranger to you."},
        ];

        _.each(sample_quizs, function(quiz) {
            quizs.insert(quiz);
        });
    }
});