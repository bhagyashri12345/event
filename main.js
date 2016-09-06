window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
         
         if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
         }
         
         var db;
         var request = window.indexedDB.open("eveDB", 1);
         
         request.onerror = function(event) {
            console.log("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
            console.log("success: "+ db);
              Backbone.history.start()      

         };
         
         request.onupgradeneeded = function(event) {
            db = event.target.result;
            var objectStore = db.createObjectStore("event-list", {keyPath: "id"}, { autoIncrement : true });
            console.log(objectStore)
            
            
         }
         
      


  var eve={
    Routers: {}
  
  };

router = new Routers();
