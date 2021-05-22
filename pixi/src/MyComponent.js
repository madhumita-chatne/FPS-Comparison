import React from 'react';
import * as PIXI from "pixi.js";
import myImage from './logo192.png';
import {FpsView} from "react-fps";


class MyComponent extends React.Component {
  state = {
    pixi_cnt: null,
    app: null,
    fps: 0,
    then : 0,
    numImages : 500

  }
  constructor(props) {
    super(props);
    this.state.pixi_cnt = null;
    this.state.app = new PIXI.Application({ width: 1800, height: 1800, transparent: false })
  }


  updatePixiCnt = (element) => {
    // the element is the DOM object that we will use as container to add pixi stage(canvas)
    this.pixi_cnt = element;
    //now we are adding the application to the DOM element which we got from the Ref.
    if (this.pixi_cnt && this.pixi_cnt.children.length <= 0) {
      this.pixi_cnt.appendChild(this.state.app.view);
      //The setup function is a custom function that we created to add the sprites. We will this below
      this.setup();
    }
  };

  setup = () => {
    for (var i = 0; i < this.state.numImages; i++) {
      PIXI.loader
        .add(`avatar${i}`, 'https://webglfundamentals.org/webgl/resources/star.jpg')
    }
    PIXI.loader
      .load(this.initialize);
  };
  initialize = () => {
    //----------
    //We will create a sprite and then add it to stage and (0,0) position
    //  this.avatar = new PIXI.Sprite(PIXI.loader.resources["avatar"].texture);

    //  this.state.app.stage.addChild(this.avatar);
    //-------------

    var col = 0;
    var row =0;
    for (var i = 0; i < this.state.numImages; i++) {
      var starImages = new PIXI.Sprite(PIXI.loader.resources[`avatar${i}`].texture);
      // center the sprite anchor point
      // starImages.anchor.x = 0;
      // starImages.anchor.y = 0;
      if(i%50 == 0){
        col++;
        row =0;
      }else{
        starImages.position.x =  col*90;
        starImages.position.y = row *100;
        this.state.app.stage.addChild(starImages);
      }
      row++;
    }

  };

  render() {
    return(<>
    <FpsView/> 
    <div ref={this.updatePixiCnt} /></>)
  }
}

export default MyComponent;