/** possible states for the message queue */
export var TransportState;
(function (TransportState) {
    TransportState[TransportState["DESCONECTADO"] = 0] = "DESCONECTADO";
    TransportState[TransportState["CONECTANDO"] = 1] = "CONECTANDO";
    TransportState[TransportState["CONECTADO"] = 2] = "CONECTADO";
    TransportState[TransportState["REGISTRADO"] = 3] = "REGISTRADO";
    TransportState[TransportState["DESCONECTANDO"] = 4] = "DESCONECTANDO";
})(TransportState || (TransportState = {}));
export var TransportStateColor;
(function (TransportStateColor) {
    TransportStateColor[TransportStateColor["dark"] = 0] = "dark";
    TransportStateColor[TransportStateColor["primary"] = 1] = "primary";
    TransportStateColor[TransportStateColor["secondary"] = 2] = "secondary";
    TransportStateColor[TransportStateColor["warning"] = 3] = "warning";
    TransportStateColor[TransportStateColor["danger"] = 4] = "danger";
})(TransportStateColor || (TransportStateColor = {}));
/* Interface which MQ Transports must implement */
var TransportService = (function () {
    function TransportService() {
    }
    return TransportService;
}());
export { TransportService };
//# sourceMappingURL=transport.service.js.map