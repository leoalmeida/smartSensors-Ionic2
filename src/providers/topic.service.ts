import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Subject} from 'rxjs/Subject';
import { NativeStorage } from '@ionic-native/native-storage';
import {WebSocketService} from './websocket.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { MessageModel }  from '../models/interfaces'

@Injectable()
export class TopicService {
	public messages: Subject<MessageModel>  = new Subject<MessageModel>();
	public randomData: Subject<number> = new Subject<number>();

	constructor(private platform: Platform,
		private wsService: WebSocketService,
		private nativeStorage: NativeStorage) {

		this.platform.ready().then((readySource) => {
			this.nativeStorage.getItem('smartSensors.pubsubConnection')
				.then(connection => {
						if (connection)
							var topicUrl = connection.schema + "://" + connection.host + ":" + connection.port;
							// 1. subscribe to TOPICbox
							this.messages   = <Subject<MessageModel>>this.wsService
								.connect(topicUrl)
								.map((response: MessageEvent): MessageModel => {
									return JSON.parse(response.data);
								});
					},
					error => {
						console.error(error);
					});
		});
	}
} // end class TopicService
