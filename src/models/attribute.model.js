var AttributeModel = (function () {
    function AttributeModel(input, fb) {
        if (!input)
            input = {};
        this.name = input["name"] || "";
        this.type = input["type"] || "";
        this.value = input["value"] || "";
        if (fb)
            this.formGroup = fb.group({
                name: [this.name],
                type: [this.type],
                value: [this.value]
            });
    }
    AttributeModel.prototype.getFormGroup = function () {
        return this.formGroup;
    };
    return AttributeModel;
}());
export { AttributeModel };
//# sourceMappingURL=attribute.model.js.map