/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready


var appState = {
  takingPicture: true,
  imageUri: ""
};


var config = {
  interval: 30*1000, // 60 seconds
  useWakelock: false
}

var APP_STORAGE_KEY = "exampleAppState";

var app = {
  initialize: function() {
      this.bindEvents();
  },
  bindEvents: function() {
      // Here we register our callbacks for the lifecycle events we care about
      document.addEventListener('deviceready', this.onDeviceReady, false);
      document.addEventListener('pause', this.onPause, false);
      document.addEventListener('resume', this.onResume, false);
  }, 
  takeScreenShot: function() {
    
      
    },
  onDeviceReady: function() {
    
    // SimpleTimer.start(this.onTimerTick, this.errorStart, config);
    var count =10;
    while(count--){
      setTimeout(function(){
        navigator.screenshot.save(function(error,res){
          if(error){
            console.error(error);
          }else{
            console.log('ok',res.filePath); //should be path/to/myScreenshot.jpg
          }
        },'jpg',80,'myScreenShot'+count.toString());

      },1000);
    
    }
    // document.getElementById("take-picture-button").addEventListener("click", function() {
      
    // });
},

  onTimerTick: function() {
    console.log('timer tick');
    
  }
  ,onStopped: function() {
    console.log('timer is stopped');
  },
  errorStart: function(error) {
    console.log('timer start failed: ' + message);
  },

  onPause: function() {
      
  },
  onResume: function(event) {
      
  }
}



app.initialize();