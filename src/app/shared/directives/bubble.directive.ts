import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appBubble]'
})
export class BubbleDirective implements OnInit {

  private _defaultConfig: any = {
    height: '2em',
    width: '2em',
    lineHeight: '2em', // equiv css : line-height
    backgroundColor: 'rgba(20, 20, 150, .7)',
    borderRadius: '50%',
    fontWeight: 'bold',
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'inline-block'    
  }

  /**
   * Object that merge default and config passed as @Input()
   */
  private _config: any = {};

  @Input() public set config(inputConfig: any) {
    // Boucler sur les propriétés de l'attribut defaultConfig de la directive
    for (const property in this._defaultConfig) {
      if (inputConfig.hasOwnProperty(property)) {
        this._config[property] = inputConfig[property];
      } else {
        this._config[property] = this._defaultConfig[property];
      }
    }

    // Boucler sur l'objet passé en paramètre pour ajouter les autres éventuelles propriétés
    for (const property in inputConfig) {
      if (!this._defaultConfig.hasOwnProperty(property)) {
        this._config[property] = inputConfig[property];
      }
    }
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.elementRef.nativeElement;
    for (const property in this._config) {
      this.renderer.setStyle(nativeElement, property, this._config[property]);
    }
  }
    
  @HostListener('click') public onClick() {
    const nativeElement: HTMLElement = this.elementRef.nativeElement;
    this.renderer.addClass(nativeElement, 'zoom-in');
    setTimeout(
      () => {
        this.renderer.removeClass(nativeElement, 'zoom-in')
      },
      1000
    );
  }

}
