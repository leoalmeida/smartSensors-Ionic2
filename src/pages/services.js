(function() {
  'use strict';


  var re = new RegExp('^[{].*','g');
  //var host = 'http://smartsensors.herokuapp.com/';
  var host = 'http://127.0.0.1:3001/';

  //var host = 'http://' + location.host + '/';

  angular.module('app.services', [])
    .factory('ApiDataService', ApiDataService)
    .factory('UserService', UserService)
    .factory('ObjectsService', ObjectsService)
    .factory('ReferencesService', ReferencesService)
    .factory('TextMessageService', TextMessageService)
    .constant('API', {
      contacts: host + '/apis/user/',
      sensors: host + '/trigger/sensors/',
      actuators: host + '/trigger/actuators/',
      sinks: {
        withkey: host + '/trigger/sinks/withkey/',
        withoutkey: host + '/trigger/sinks/withoutkey/'
      },
      info: host + '/trigger/info/'
    });

  function ApiDataService() {
      var service = {
        getDataInfo: getDataInfo,
        RefDataInfo: RefDataInfo,
        sendTextMessages: sendTextMessages,
        startBoard: startBoard
      };

      return service;

      ////////////
      function getDataInfo(resource, association){
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          var t = new RefDataInfo(resource);

          var url = host + resource.join("/");

          xhr.open("GET", url, true);
          xhr.onreadystatechange = function(){
            if (!(this.status === 200)) {
              reject(Error("It is broke"));
            }else if (xhr.readyState == 4 && this.status == 200) {
              resolve(t.process(xhr));
            }
          }

          xhr.send();
        });
      };

      function RefDataInfo() {
        this.retcode = 0;
        this.retmsg = "";
        this.process = function (xhr) {
          var objSchema = {};
          var resp = JSON.parse(xhr.responseText);

          /*var row;
           for (row in resp) {
           if (resp[row]) this.data.push(JSON.parse(resp[row]));
           }*/
          return resp;
        };
      };
      function sendTextMessages(msg, destination){

      }

      function startBoard(data, cbSuccess, cbError) {
        return $http.post(API.sinks.withkey + data.sink + '/startboard', data).then(cbSuccess, cbError);
      }

  };
  function ObjectsService(ApiDataService) {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var items = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
      }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
      }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
      }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
      }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
      }];

      return {
        all: function(params) {
          return items;
        },
        remove: function(object) {
          objects.splice(objects.indexOf(object), 1);
        },
        get: function(params) {
          return ApiDataService.getDataInfo(params);
          /*for (var i = 0; i < objects.length; i++) {
            if (objects[i].id === parseInt(objectId)) {
              return objects[i];
            }
          }
          return null;
          */
        }
      };
    };
  function ReferencesService(ApiDataService) {
    // Might use a resource here that returns a JSON array

    return {
      all: function(params) {
        return ApiDataService.getDataInfo(["reference", "all"]);
      },
      remove: function(object) {
        return;
      },
      get: function(params) {
        return ApiDataService.getDataInfo(params);
      }
    };
  };
  function UserService() {
    // Might use a resource here that returns a JSON array
    //for the purpose of this example I will store user data on ionic local storage but you should save it on a database

    return {
      setUser: function(user_data) {
        console.log(JSON.stringify(user_data));
        window.localStorage.starter_facebook_user = JSON.stringify(user_data);
      },
      getUser: function(){
        return JSON.parse(window.localStorage.starter_facebook_user || '{}');
      }
    };
  };
  function TextMessageService(ApiDataService) {
    var service = {
      sendTextMessage: sendTextMessage
    };

    return service;

    ////////////

    function sendTextMessage(party, parties) {
      var newTextMessage = {
        phoneNumber: party.phone,
        size: party.size,
        name: party.name
      };
      ApiDataService.sendTextMessages(newTextMessage);
      party.notified = true;
      parties.$save(party);
    }
  }
})();

