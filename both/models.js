/**
 * Created by betha on 5/17/2016.
 */
/**
 * Created by betha on 5/15/2016.
 */

// Object to represent Education institutions
institutions = new Mongo.Collection("institutions");
communities = new Mongo.Collection("communities");
courses = new Mongo.Collection("courses");
accomodations = new Mongo.Collection("accomodations");
foodPlaces = new Mongo.Collection("foodPlaces");
//studentConcessions = new Mongo.Collection("studentConcessions");

//
//Tution

Schema = {};
SimpleSchema.debug = true;

Schema.profile = new SimpleSchema({
    user_id:{
        type:String,
    },
  /*  search_keys:[],
    interest_points:[]*/
});

Schema.preferences = new SimpleSchema({
    user_id:{
        type:String,
    },
    search_range:{
        type:Number
    }
});


Schema.institutions = new SimpleSchema({
    name:{
        type:String,
        label:"Institution Name"
    },
    institution_type:{
        type:String,
        label:"Institution Type",
        allowedValues: ["High School","Degree College","Engineering College","University"],
    },

    institution_est_year:{
        type:String
    },

    institution_logo:{
       type:String,
        optional:true
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
    institution_ltd:{
        type: String,
        label: "Institution Latitude",
        optional: true
    },
    institution_lng:{
        type: String,
        label: "Institution Longitude",
        optional: true
    },
    courses:{
        type:[String]
    }
});

institutions.attachSchema(Schema.institutions, {transform: true});

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
    accomodation_ltd:{
        type: String,
        label: "accomodation Latitude",
        optional: true
    },
    accomodation_lng:{
        type: String,
        label: "accomodation Longitude",
        optional: true
    }
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
    foodPlace_ltd:{
        type: String,
        label: "accomodation Latitude",
        optional: true
    },
    foodPlace_lng:{
        type: String,
        label: "accomodation Longitude",
        optional: true
    }
});

foodPlaces.attachSchema(Schema.foodPlaces, {transform: true});

Schema.courses = new SimpleSchema({
    name:{
        type:String,
        label:"Course Name"
    },
    course_type:{
       type:String,
       label:"Course Type",
       allowedValues: ["Certification","Degree","Professional","Masters"],
    },
    course_duration:{
        type:Number,
        label:"Months"
    },
    course_keywords:{
        type:[String]
    }
});

courses.attachSchema(Schema.courses,{transform: true});

Schema.communities = new SimpleSchema({
   name:{
       type:String,
       label:"Community Name"
   },
   community_type:{
        type:String,
        label:"Community Type",
        allowedValues:["Institution","Course"]
   },
   entity_id:{
        type:String,
   },
   memberships:{
       type:[String]
   }
});

