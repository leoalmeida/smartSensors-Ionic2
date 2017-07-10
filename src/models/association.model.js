import { RelationModel } from "./relation.model";
var AssociationModel = (function () {
    function AssociationModel(input, fb) {
        this.abstrations = [];
        this.elements = [];
        this.subscribedBy = [];
        this.subscriberAt = [];
        this.ownedBy = [];
        this.presentedBy = [];
        this.commentedBy = [];
        this.commentedAt = [];
        this.statedTo = [];
        this.actedAt = [];
        this.likedTo = [];
        this.connectedTo = [];

        this.fb = fb;
        if (fb) {
          this.formAbstrationsArray = fb.array([]);
          this.formElementsArray = fb.array([]);
          this.formSubscribedByArray = fb.array([]);
          this.formSubscriberAtArray = fb.array([]);
          this.formOwnedByArray = fb.array([]);
          this.formPresentedByArray = fb.array([]);
          this.formCommentedByArray = fb.array([]);
          this.formCommentedAtArray = fb.array([]);
          this.formStatedToArray = fb.array([]);
          this.formActedAtArray = fb.array([]);
          this.formLikedToArray = fb.array([]);
          this.formConnectedToArray = fb.array([]);
        }
        if (input.template)
            this.fillTemplate(input, fb);
        else {
            if (!input)
                input = {};
            if (input["abstractions"]) {
                for (var _b = 0, _c = input["abstractions"]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    var relation = new RelationModel(item, fb);
                    this.abstractions.push(relation);
                    if (fb)
                        this.formAbstrationsArray.push(relation.getFormGroup());
                }
            }
            if (input["elements"]) {
                for (var _b = 0, _c = input["elements"]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    var relation = new RelationModel(item, fb);
                    this.elements.push(relation);
                    if (fb)
                        this.formElementsArray.push(relation.getFormGroup());
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
            if (input["subscriberAt"]) {
                for (var _d = 0, _e = input["subscriberAt"]; _d < _e.length; _d++) {
                    var item = _e[_d];
                    var relation = new RelationModel(item, fb);
                    this.subscriberAt.push(relation);
                    if (fb)
                        this.formSubscriberAtArray.push(relation.getFormGroup());
                }
            }
            if (input["ownedBy"]) {
                for (var _i = 0, _a = input["ownedBy"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var relation = new RelationModel(item, fb);
                    this.ownedBy.push(relation);
                    if (fb)
                        this.formOwnedByArray.push(relation.getFormGroup());
                }
            }
            if (input["presentedBy"]) {
                for (var _b = 0, _c = input["presentedBy"]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    var relation = new RelationModel(item, fb);
                    this.presentedBy.push(relation);
                    if (fb)
                        this.formPresentedByArray.push(relation.getFormGroup());
                }
            }
            if (input["commentedBy"]) {
                for (var _b = 0, _c = input["commentedBy"]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    var relation = new RelationModel(item, fb);
                    this.commentedBy.push(relation);
                    if (fb)
                        this.formCommentedByArray.push(relation.getFormGroup());
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
            if (input["statedTo"]) {
                for (var _b = 0, _c = input["statedTo"]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    var relation = new RelationModel(item, fb);
                    this.statedTo.push(relation);
                    if (fb)
                        this.formStatedToArray.push(relation.getFormGroup());
                }
            }
            if (input["actedAt"]) {
                for (var _b = 0, _c = input["actedAt"]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    var relation = new RelationModel(item, fb);
                    this.actedAt.push(relation);
                    if (fb)
                        this.formActedAtArray.push(relation.getFormGroup());
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
            if (input["connectedTo"]) {
                for (var _f = 0, _g = input["connectedTo"]; _f < _g.length; _f++) {
                    var item = _g[_f];
                    var relation = new RelationModel(item, fb);
                    this.connectedTo.push(relation);
                    if (fb)
                        this.formConnectedToArray.push(relation.getFormGroup());
                }
            }
        }
        if (fb)
            this.formGroup = fb.group({
                abstractions: [this.abstractions],
                elements: [this.elements],
                subscribedBy: this.formSubscribedByArray,
                subscriberAt: this.formSubscriberAtArray,
                ownedBy: this.formOwnedByArray,
                presentedBy: this.formPresentedByArray,
                commentedBy: this.formCommentedByArray,
                commentedAt: this.formCommentedAtArray,
                statedTo: this.formStatedToArray,
                actedAt: this.formActedAtArray,
                likedTo: this.formLikedToArray,
                connectedTo: this.formConnectedToArray
            });
    }
    AssociationModel.prototype.fillTemplate = function (input, fb) {
        this.parent = "";
        this.abstraction = false;
        if (input.template.relations)
            for (var _i = 0, _a = input.template.relations; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.values) {
                    for (var _b = 0, _c = item.values; _b < _c.length; _b++) {
                        var rel = _c[_b];
                        var relation = new RelationModel(rel.attributes, fb);
                        this[rel.name].push(relation);
                        if (rel.name === "abstractions")
                            this.formAbstrationsArray.push(relation.getFormGroup());
                        if (rel.name === "elements")
                            this.formElementsArray.push(relation.getFormGroup());
                        if (rel.name === "subscribedBy")
                            this.formSubscribedByArray.push(relation.getFormGroup());
                        if (rel.name === "subscriberAt")
                            this.formSubscriberAtArray.push(relation.getFormGroup());
                        if (rel.name === "ownedBy")
                            this.formOwnedByArray.push(relation.getFormGroup());
                        if (rel.name === "presentedBy")
                            this.formPresentedByArray.push(relation.getFormGroup());
                        if (rel.name === "commentedBy")
                            this.formCommentedByArray.push(relation.getFormGroup());
                        if (rel.name === "commentedAt")
                            this.formCommentedAtArray.push(relation.getFormGroup());
                        if (rel.name === "statedTo")
                            this.formStatedToArray.push(relation.getFormGroup());
                        if (rel.name === "actedAt")
                            this.formActedAtArray.push(relation.getFormGroup());
                        if (rel.name === "likedTo")
                            this.formLikedToArray.push(relation.getFormGroup());
                        if (rel.name === "connectedTo")
                            this.formConnectedToArray.push(relation.getFormGroup());

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
