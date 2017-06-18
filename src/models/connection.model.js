var ConnectionModel = (function () {
    function ConnectionModel(input, fb) {
        if (!input)
            input = {};
        this.host = input["host"] || "192.168.0.2";
        this.port = input["port"] || 3001;
        this.baudrate = input["baudrate"] || 57600;
        if (fb)
            this.formGroup = fb.group({
                host: [this.host],
                port: [this.port],
                baudrate: [this.baudrate]
            });
    }
    ConnectionModel.prototype.getFormGroup = function () {
        return this.formGroup;
    };
    return ConnectionModel;
}());
export { ConnectionModel };
//# sourceMappingURL=connection.model.js.map