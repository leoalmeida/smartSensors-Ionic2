import { Component, EventEmitter, Input, Output, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

declare var Plotly: any;

@Component({
  selector: 'plotlychart',
  templateUrl: './plotly.component.html'
})

export class PlotlyComponent implements OnInit {
    @ViewChild('myPlotlyDiv') myPlotlyDiv: ElementRef;
    @Input() data: any;
    @Input() layout: any;
    @Input() options: any;
    @Input() displayRawData: boolean;

    constructor() { }

    ngOnInit() {
        var myPlotlyDiv = this.myPlotlyDiv.nativeElement;
        console.log("ngOnInit PlotlyComponent");
        console.log(this.data);
        console.log(this.layout);

        Plotly.newPlot(myPlotlyDiv, this.data, this.layout, this.options);
    }
}
