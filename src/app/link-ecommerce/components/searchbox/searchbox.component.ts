import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [
  ]
})
export class SearchboxComponent {
  @Input()
  public placeholder:string=''

  @Output()
  public onvalue = new EventEmitter<string>
  termBusqueda(value:string):void{
    this.onvalue.emit(value);
  }
}
