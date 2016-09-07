eventlist = Backbone.View.extend({
  initialize:function(){
    
    this.render();

  },
  tagName:"li",
  events:{
    'click .delete':'modelDelete',
    'click .update':'modelUpdate'
  },
  render:function(){
    
    
                var source   = $("#list_template").html();
                var template = Handlebars.compile(source);
                this.$el.html(template(this.model.toJSON()));
                
              
                return this;
  },
  modelDelete:function(){
      this.remove()
      this.model.destroy()

  },
  modelUpdate:function(data){
    
    router.navigate("update/"+this.model.attributes.id,{trigger: true})
    console.log(this.model.attributes.id)
    // $("#container").html("")
    // $("#eventList").html("")
    //            var source   = $("#form_template").html();
    //             var template = Handlebars.compile(source);
    //             this.$el.html(template(this.model.toJSON()));
    //             $("#eventList").html(this.$el)
    // $("#eventList").html("")
    //   var context = this.model.toJSON();
    //   var source   = $("#form_template").html();
    //   var template = Handlebars.compile(source);
    //   this.$el.html(template(context));
    //   $("#container").html(this.$el)
    // $("#form_template").addClass('updateForm')
    // $("#addbtn").addClass('hidden')
   var view = new eveView({
                    model: new eveModel(this.model.attributes)
                });  
    
  }
});