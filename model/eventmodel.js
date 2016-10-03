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
                tel:'',
                showbtn:true
            },
            save:function(event){
               var data = new FormData();

               console.log(data)
                var request = db.transaction(["event-list"], "readwrite")
                .objectStore("event-list")
                .add(this.toJSON());
            },
}); 
