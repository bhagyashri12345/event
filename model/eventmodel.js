eveModel = Backbone.Model.extend({
            defaults: {
                fname:'',
                lname:'',
                email:'',
                poster:'',
                type:'',
                date:'',
                time:'',
                venue:'',
                tel:''
            },
            save:function(event){
               var data = new FormData();

               console.log(data)
                var request = db.transaction(["event-list"], "readwrite")
                .objectStore("event-list")
                .add(this.toJSON());
            },
            destroy:function(){
              var transaction = db.transaction(["event-list"], "readwrite");
              var objectStore = transaction.objectStore("event-list");
              var did=this.get("idd")
              console.log(did)
              var did1 = this.id
              console.log(did1)
              var objectStoreRequest = objectStore.delete(did1);
              console.log( listI.remove(did))
            },
            
            // jusRead:function(){
            //   console.log("fgh")
            //    var objectStore = db.transaction("event-list").objectStore("event-list");
            
            //    objectStore.openCursor().onsuccess = function(event) {
            //    var cursor = event.target.result;
               
            //    if (cursor) {
                      
            //       cursor.continue();
            //    }
               
            //    else {
            //       alert("No more entries!");
            //    }
            // };
            // }

        }); 
