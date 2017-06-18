var RelationModel = (function () {
    function RelationModel(input, fb) {
        if (!input)
            input = {};
        this.id = input["id"] || "";
        this.sync = input["sync"] || Date.now();
        this.access = input["access"] || "public";
        this.publish = input["publish"] || false;
        this.view = input["view"] || false;
        if (fb)
            this.formGroup = fb.group({
                sync: [this.sync],
                id: [this.id],
                view: [this.view],
                publish: [this.publish],
                access: [this.access]
            });
    }
    RelationModel.prototype.getFormGroup = function () {
        return this.formGroup;
    };
    return RelationModel;
}());
export { RelationModel };
//# sourceMappingURL=relation.model.js.map