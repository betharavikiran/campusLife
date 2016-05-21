/**
 * Created by betha on 5/20/2016.
 */

this.EventsCalenderController = RouteController.extend({
    template: "eventsCalender",

    yieldTemplates: {
        /*YIELD_TEMPLATES*/
    },

    onBeforeAction: function() {
        this.next();
    },

    action: function() {

        this.render();
    },

    subscriptionSetup: function() {
        var subs = [];
        var ready = true;
        _.each(subs, function(sub) {
            if(!sub.ready())
                ready = false;
        });
        return ready;
    },

    data: function() {
        return {
            params: this.params || {}
        };
        /*DATA_FUNCTION*/
    },

    onAfterAction: function() {

    }
});

//https://themeteorchef.com/snippets/reactive-calendars-with-fullcalendar/
Template.eventsCalender.rendered  = function(){

    $('#events-calendar').fullCalendar({

        events: function (start, end,timezone, callback) {

            var events = [];
            calEvents = eventsCalender.find();
            calEvents.forEach(function(evt){
                events.push({id:evt._id,title:evt.title,start:evt.start,end:evt.end});
            })
            callback(events);
        },
        /*eventRender:function(event,element){
            element.find('.fc-content').html(
                '<h4>${ event.title }</h4><p class="type-${ event.type }">#${ event.type }</p>'
            )
        },*/
        editable:false,
        selectable: true
    });

    Tracker.autorun(function () {
       eventsCalender.find().fetch();
        $('#events-calendar').fullCalendar('refetchEvents');
    });

};

/*Template.eventsCalender.onRendered  = function(){
    $('#events-calendar').fullCalendar({

        events: function (start, end, callback) {
            var events = [];

            events.push({
                title: "Here we go",
                start: "2016-05-20",
                end: "2016-05-23",
                type: 'Corporate',
                guests:10
            });
            if(events) {
                callback(events);
            }
        },
    });

    Meteor.autorun(function () {
        var calendarEvents = eventsCalender.find().fetch();
        $('#events-calendar').fullCalendar('refetchEvents');
    });
};
*/


/*******************OnCreated*******************/
Template.eventsCalender.onCreated(function() {
    var self = this;
    this.autorun(function() {
       var subscriptionEvents = self.subscribe('eventsCalender');
    })
});
