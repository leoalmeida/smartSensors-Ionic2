import { IClientPublishOptions } from 'mqtt';
/**
 * Represents a configuration object for the
 * Service to connect to, pub, and sub.
 */
export interface Config {
  // Which server?
  host: string;   // 'localhost' or '127.0.0.1'
  port: number;   // 15675
  path: string;   // 'ws'
  clientId: string;

  ssl: boolean;   // false

  lat: number;
  lng: number;
  distance: number;

  // What credentials?
  user: string;
  pass: string;

  pubsubOptions: IClientPublishOptions;

  // Which queues?
  publish: string[];
  subscriptions: {};

  // How often to heartbeat?
  keepalive?: number;
};

export interface Subscription {
  calibrated: boolean;
}
