import { ConnectionModel } from "./connection.model";
import { AttributeModel } from "./attribute.model";
var EquipmentModel = (function () {
    function EquipmentModel(input, fb) {
        this.info = [];
        this.configurations = [];
        this.fb = fb;
        if (fb) {
            this.formInfoArray = fb.array([]);
            this.formConfigArray = fb.array([]);
        }
        if (input.template)
            this.fillTemplate(input, fb);
        else {
            if (!input)
                input = {};
            this.connected = input["connected"] || false;
            this.enabled = input["enabled"] || false;
            this.updatedValue = input["updatedValue"] || "";
            this.sync = input["sync"] || Date.now();
            this.unit = input["unit"] || "%";
            this.icon = input["icon"] || "assets/icons/motion.svg";
            this.image = input["image"] || "assets/images/profile_header0.png";
            this.label = input["label"] || "Teste";
            this.description = input["description"] || "Descricao Teste";
            this.name = input["name"] || "Teste EEEE";
            if (input["info"])
                for (var _i = 0, _a = input["info"]; _i < _a.length; _i++) {
                    var itemInfo = _a[_i];
                    var attr_1 = new AttributeModel(itemInfo, fb);
                    this.info.push(attr_1);
                    if (fb)
                        this.formInfoArray.push(attr_1.getFormGroup());
                }
            ;
            if (input["configurations"])
                for (var _b = 0, _c = input["configurations"]; _b < _c.length; _b++) {
                    var itemConf = _c[_b];
                    var attr = new AttributeModel(itemConf, fb);
                    this.configurations.push(attr);
                    if (fb)
                        this.formConfigArray.push(attr.getFormGroup());
                }
            ;
        }
        this.connection = new ConnectionModel(input["connection"], fb);
        if (fb)
            this.formGroup = fb.group({
                updatedValue: [this.updatedValue],
                connected: [this.connected],
                enabled: [this.enabled],
                name: [this.name],
                label: [this.label],
                description: [this.description],
                unit: [this.unit],
                image: [this.image],
                icon: [this.icon],
                sync: [this.sync],
                connection: this.connection.getFormGroup(),
                info: this.formInfoArray,
                configurations: this.formConfigArray,
            });
    }
    EquipmentModel.prototype.fillTemplate = function (input, fb) {
        this.connected = false;
        this.enabled = false;
        this.updatedValue = "";
        this.sync = Date.now();
        this.unit = "%";
        this.icon = "assets/icons/motion.svg";
        this.image = "assets/images/profile_header0.png";
        this.label = "Teste";
        this.description = "Descricao Teste";
        if (input.template.info)
            for (var _i = 0, _a = input.template.info; _i < _a.length; _i++) {
                var item = _a[_i];
                this[item.name] = item.value;
            }
        if (input.template.properties)
            for (var _b = 0, _c = input.template.properties; _b < _c.length; _b++) {
                var item = _c[_b];
                var attr = new AttributeModel(item, fb);
                this.configurations.push(attr);
                if (this.fb)
                    this.formConfigArray.push(attr.getFormGroup());
            }
        ;
    };
    EquipmentModel.prototype.getFormGroup = function () {
        return this.formGroup;
    };
    return EquipmentModel;
}());
export { EquipmentModel };
//# sourceMappingURL=equipment.model.js.map