var Routers = Backbone.Router.extend({

            routes: {
                 'add': 'addEvent',
                 '*events': 'showEvents',
                 'update':'updateEvent',

            },
            showEvents: function(event) {
                          

                 $("#container").html()
                var listview = new listView({
                    model: new eveModel()
                }); 
                
            },
            addEvent: function(){
               
             var view = new eveView({
                    model: new eveModel()
                });   
             
            },
            updateEvent:function(param){
              console.log("in updateEvent")
              var data={}
              var objectStore = db.transaction("event-list").objectStore("event-list");
              objectStore.openCursor().onsuccess = function(event) {
              var cursor = event.target.result;
              if(cursor){
               if (cursor.key==param.split('/')[1]) {
                   data.key=cursor.key
                }
               cursor.continue();
              }
            };
            console.log('data');
            console.log(data)
            var view = new eventlist({
               model: new eveModel(data)
            });   
          }
});
