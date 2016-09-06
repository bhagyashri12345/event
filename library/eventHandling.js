var eve={};
eve.Router = Backbone.Router.extend({
            routes: {
                // ':filter': 'setFilter'
            },
            setFilter: function(params) {
                console.log(params)
                // window.filter = params.trim() || '';
               // app.todoList.trigger('reset');
                // console.log(window.filter)
            }
        });

        eve.router = new eve.Router();
        Backbone.history.start();




