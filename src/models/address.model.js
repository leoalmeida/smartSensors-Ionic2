var AddressModel = (function () {
    function AddressModel(input, fb) {
        this.type = "Point";
        this.coordinates = [];
        if (!input)
            input = {};
        this.coordinates = input["coordinates"] || [-21.980912, -47.881260];
        this.text = input["text"] || "R. dos Bem-te-vis, 321";
        if (fb)
            this.formGroup = fb.group({
                text: [this.text],
                coordinates: [this.coordinates],
                type: [this.type]
            });
    }
    AddressModel.prototype.getFormGroup = function () {
        return this.formGroup;
    };
    return AddressModel;
}());
export { AddressModel };
//# sourceMappingURL=address.model.js.map