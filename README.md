Video on Demand Application
===========================

This is a sample nodejs application which allows scrolling a list of videos in a horizontal carousel and play selected videos. Live demo is available in [this link](https://still-escarpment-8617.herokuapp.com/).

##To begin
---

1. Install nodejs (http://nodejs.org/download/)
2. Clone or download the project in to pc.
3. Run ``` npm install ``` to install all node module dependancies 
4. Run ```  node index.js ``` to run the application
5. Application web app will be availabe in http://localhost:3000/ 

## Features

- Load a list of videos from a [sample api](https://demo2697834.mockable.io/movies). Note: Image downloaing time is reletively slow in this api. 
- Alllows to select a video from the view and play in full screen
- User can use either mouse or keyboard left, right arrowkeys to select a video
- User can play video by clicking the play button of a video tile or by pressing enter key once seleted a tile.
- User will be able to view all the videos watched previously by clicking History icon in header.
- User can play videos in history view by clicking on video caption images
- Once a video is finished playing, full screen video view will be automatically closed.
