/**
 * Created by betha on 5/17/2016.
 */

// Object to represent Education institutionList
institutions = new Mongo.Collection("institutions");
communities = new Mongo.Collection("communities");
courses = new Mongo.Collection("courses");
accomodations = new Mongo.Collection("accomodations");
foodPlaces = new Mongo.Collection("foodPlaces");
eventsCalender = new Mongo.Collection( 'eventsCalender' );
interestingFacts = new Mongo.Collection('interestingFacts');
quizs = new Mongo.Collection('quizs');

profiles = new Mongo.Collection('profiles');
preferences = new Mongo.Collection('preferences');

admins = new Mongo.Collection('admins');

// Books
// Notifying students by college
// Share your idea
// Career path
//Tution

Schema = {};
SimpleSchema.debug = true;

Schema.courseDef = new SimpleSchema({
    course:{
        type:String,
    },
    specializations:{
        type:[String]
    }
});

Schema.institutions = new SimpleSchema({
    name:{
        type:String,
        label:"Institution Name"
    },
    system_name:{
        type:String,
        label:"Institution Internal Name"
    },
    institution_type:{
        type:String,
        label:"Institution Type",
        allowedValues: ["High School","Degree College","Engineering College","University"],
    },

    institution_est_year:{
        type:String,
        label:"Institution Established year",
    },
    institution_govt_private:{
        type:String,
        label:"Government or Private",
        allowedValues:["Government","Private"]
    },
    institution_affiliate:{
        type:String,
        label:"Institution Affiliate",
        allowedValues:["Andhra University","Osmanai University","JNTU","GITAM University"],
    },
    institution_logo:{
       type:String,
        optional:true
    },
    institution_url:{
        type:String,
        label:"Institution URL",
    },
    institution_Hostel:{
        type:String,
        label:"Avaliability of Hostel Facility",
        allowedValues:["Available","Not Available"]
    },
    institution_coedu_single:{
        type:String,
        label:"Co-Education/Mono",
        allowedValues:["Co-Education", "Only Boys","Only Girls"]
    },

    institution_transport:{
      type:String,
        label:"Transportation available",
        allowedValues:["Available","Not Available"]
    },
    institution_location:{
        type:String,
        label:"Location/Area *",
    },
    institution_city:{
        type:String,
        label:"City *",
    },
    institution_state:{
        type:String,
        label:"State *",
    },
    institution_country:{
        type:String,
        label:"Country *",
    },
    institution_email:{
        type:String,
        label:"Country *",
        optional:true
    },
    institution_phone:{
        type:String,
        label:"Phone *",
    },
    location: {
        type: Object,
        index: '2dsphere',
        label: 'MongoDB spesific coordinates field'
    },
    'location.type': {
        type: String,
        allowedValues: ['Point'],
        label: 'Typeof coordinates - Point'
    },
    'location.coordinates': {
        type: [Number],
        decimal: true,
        label: 'Array of coordinates in MongoDB style [Lng Lat]'
    },
    courses:{
        type:[Schema.courseDef]
    }
});
// [{course:"BA",Specialization:{"Arts","Psychology"}}
institutions.attachSchema(Schema.institutions, {transform: true});
///institutions._ensureIndex({ "location": "2dsphere"});


Schema.accomodations = new SimpleSchema({
    name:{
        type:String,
        label:"Accomodation Name"
    },

    accomodation_type:{
        type:String,
        label:"Accomodation Type",
        allowedValues: ["Hostel","Paying Guest","Shared Apartment"],
    },

    accomodation_location:{
        type:String,
        label:"Location/Area *",
    },
    accomodation_city:{
        type:String,
        label:"City *",
    },
    accomodation_state:{
        type:String,
        label:"State *",
    },
    accomodation_country:{
        type:String,
        label:"Country *",
    },
    accomodation_email:{
        type:String,
        label:"Country *",
        optional:true
    },
    accomodation_phone:{
        type:String,
        label:"Phone *",
    },
    location: {
        type: Object,
        index: '2dsphere',
        label: 'MongoDB spesific coordinates field'
    },
    'location.type': {
        type: String,
        allowedValues: ['Point'],
        label: 'Typeof coordinates - Point'
    },
    'location.coordinates': {
        type: [Number],
        decimal: true,
        label: 'Array of coordinates in MongoDB style [Lng Lat]'
    },
});

