listView=Backbone.View.extend({
  initialize:function(){
    listI = new listIssue()

    var a=listI
    a.on('add',this.renderList,this)
    listI.fetch()
    
    this.render();
  },
  tagName:"div",
  render:function(){
    var context={eve:"Event",add:"Add Event"};
    var source = $("#event_template").html();
    var template = Handlebars.compile(source);
    this.$el.html(template(context));
    
    $("#container").html(this.$el)
  },
  events:{
    'click .addEvent':'displayForm',
    
    
  },
  displayForm:function(){
      $("#eventList").html("")

      var context = this.model.toJSON();
      var source   = $("#form_template").html();
      var template = Handlebars.compile(source);
      this.$el.html(template(context));
      $("#updatebtn").addClass('hidden')
      $("#container").html(this.$el)
  },
  renderList: function (model){
    
    var list = new eventlist({
              model:model
             });
    $('#eventList').append(list.render().el);
  },
  
  
});
console.log("gh")