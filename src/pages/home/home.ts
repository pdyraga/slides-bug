import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Gesture, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild(Slides) slides: Slides;

  ngOnInit() {
    this.slides.speed = 50;
  }

  public images: Image[] = [
    new Image("https://s3-us-west-2.amazonaws.com/flickering/1.jpg"),
    new Image("https://s3-us-west-2.amazonaws.com/flickering/2.jpg"),
    new Image("https://s3-us-west-2.amazonaws.com/flickering/3.jpg"),
    new Image("https://s3-us-west-2.amazonaws.com/flickering/4.jpg"),
    new Image("https://s3-us-west-2.amazonaws.com/flickering/5.jpg"),
    new Image("https://s3-us-west-2.amazonaws.com/flickering/6.jpg"),
    new Image("https://s3-us-west-2.amazonaws.com/flickering/7.jpg"),
    new Image("https://s3-us-west-2.amazonaws.com/flickering/8.jpg"),
    new Image("https://s3-us-west-2.amazonaws.com/flickering/9.jpg"),
    new Image("https://s3-us-west-2.amazonaws.com/flickering/10.jpg"),
    new Image("https://s3-us-west-2.amazonaws.com/flickering/11.jpg")
  ]

  slideNext() {
    this.slides.slideNext();
  }

  ionSlideNextEnd() {
  }
}

export class Image {
  constructor(public url: String) { }
}

@Component({
  selector: '[slider-card]',
  template:
  `
    <img class="card-image" src="{{image.url}}">
  `
})
export class SliderCard {
  @Input() image: Image;
  @Output() slideNext = new EventEmitter<void>();

  private gesture: Gesture;

  constructor(elementRef: ElementRef) {
    this.gesture = new Gesture(elementRef.nativeElement);
    this.gesture.listen();
    this.gesture.on('tap', (event) => {
      this.slideNext.emit();  
    });
  }
}