accomodations.attachSchema(Schema.accomodations, {transform: true});


Schema.foodPlaces = new SimpleSchema({
    name:{
        type:String,
        label:"Name"
    },

    foodPlace_type:{
        type:String,
        label:"Food Place Type",
        allowedValues: ["Mess","Home Food","Take ways","Restaurants"],
    },

    foodPlace_location:{
        type:String,
        label:"Location/Area *",
    },
    foodPlace_city:{
        type:String,
        label:"City *",
    },
    foodPlace_state:{
        type:String,
        label:"State *",
    },
    foodPlace_country:{
        type:String,
        label:"Country *",
    },
    foodPlace_email:{
        type:String,
        label:"Email *",
        optional:true
    },
    foodPlace_phone:{
        type:String,
        label:"Phone *",
    },

    location: {
        type: Object,
        index: '2dsphere',
        label: 'MongoDB spesific coordinates field'
    },
    'location.type': {
        type: String,
        allowedValues: ['Point'],
        label: 'Typeof coordinates - Point'
    },
    'location.coordinates': {
        type: [Number],
        decimal: true,
        label: 'Array of coordinates in MongoDB style [Lng Lat]'
    },
//https://forums.meteor.com/t/howto-use-simpleschema-to-fill-geodata-in-database/9855/2

});

foodPlaces.attachSchema(Schema.foodPlaces, {transform: true});


Schema.courses = new SimpleSchema({
    display_Name:{
        type:String,
        label:"Course Display Name"
    },
    system_Name:{
        type:String,
        label:"internal System Name"
    },
    course_type:{
       type:String,
       label:"Course Type",
       allowedValues: ["Pre-Primary","Primary","Secondary","Certification","Degree","Professional","Masters"],
    },
    course_level:{
        type:Number,
        label:"Course Level",
        allowedValues:[0,1,2,3,4,5,6]  // 0 is before Primary, 1 is Primary, 2 is Secondary, 3 is Degree, 4 is Masters, 5 is Professional
    },
    course_duration:{
        type:Number,
        label:"Months"
    },
    course_keywords:{
        type:[String]
    },
});

courses.attachSchema(Schema.courses,{transform: true});

Schema.communities = new SimpleSchema({
   name:{
       type:String,
       label:"Community Name"
   },
    system_name:{
        type:String,
        label:"Community System Name"
    },
   community_type:{
        type:String,
        label:"Community Type",
        allowedValues:["Institution","Course"]
   },
});
communities.attachSchema(Schema.communities,{transform:true});

Schema.eventsCalender = new SimpleSchema({
    'title': {
        type: String,
        label: 'The title of this event.'
    },
    'start': {
        type: String,
        label: 'When this event will start.'
    },
    'end': {
        type: String,
        label: 'When this event will end.'
    },
    'type': {
        type: String,
        label: 'What type of event is this?',
        allowedValues: [ 'Institution', 'Students', 'Public', 'Private','Exam' ]
    },
    'Venue':{
        type: String,
        optional:true
    },
    'notes':{
        type: String,
        label: 'Some instructions',
        optional:true
    },
    'target_community':{
        type:[String],
        optional:true
    }
});

eventsCalender.attachSchema(Schema.eventsCalender,{transform: true});

