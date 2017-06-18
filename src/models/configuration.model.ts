export class ConfigurationModel {
  public controller: string;
  public events: Array<string> = [];
  public model: string;
  public pin: string;
  public analogic: any;
  public loop: number;
  public maxval: number;
  public minval: number;
  public threshold: number;
  public sync: number;

  constructor(input?: any){
    if (!input) input = {};
    this.controller = input["controller"] || "";
    this.events = input["events"] || [];
    this.model = input["model"] || "";
    this.pin = input["pin"] || "";
    this.analogic = input["analogic"] || [];
    this.loop = input["loop"] || 0;
    this.maxval = input["maxval"] || 0;
    this.minval = input["minval"] || 0;
    this.threshold = input["threshold"] || 0;
    this.sync = input["sync"] || Date.now();
  }
}
