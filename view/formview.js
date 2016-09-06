eveView = Backbone.View.extend({
            initialize: function() {
                this.render();
                this.bind(this,'input_change');
            },

            tagName: "div",
           
            render: function() {
              $("#eventList").html("")
                var context = this.model.toJSON();
                var source   = $("#form_template").html();
                var template = Handlebars.compile(source);
                this.$el.html(template(context));
                
                $("#container").html(this.$el)
                return this;
            },
            events: {
                'click .add': 'add',
                'click .updateData': 'readData',
                // 'change input':'input_change'
            },
            add: function() {

              console.log("add")
             
                this.fname=$("#name")[0].value
                // console.log(this.fname)
                this.lname=$("#lname")[0].value
                this.email=$("#email")[0].value
                this.contact=$("#contact")[0].value
                this.type=$("#type")[0].value
                this.date=$("#date")[0].value
                this.time=$("#time")[0].value
                this.venue=$("#plc")[0].value
                this.model.set({fname: this.fname, lname:this.lname , email: this.email, tel:this.contact ,type:this.type,date:this.date,time:this.time,venue:this.venue})
                
                this.model.save()
                router.navigate("events",{trigger: true})
                 return false;
            },
            // input_change:function(e){
            //   var $input=$(e.currentTarget);
            //   var inputName=$input.attr('fname');    // this doesn't work and I'm trying to get to work
            //    var inputLname=$input.attr('lname');
              

            //   // console.log(inputName+inputLname)
            // },
            readData:function(){
                console.log("update");
               
              var id=this.model.attributes.id
              console.log(id)
              var transaction = db.transaction(["event-list"], "readwrite");
              var objectStore = transaction.objectStore("event-list");
               
            
               objectStore.openCursor().onsuccess = function(event) {
               var cursor = event.target.result;
               if(cursor){
               if (cursor.key==id) {
                
                cursor.value.fname=$("#name")[0].value
                cursor.value.lname=$("#lname")[0].value
                cursor.value.email=$("#email")[0].value
                cursor.value.contact=$("#contact")[0].value
               cursor.value.type=$("#type")[0].value
               cursor.value.date=$("#date")[0].value
                cursor.value.time=$("#time")[0].value
                cursor.value.venue=$("#plc")[0].value
                
                console.log(cursor.value)
                cursor.update(cursor.value)
                router.navigate("events",{trigger: true})


               }
               cursor.continue();
               }
               
            };
              console.log( this.model)
               return false;
            }
          });
