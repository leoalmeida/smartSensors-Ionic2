import { FIXTURES } from "./geofence";
export var GeofencePluginMock = {
    addOrUpdate: function (fences) {
        console.log("Mocked geofence plugin addOrUpdate", fences);
        return Promise.resolve();
    },
    getWatched: function () {
        return Promise.resolve(JSON.stringify(FIXTURES));
    },
    remove: function (ids) {
        console.log("Mocked geofence plugin remove", ids);
        return Promise.resolve();
    },
    removeAll: function () {
        console.log("Mocked geofence plugin removeAll");
        return Promise.resolve();
    },
    initialize: function () {
        console.log("Mocked geofence plugin initialize");
        return Promise.resolve();
    },
    onTransitionReceived: function () {
        console.log("Mocked geofence plugin onTransitionReceived");
    },
    onNotificationClicked: function () {
        console.log("Mocked geofence plugin onNotificationclicked");
    }
};
export var TransitionType = {
    ENTER: 1,
    EXIT: 2,
    BOTH: 3,
};
//# sourceMappingURL=geofence-plugin-mock.js.map