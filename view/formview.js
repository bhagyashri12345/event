eveView = Backbone.View.extend({
            initialize: function() {
                this.render();
                $('#eventList').empty() 
            },

            tagName: "div",
           
            render: function() { 
              console.log(this.$el)
                var context = this.model.toJSON();
                var source   = $("#form_template").html();
                var template = Handlebars.compile(source);
                this.$el.html(template(context));
                
                $("#container").html(this.$el)
                return this;
            },
            events: {
                'click .add': 'add',
                'click .updateData': 'readData'
                
            },
            add: function() {
              $('#eventList').empty() 
              // console.log(this.$el.find("input#name").val())
              // console.log($("#name")[0].value)
             
                this.fname=this.$el.find("input#name").val()
                // console.log(this.fname)
                this.lname=this.$el.find("input#lname").val()
                this.email=this.$el.find("input#email").val()
                this.contact=this.$el.find("input#contact").val()
                this.type=this.$el.find("input#type").val()
                this.date=this.$el.find("input#date").val()
                this.time=this.$el.find("input#time").val()
                this.venue=this.$el.find("input#plc").val()
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
               $('#eventList').empty() 
              var id=this.model.attributes.id
              var div=this.$el
              var transaction = db.transaction(["event-list"], "readwrite");
              var objectStore = transaction.objectStore("event-list");
               
            
               objectStore.openCursor().onsuccess = function(event) {
               var cursor = event.target.result;
               if(cursor){
               if (cursor.key==id) {
                
                cursor.value.fname=div.find("input#name").val()
                cursor.value.lname=div.find("input#lname").val()
                cursor.value.email=div.find("input#email").val()
                cursor.value.contact=div.find("input#contact").val()
               cursor.value.type=div.find("input#type").val()
               cursor.value.date=div.find("input#date").val()
                cursor.value.time=div.find("input#time").val()
                cursor.value.venue=div.find("input#plc").val()
                
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
