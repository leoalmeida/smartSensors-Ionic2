import { AssociationModel } from "./association.model";
import { EquipmentModel } from "./equipment.model";
import { ProfileModel } from "./profile.model";
import { AddressModel } from './address.model';
var KnowledgeModel = (function () {
    function KnowledgeModel(input, fb) {
        this.data = "";
        if (input.template)
            this.fillTemplate(input, fb);
        else {
            if (!input)
                input = {};
            this.type = input["type"] || "";
            this.category = input["category"] || "";
            if (!input["_id"])
                this._id = input["_id"];
            this.root = input["root"] || "";
            this.access = input["access"] || "public";
            this.version = input["version"] || "1.0";
            this.sync = input["sync"] || Date.now();
            if (this.type === "profile")
                this.data = new ProfileModel(input, fb);
            else
                this.data = new EquipmentModel(input, fb);
            this.relations = new AssociationModel(input, fb);
            this.location = new AddressModel(input, fb);
        }
        if (fb)
            this.formGroup = fb.group({
                type: [this.type],
                category: [this.category],
                access: [this.access],
                version: [this.version],
                root: [this.root],
                data: this.data.getFormGroup(),
                relations: this.relations.getFormGroup(),
                location: this.location.getFormGroup()
            });
    }
    KnowledgeModel.prototype.fillTemplate = function (input, fb) {
        this.root = input.template.root;
        this.type = input.template.type;
        this.category = input.template.category;
        this.access = "public";
        this.version = "1.0";
        this.sync = Date.now();
        this.data = new EquipmentModel(input, fb);
        this.relations = new AssociationModel(input, fb);
        this.location = new AddressModel(input, fb);
        //this.data.fillData(template);
        //this.relations.fillRelations(template.relations);
    };
    KnowledgeModel.prototype.getFormGroup = function () {
        return this.formGroup;
    };
    return KnowledgeModel;
}());
export { KnowledgeModel };
//# sourceMappingURL=knowledge.model.js.map