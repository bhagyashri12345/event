listIssue = Backbone.Collection.extend({
  model:eveModel,
  initialize:function(){
    this.bind('remove', this.onModelRemoved, this);
    // this.bind('post',this.onModelChanged,this);
  },
  fetch:function(){
    var demo = this;
    
    var request = db.transaction(["event-list"], "readwrite")
                .objectStore("event-list")
                request.openCursor().onsuccess=function(event){
                  var cursor = event.target.result;
                  if(cursor){
                    cursor.value.id = cursor.key
                  demo.add(cursor.value)
                  
                  cursor.continue();
                }

                }
   },
 onModelRemoved:function(){
  console.log("fghjk")
  var list = new eventlist({
              model:new eveModel()
             });
    list.remove(this.remove())
    list.stopListening();
    
 }

});
console.log('hgh');