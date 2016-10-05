var page = 1;
listView=Backbone.View.extend({
  initialize:function(){
    listI = new listIssue()
    var pages = 0;
    var a=listI
    a.on('add',this.renderList,this)
    this.render();
    listI.fetch("",1,this.$el);
    
    
    
  },
  tagName:"div",
  render:function(page){
    
    var context={eve:"Event",add:"Add Event"};
    var source = $("#event_template").html();
    var template = Handlebars.compile(source);
    this.$el.html(template(context));
    
    $("#container").html(this.$el)
    
  },
  events:{
    'click .addEvent':'displayForm',
    'click #search':'search',
    'click #next':'pagination_next',
    'click #prev':'pagination_prev',
    'change #perPage':'perpage',
  },
  perpage:function(){
    var p = this.$el.find("#perPage").val();
    var a = this.$el;
    page = 1;
    
    var demo = listI;
    console.log(p);
    listI.fetch(this.$el.find("#searchbox").val(),page,this.$el,p);
  
  },
  displayForm:function(){
      $("#eventList").empty()
 
      var context = this.model.toJSON();
      var source   = $("#form_template").html();
      var template = Handlebars.compile(source);
      this.$el.html(template(context));
      $("#updatebtn").addClass('hidden')
      $("#container").html(this.$el)
      // $("#updatebtn").addClass('hidden');
  },
  pagination_next:function(){
    if(page>=1){
      this.$el.find("#prev").removeClass('hidden').addClass('visible');
    }
    var demo = this.listI;
    var a = this.$el;
   
    page++;
     console.log(a);
     listI.fetch(this.$el.find("#searchbox").val(),page,this.$el,this.$el.find("#perPage").val());
   return false;
  },
  pagination_prev:function(){
    page--;
    var demo = this.listI;
    // console.log("sdfghjk");
    var a = this.$el;
    if(page<2){
      this.$el.find("#prev").removeClass('visible').addClass('hidden');
    page=1;
    }
    listI.fetch(this.$el.find("#searchbox").val(),page,this.$el);  
    
    
  },
  renderList: function (model){
    
    var list = new eventlist({
              model:model
             });
    this.$el.find("#eventList").append(list.render().el).addClass('bgpeach');
  },
  search:function(){
    
    page=1;
    this.$el.find("#next").removeClass('hidden').addClass('visible');
    this.$el.find("#prev").removeClass('visible').addClass('hidden');
      
  
    var contact=this.$el.find("#searchbox").val()
   
   this.$el.find("#eventList").html("")
   listI.reset()
     listI.fetch(contact,page,this.$el,this.$el.find("#perPage").val());
    return false;
  }
  
});
