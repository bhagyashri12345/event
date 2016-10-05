listIssue = Backbone.Collection.extend({
  model:eveModel,
  initialize:function(){
  this.bind('remove', this.onModelRemoved, this);
},

fetch:function(data,page,button,p){
  var demo = this;
  var text = data;
  var a = button;
  // console.log(a);
  $("#eventList").html("");
  $("#eventList").append("<img id='theImg' src='img/ajax-loader.gif'/>");
  $.ajax({
      type: "GET",
      url: "view/eventList.php",
      data: {'data':data,'page':page,'perPage':p},
      success: function(data)
      { 
        var db = JSON.parse(data);
        console.log(db);
	//$("#eventList").html("Total Count"+db.pagination['count']);
        if(db.pagination['totalPage']<=1){
          button.find("#next").removeClass('visible').addClass('hidden');
          a.find("#prev").removeClass('visible').addClass('hidden');
        }
        if(page>db.pagination.totalPage-1){
          console.log("hide next button")
          a.find("#next").removeClass('visible').addClass('hidden');
          page = db.pagination.totalPage;
          $("#eventList").html("<br>No More Results<br>");
        } 
        if(page<db.pagination.totalPage){
          a.find("#next").removeClass('hidden').addClass('visible');
        }
        $("#eventList").html(db.pagination['currentPage']+" of "+db.pagination['totalPage']+"<br>   Total Count:"+db.pagination['count']) 
       //$("#eventList").html("Total Count"+db.pagination['count']);
	 if(db.events==null){
          console.log("events null")
          $("#eventList").html("No more Results")
          a.find("#next").removeClass('visible').addClass('hidden');
          a.find("#prev").removeClass('visible').addClass('hidden');
        }
        else{
          demo.reset();
          for (var i = 0; i < db.events.length; i++) {
            demo.add(db.events[i]);
          }
        }
      }
  })
return false;
},
 onModelRemoved:function(){
  // console.log("fghjk")
  var list = new eventlist({
              model:new eveModel()
             });
    list.remove(this.remove())
    list.stopListening();
    
 }

});
// console.log('hgh');