Schema.interestingFacts = new SimpleSchema({
     publishDate:{
         type:Date,
         label: 'Date when to show',
         optional:true
     },
     factIntroduction:{
         type:String,
         label: 'Brief Introduction'
     },
     factDescription:{
         type:String,
         label: 'Description'
     },
     factGenere:{
         type:String,
         label:'Genere',
         allowedValues:['General',]
     },
     imageUrl:{
         type:String,
         label:'Image URL',
         optional:true
     },
     factUrl:{
         type:String,
         label:"URL Path for more Information",
         optional:true
     }
});

interestingFacts.attachSchema(Schema.interestingFacts,{transform: true});

Schema.quizs = new SimpleSchema({
    publishDate:{
        type:Date,
        label: 'Date when to show',
        optional:true
    },
    genere:{
        type:String,
        label:'Genere',
        allowedValues:['General',]
    },
    question:{
        type:String,
        label: 'Questions'
    },
    option1:{
        type:String,
        label: 'option1'
    },
    option2:{
        type:String,
        label: 'option1'
    },
    option3:{
        type:String,
        label: 'option1'
    },
    option4:{
        type:String,
        label: 'option1'
    },
    answer:{
        type:String,
        label: 'Questions'
    },
    responseCorrect:{
        type:String,
        label: 'Response for Correct Answer'
    },
    responseWrong:{
        type:String,
        label: 'Response for Wrong Answer'
    },
    participants:{
        type:[String],
        optional:true
    },
    participants_correct:{
        type:[String],
        optional:true
    }

});
quizs.attachSchema(Schema.quizs,{transform: true});


Schema.education = new SimpleSchema({

    institution: {
        type: String
    },
    course: {
        type: String,
    },
    course_level:{
        type:Number,
        label:"Course Level",
        allowedValues:[0,1,2,3,4,5,6]
    },
    course_level_display:{
        type:String,
        label:"Level",
        custom: function () {
         if (this.field('course_level').value ==0){
                return 'Pre-Primary';
         }else if(this.field('course_level').value ==1) {
             return 'Primary';
         }else if(this.field('course_level').value ==2) {
             return 'Secondary';
         }else if(this.field('course_level').value ==3) {
             return 'Certification';
         }else if(this.field('course_level').value ==4) {
             return 'Degree';
         }else if(this.field('course_level').value ==5) {
             return 'Professional';
         }else if(this.field('course_level').value ==6) {
             return 'Masters';
         }
        },
    },

    course_start: {
        type: Date,
        defaultValue: new Date(),
        label: 'Start Date'
    },
    course_end: {
        type: Date,
        optional: true,
        custom: function () {
            if (Meteor.isClient && this.isSet) {
                if (this.field('start').value > this.value){
                    return 'endGreaterThanStart';
                }
            }
        },
        label: 'End Date'
    },
    status:{
        type:String,
        label:"Course Status",
        allowedValues: [ 'Ongoing', 'Completed','Dropped Out'],
    }
});

Schema.community_subscription = new SimpleSchema({

})

Schema.profiles = new SimpleSchema({
    user_id:{
        type:String,
        label: 'Facebook User ID', // User ID for login to facebook
    },
    birthDate: {
        type: Date,
        optional: true
    },
    educations:{
        type:[Schema.education],
        optional: true
    },
    interest_keywords:{
        type:[String],
        optional:true
    },
    communities_subscribed:{
        type:[Schema.communities],
        optional:true
    }
});

profiles.attachSchema(Schema.profiles,{transform: true});

Schema.preferences = new SimpleSchema({
    user_id:{
        type:String,
        label: 'Facebook User ID', // User ID for login to facebook
    },
    search_distance: {
        type: Number,
        optional: true
    },
});

preferences.attachSchema(Schema.preferences,{transform: true});

Schema.admin = new SimpleSchema({
    user_id:{
        type:String,
        label: 'Facebook User ID', // User ID for login to facebook
    },
    role:{
        type:String,
        label:"Role for Administration",
        allowedValues:["SuperAdmin","Admin","Community Manager"]
    },
});