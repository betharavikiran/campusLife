
/*******************OnCreated*******************/
Template.logout.onCreated(function() {
    var self = this;
    Session.set("filterByCompleteStatus", 'All');

    this.autorun(function() {

       // Clear all the state info in the session
       Session.set('selectedCompleteOrderDate','');
       Session.set('selectedCompleteOrderDateNext','');
       Session.set('selectedOrderDate','');
       Session.set('selectedOrderDateNext','');
       Session.set('currentPage','');
       Session.set('currentCompletePage','');
       Session.set('currentRechargesPage','');
       Session.set('profileUpdateResult','');

       Session.setPersistent("store_ID",'');
       Session.setPersistent('owner','');
       Session.setPersistent('address_location', '');
       Session.setPersistent('store_name','');
       Session.setPersistent('phone', '');
       Session.setPersistent('city','');

    });
});
