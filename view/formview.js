eveView = Backbone.View.extend({
            initialize: function() {
                console.log(this.model.attributes);

                this.render();
                $('#eventList').empty() 
                if(this.model.attributes.showbtn){
                 $("#updatebtn").addClass('hidden'); 
                }
                else{
                  $("#addbtn").addClass('hidden'); 
                }
            },

            tagName: "div",
           
            render: function() { 
              // console.log(this.$el)
                var context = this.model.toJSON();
                var source   = $("#form_template").html();
                var template = Handlebars.compile(source);
                this.$el.html(template(context));
                
                $("#container").html(this.$el)
                return this;
            },
            events: {
                'click #addbtn': 'add',
                'click #updatebtn': 'readData'
                
            },
            add: function() {
              $("#eventList").append("<img id='theImg' src='img/ajax-loader.gif'/>");
		// console.log("xcasdsadadsd");
              $.ajax({
                type: "POST",
                url: "collection/event.php",
                data: $("#formdata").serialize(),
                success: function(data)
                { 
                  var D =JSON.parse(data) ;
                  console.log(D)
                  if (D.fname=="valid") {
                     D.status="valid";
                    $("#fname").removeClass('visible').addClass('hidden');
                    // $("#fname").html(data);
                  }
                  else{
                    // D.status="fail";

                   $("#fname").html(D.fname);
                   $("#fname").removeClass('hidden').addClass('visible');
                  }
                  if (D.lname=="valid") {
                     D.status="valid";
                    $("#lastname").removeClass('visible').addClass('hidden');
                    // $("#lastname").html(data);
                  }
                  else{
                    // D.status="fail";

                   $("#lastname").html(D.lname);
                   $("#lastname").removeClass('hidden').addClass('visible');
                  }
                  if (D.lname=="valid") {
                    D.status="valid";
                    $("#lastname").removeClass('visible').addClass('hidden');
                    // $("#lastname").html(data);
                  }
                  else{
                    // D.status="fail";

                   $("#lastname").html(D.lname);
                   $("#lastname").removeClass('hidden').addClass('visible');
                  }
                  if (D.status=='valid') {
                  //  console.log("valid")
                    router.navigate("events",{trigger: true});
                  }
                } 
              })

              
                   return false;
                // }
                 
            },
            
            readData:function(){
              $("#eventList").append("<img id='theImg' src='img/ajax-loader.gif'/>");
		$("#addbtn").addClass('hidden');
              var id=this.model.attributes.id;
              var div=this.$el;
              var fname=div.find("input#name").val()
              var lname=div.find("input#lname").val()
              var email=div.find("input#email").val()
              var contact=div.find("input#contact").val()

              var type=div.find("#type").val()
              console.log(type);
              var date=div.find("input#date").val()
              var time=div.find("input#time").val()
              var venue=div.find("input#plc").val()
              $.ajax({
                type: "POST",
                url: "collection/update.php",
                data: {'id':id,'fname':fname,'lname':lname,'email':email,'contact':contact,'type':type,'date':date,'time':time,'venue':venue},
                success: function(data)
                { 
                  console.log(data);
                } 
              })
            
              console.log( this.model)
              router.navigate("events",{trigger: true})
               return false;
            }
          });
