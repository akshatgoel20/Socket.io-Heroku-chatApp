This is the demo code given at socket.io demo's section.

http://socket.io/get-started/chat/

It has been adapted for heroku.

SETUP

Prerequisites  
1. Node.js  
2. Git  
3. heroku cli tools  

Steps to follow to get it to work on heroku.  
1. Git clone this repo  
2. cd into the repo  
3. Run the following commands  
   npm install --save express  
   npm install --save socket.io  
4. $ heroku create  
5. $ git add .  
6. $ git commit -m 'Demo'  
7. $ git push heroku master  
8. $ heroku open  

NOTE: To view heroku logs do : $ heroku logs --tail

A working demo can be found at  
https://enigmatic-woodland-8683.herokuapp.com

NOTE:This demo will be updates in future with code which may not be present in
this repo. But none the less you can be assured that the code in the repo
works.
