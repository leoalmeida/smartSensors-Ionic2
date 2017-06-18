var ProfileModel = (function () {
    function ProfileModel(input, fb) {
        this.providerData = [];
        if (!input)
            input = {};
        this.displayName = input["displayName"] || "";
        this.email = input["email"] || "";
        this.emailVerified = input["emailVerified"] || false;
        this.isAnonymous = input["isAnonymous"] || false;
        this.photoURL = input["photoURL"] || "";
        this.providerData = input["providerData"] || [];
        this.token = input["token"];
        this.uid = input["uid"] || "";
        this.updatedValue = input["updatedValue"] || "";
        this.name = input["name"] || "";
        if (fb)
            this.formGroup = fb.group({
                displayName: [this.displayName],
                email: [this.email],
                photoURL: [this.photoURL]
            });
    }
    ProfileModel.prototype.fillData = function (data) {
    };
    ProfileModel.prototype.getFormGroup = function () {
        return this.formGroup;
    };
    return ProfileModel;
}());
export { ProfileModel };
//# sourceMappingURL=profile.model.js.map