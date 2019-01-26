import { Component, OnInit } from '@angular/core';
import { RouletteService } from '../services/roulette.service';
declare var Winwheel: any;
@Component({
  selector: 'abe-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {

  theWheel: any = [];
  rouletteSetting: object = {};
  rouletteSettingAnimation: object = {};
  endRoulette: boolean = false; // end pins
  constructor(private rouletteServices: RouletteService){
  }
  ngOnInit() {
    this.rouletteSetting = {
      'numSegments'  : 6,
      'textFontSize' : 22,
      'textAlignment'     : 'outer',
      'textOrientation'   : 'curved',
      'textMargin'        : 45,
      'responsive'   : true,
      'drawMode'          : 'segmentImage',
      'canvasId' : 'canvas',
      'endRoulette' : this.endRoulette,
      'segments'     :
      [
          {'id':1, 'image' : 'assets/images/slide1.png', 'text' : '1 Auto 0km', 'stopangle': 10}, // 0 - 60 (10-50)
          {'id':2, 'image' : 'assets/images/slide2.png', 'text' : '+1000 oportunidades más', 'stopangle': 70}, // 61 - 120 (70 - 110)
          {'id':3, 'image' : 'assets/images/slide3.png', 'text' : '1 Cesta llena en plaza vea', 'stopangle': 130}, // 121 - 180 (130 - 170)
          {'id':4, 'image' : 'assets/images/slide4.png', 'text' : '+10 oportunidades más', 'stopangle': 190}, // 181 - 240 (190 - 230)
          {'id':5, 'image' : 'assets/images/slide5.png', 'text' : '1 Bembos combo royal', 'stopangle': 250}, // 241 - 300 (250 - 290)
          {'id':6, 'image' : 'assets/images/slide6.png', 'text' : '+800 oportunidades más', 'stopangle': 310} // 301 - 360 (310 - 350)
      ],
      'pins' :
      {
          'outerRadius': 6,
          'responsive' : true, // This must be set to true if pin size is to be responsive.
      },
    }
    this.theWheel = new Winwheel(this.rouletteSetting);
    this.rouletteSettingAnimation = {
      'type'     : 'spinToStop',
      'duration' : 6,     // otg parametro | a mayor valor mas lento el giro, Duration in seconds.
      'spins'    : 3,     // otg parametro | # giro a mayor valor más duración,Default number of complete spins.
      //'startAngle' : 100,
      'stopAngle': 80,    // otg parametro | angle de ganador
      'easing'   : 'spinToStop', //'Power2.easeInOut',
      'segmentWinner' : this.theWheel.getIndicatedSegment()
    };

    this.theWheel.animation = this.rouletteSettingAnimation;
  }
  circleClick(){
    if(!this.theWheel.endRoulette){
      var clickcircletrue=this.theWheel.clickcircle(event);
      if(clickcircletrue){
          // sping ruleta   
          let countmstimeout=0
          this.theWheel.endRoulette=true;
          this.rouletteAnimation();
          setTimeout(()=>{ countmstimeout+=1 }, 1);
          //setTimeout(()=>{
            this.rouletteServices.getWinner().subscribe((result) => {
              try{
                let xstopangle=null;
                this.rouletteSetting['segments'].forEach(element => {
                  if(element['id'] == result.idwinner){
                    xstopangle=element['stopangle'];
                  }
                });
                  this.theWheel.animation.propertyValue -= this.theWheel.animation._stopAngle
                  this.theWheel.animation.stopAngle = xstopangle;
                  this.theWheel.animation._stopAngle = (360 - this.theWheel.animation.stopAngle + this.theWheel.pointerAngle);
                  this.theWheel.animation.propertyValue += this.theWheel.animation._stopAngle
                  let durationTimeout = this.theWheel.animation.duration - countmstimeout;
                  this.theWheel.animation.spins = this.theWheel.animation.spins + durationTimeout;
                  this.theWheel.startAnimationTimeout(this.theWheel.animation.propertyValue,durationTimeout);
                
              }catch(err){
                top.location.href="/";
              }

            }, (err) => {});      

          //}, 1000);
      }
    }
  }
  private rouletteAnimation(){
    this.theWheel.startAnimation();
    this.theWheel.changeCircle();
  }

}
