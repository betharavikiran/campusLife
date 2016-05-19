/**
 * Created by betha on 5/18/2016.
 */
Meteor.startup(function() {


    if (institutions.find().count() === 0) {

        // create sample employees
        var sample_institutions = [
            {
                name:"ACTS Degree College",
                institution_type:"Degree College",
                institution_est_year:"2001",
                institution_location:"Plot No.4, Sector-10, MVP Colony",
                institution_city:"Visakhapatnam",
                institution_state:"Andhra Pradesh",
                institution_country:"India",
                institution_email:"",
                institution_phone:"0891 2714584",
                institution_ltd:"17.741009",
                institution_lng:"83.338363",
                courses:["BCA","MCA","BBA","MBA"]

            },
            {
                name:"Aditya Degree College",
                institution_type:"Degree College",
                institution_est_year:"2005",
                institution_location:"D.No.48-13-24, Sri Nagar, Old City Cable Office Road, Near RTC Complex",
                institution_city:"Visakhapatnam",
                institution_state:"Andhra Pradesh",
                institution_country:"India",
                institution_email:"",
                institution_phone:"0891 274356",
                institution_ltd:"17.728163",
                institution_lng:"83.310350",
                courses:["BCA","MCA"]
            },
            {
                name:"AGL Degree College",
                institution_type:"Degree College",
                institution_est_year:"1991",
                institution_location:"Near NH-5 and 4th Town Police Station, Sankarmatam Road",
                institution_city:"Visakhapatnam",
                institution_state:"Andhra Pradesh",
                institution_country:"India",
                institution_email:"",
                institution_phone:"0891 2735373",
                institution_ltd:"17.728680",
                institution_lng:"83.312934",
                courses:["BBA","MBA"]
            },
        ];

        _.each(sample_institutions, function(institution) {
            institutions.insert(institution);
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
                institution_ltd:"17.741009",
                institution_lng:"83.338363"
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
                institution_ltd:"17.741009",
                institution_lng:"83.338363"
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
                institution_ltd:"17.741009",
                institution_lng:"83.338363"
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
                name:"Vikram Parcels",
                foodPlace_type:"Take ways",
                foodPlace_location:"Plot No.4, Sector-10, MVP Colony",
                foodPlace_city:"Visakhapatnam",
                foodPlace_state:"Andhra Pradesh",
                foodPlace_country:"India",
                foodPlace_email:"",
                foodPlace_phone:"0891 2714584",
                foodPlace_ltd:"17.741009",
                foodPlace_lng:"83.338363"
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
                foodPlace_ltd:"17.741009",
                foodPlace_lng:"83.338363"
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
                foodPlace_ltd:"17.741009",
                foodPlace_lng:"83.338363"
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
                name:"Bachelors of Computer Applications",
                course_type:"Degree",
                course_duration:36,
                course_keywords:["BCA"]
            },
            {
                name:"Bachelors of Business Administration",
                course_type:"Degree",
                course_duration:36,
                course_keywords:["BBA"]
            },
            {
                name:"Masters of Business Administration",
                course_type:"Masters",
                course_duration:24,
                course_keywords:["MBA"]
            },
            {
                name:"Masters of Computer Applications",
                course_type:"Masters",
                course_duration:24,
                course_keywords:["MCA"]
            },
        ];

        _.each(sample_courses, function(course) {
            courses.insert(course);
        });
   }
});