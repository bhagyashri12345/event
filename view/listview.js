eventlist = Backbone.View.extend({
  initialize:function(){
    
    this.render();

  },
  tagName:"li",
  events:{
    'click .delete':'modelDelete',
    'click #update':'modelUpdate'
  },
  render:function(){
    
    
                var source   = $("#list_template").html();
                var template = Handlebars.compile(source);
                this.$el.html(template(this.model.toJSON()));
                
              
                return this;
  },
  modelDelete:function(){
      this.remove()
      var id = this.model.attributes.id;
      $.ajax({
                type: "POST",
                url: "view/delete.php",
                data: {'id':id},
                success: function(data)
                { 
                  console.log(data);
                } 
              })
      // this.model.destroy()

  },
  modelUpdate:function(data){
    
    router.navigate("update/"+this.model.attributes.id,{trigger: true})
    console.log(this.model.attributes.id)
    this.model.attributes.showbtn = false;
    
     
   var view = new eveView({
                    model: new eveModel(this.model.attributes)
                });  
    
  }
});