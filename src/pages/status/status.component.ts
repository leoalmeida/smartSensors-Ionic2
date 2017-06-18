import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MQTTService } from '../../providers/mqtt/mqtt.service';
import { TransportState, TransportStateColor } from "../../providers/mqtt/transport.service";

/**
 * MQ connection status as a component
 */
@Component({
  selector: 'app-mq-status',
  templateUrl: './status.html'
})
export class StatusComponent implements OnInit {

  public state: Observable<string>;
  public colorstate: Observable<string>;

  constructor(private _mqService: MQTTService) { }

  ngOnInit() {
    console.log('Status init');
    this.state = this._mqService.state
      .map((state: number) => TransportState[state]);
    this.colorstate = this._mqService.state
      .map((state: number) => TransportStateColor[state]);
  }

}
