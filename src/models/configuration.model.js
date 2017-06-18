var ConfigurationModel = (function () {
    function ConfigurationModel(input) {
        this.events = [];
        if (!input)
            input = {};
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
    return ConfigurationModel;
}());
export { ConfigurationModel };
//# sourceMappingURL=configuration.model.js.map