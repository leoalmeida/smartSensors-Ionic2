import { RelationModel } from "./relation.model";
var AssociationModel = (function () {
    function AssociationModel(input, fb) {
        this.ownedBy = [];
        this.connectedTo = [];
        this.subscriberAt = [];
        this.likedTo = [];
        this.commentedAt = [];
        this.subscribedBy = [];
        this.fb = fb;
        if (fb) {
            this.formOwnedByArray = fb.array([]);
            this.formConnectArray = fb.array([]);
            this.formSubscriberAtArray = fb.array([]);
            this.formLikedToArray = fb.array([]);
            this.formCommentedAtArray = fb.array([]);
            this.formSubscribedByArray = fb.array([]);
        }
        if (input.template)
            this.fillTemplate(input, fb);
        else {
            if (!input)
                input = {};
            this.abstraction = input["abstraction"] || false;
            this.parent = input["parent"] || "";
            if (input["ownedBy"]) {
                for (var _i = 0, _a = input["ownedBy"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var relation = new RelationModel(item, fb);
                    this.ownedBy.push(relation);
                    if (fb)
                        this.formOwnedByArray.push(relation.getFormGroup());
                }
            }
            if (input["connectedTo"]) {
                for (var _b = 0, _c = input["connectedTo"]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    var relation = new RelationModel(item, fb);
                    this.connectedTo.push(relation);
                    if (fb)
                        this.formConnectArray.push(relation.getFormGroup());
                }
            }
            if (input["subscriberAt"]) {
                for (var _d = 0, _e = input["subscriberAt"]; _d < _e.length; _d++) {
                    var item = _e[_d];
                    var relation = new RelationModel(item, fb);
                    this.subscriberAt.push(relation);
                    if (fb)
                        this.formSubscriberAtArray.push(relation.getFormGroup());
                }
            }
            if (input["likedTo"]) {
                for (var _f = 0, _g = input["likedTo"]; _f < _g.length; _f++) {
                    var item = _g[_f];
                    var relation = new RelationModel(item, fb);
                    this.likedTo.push(relation);
                    if (fb)
                        this.formLikedToArray.push(relation.getFormGroup());
                }
            }
            if (input["commentedAt"]) {
                for (var _h = 0, _j = input["commentedAt"]; _h < _j.length; _h++) {
                    var item = _j[_h];
                    var relation = new RelationModel(item, fb);
                    this.commentedAt.push(relation);
                    if (fb)
                        this.formCommentedAtArray.push(relation.getFormGroup());
                }
            }
            if (input["subscribedBy"]) {
                for (var _k = 0, _l = input["subscribedBy"]; _k < _l.length; _k++) {
                    var item = _l[_k];
                    var relation = new RelationModel(item, fb);
                    this.subscribedBy.push(relation);
                    if (fb)
                        this.formSubscribedByArray.push(relation.getFormGroup());
                }
            }
        }
        if (fb)
            this.formGroup = fb.group({
                abstraction: [this.abstraction],
                parent: [this.parent],
                ownedBy: this.formOwnedByArray,
                connectedTo: this.formConnectArray,
                subscriberAt: this.formSubscriberAtArray,
                likedTo: this.formLikedToArray,
                commentedAt: this.formCommentedAtArray,
                subscribedBy: this.formSubscribedByArray
            });
    }
    AssociationModel.prototype.fillTemplate = function (input, fb) {
        this.parent = "";
        this.abstraction = false;
        if (input.template.relations)
            for (var _i = 0, _a = input.template.relations; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.name === "parent")
                    this.parent = item.value;
                else if (item.name === "abstraction")
                    this.abstraction = item.value;
                else if (item.values) {
                    for (var _b = 0, _c = item.values; _b < _c.length; _b++) {
                        var rel = _c[_b];
                        var relation = new RelationModel(rel.attributes, fb);
                        this[rel.name].push(relation);
                        if (rel.name === "ownedBy")
                            this.formOwnedByArray.push(relation.getFormGroup());
                        if (rel.name === "connectedTo")
                            this.formConnectArray.push(relation.getFormGroup());
                        if (rel.name === "subscriberAt")
                            this.formSubscriberAtArray.push(relation.getFormGroup());
                        if (rel.name === "likedTo")
                            this.formLikedToArray.push(relation.getFormGroup());
                        if (rel.name === "commentedAt")
                            this.formCommentedAtArray.push(relation.getFormGroup());
                        if (rel.name === "subscribedBy")
                            this.formSubscribedByArray.push(relation.getFormGroup());
                    }
                }
            }
        ;
    };
    AssociationModel.prototype.getFormGroup = function () {
        return this.formGroup;
    };
    return AssociationModel;
}());
export { AssociationModel };
//# sourceMappingURL=association.model.js.map