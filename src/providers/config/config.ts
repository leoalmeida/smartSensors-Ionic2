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

  // Which queues?
  publish: string[];
  subscribe: string[];

  // How often to heartbeat?
  keepalive?: number;
};
