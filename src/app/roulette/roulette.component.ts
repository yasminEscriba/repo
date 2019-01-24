import { Component, OnInit } from '@angular/core';
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
  constructor(){
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
          {'image' : 'assets/images/slide1.png', 'text' : '1 Auto 0km'}, // 0 - 60 (10-50)
          {'image' : 'assets/images/slide2.png', 'text' : '+1000 oportunidades más'}, // 61 - 120 (70 - 110)
          {'image' : 'assets/images/slide3.png', 'text' : '1 Cesta llena en plaza vea'}, // 121 - 180 (130 - 170)
          {'image' : 'assets/images/slide4.png', 'text' : '+10 oportunidades más'}, // 181 - 240 (190 - 230)
          {'image' : 'assets/images/slide5.png', 'text' : '1 Bembos combo royal'}, // 241 - 300 (250 - 290)
          {'image' : 'assets/images/slide6.png', 'text' : '+800 oportunidades más'} // 301 - 360 (310 - 350)
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
  }
  circleClick(){
    if(!this.theWheel.endRoulette){
      var clickcircletrue=this.theWheel.clickcircle(event);
      if(clickcircletrue){
          // sping ruleta   
          this.theWheel.endRoulette=true;
          this.rouletteAnimation();
      }
    }
  }
  private rouletteAnimation(){
    this.theWheel.animation = this.rouletteSettingAnimation;
    this.theWheel.startAnimation();
    this.theWheel.changeCircle();
  }

}
