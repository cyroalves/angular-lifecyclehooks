import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
 {
  @Input('srvElement') element: {type:string, name:string, content:string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log("consctructor called")
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log("changes called")
    console.log(changes)
   }

  ngOnInit(): void {
    console.log("ngoninit called")
    console.log(this.header.nativeElement.textContent)
    console.log("contentparagraph on init" + this.paragraph.nativeElement.textContent)
  }
  
  ngDoCheck(): void {
      console.log("ngdocheck called")
  }

  ngAfterContentInit(): void {
      console.log("ngaftercontetnt init called")
      console.log("contentparagraph after content init" + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log("ngafterchecked init called")

  }

  ngAfterViewInit(): void {
    console.log("ngafterview init called")
    console.log("header after view " + this.header.nativeElement.textContent)

}

ngAfterViewChecked(): void {
  console.log("ngafterviewchecked init called")

}

ngOnDestroy(): void {
    console.log("ng on destroy")
}
}
