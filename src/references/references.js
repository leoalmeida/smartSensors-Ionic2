export var CATEGORY_TYPES = [
    {
        "display": "Luminosidade",
        "value": "light",
        "type": "Sensor"
    },
    {
        "display": "Movimento",
        "value": "motion",
        "type": "Sensor"
    },
    {
        "display": "Higrômetro",
        "value": "hygrometer",
        "type": "Sensor"
    },
    {
        "display": "Osciloscópio",
        "value": "oscillator",
        "type": "Sensor"
    },
    {
        "display": "Termômetro",
        "value": "thermometer",
        "type": "Sensor"
    },
    {
        "display": "Proximidade",
        "value": "proximity",
        "type": "Sensor"
    },
    {
        "display": "Padrão",
        "value": "sensor",
        "type": "Sensor"
    },
    {
        "display": "Fluxo de Água",
        "value": "flow",
        "type": "Sensor"
    },
    {
        "display": "Padrão",
        "value": "sensor",
        "type": "Sensor"
    },
    {
        "display": "Led",
        "value": "led",
        "type": "Acessório"
    },
    {
        "display": "Relay",
        "value": "relay",
        "type": "Acessório"
    },
    {
        "display": "ESP8266 - NodeMCU",
        "value": "esp8266",
        "type": "Hub"
    },
    {
        "display": "Arduino - Uno",
        "value": "uno",
        "type": "Hub"
    }
];
export var EQUIPMENT_TYPES = [
    {
        "name": "topic",
        "options": [
            {
                "available": true,
                "name": "Tópico Padrão",
                "subtype": "basic",
                "options": [],
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Ações definidas",
                        "name": "actionContainer",
                        "reference": false,
                        "type": "array",
                        "value": [],
                        "items": {
                            "reference": false,
                            "type": "object",
                            "prototype": "any"
                        }
                    },
                    {
                        "display": "Regras definidas",
                        "name": "ruleContainer",
                        "reference": false,
                        "type": "array",
                        "value": [],
                        "items": {
                            "reference": false,
                            "type": "object",
                            "prototype": "any"
                        }
                    },
                    {
                        "display": "Fórmula",
                        "name": "formula",
                        "reference": false,
                        "type": "array",
                        "value": [],
                        "items": {
                            "reference": false,
                            "type": "string"
                        }
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "image",
                        "value": "assets/images/profile_header2.png"
                    },
                    {
                        "display": "Etiqueta",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Máximo",
                        "name": "max",
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 100.0,
                        "value": 0.0
                    },
                    {
                        "display": "Máximo de acões",
                        "name": "maxActions",
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 100.0,
                        "value": 0.0
                    },
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    }
                ],
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "board",
        "options": [
            {
                "available": true,
                "name": "ESP8266-12",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [],
                "options": [],
                "subtype": "esp8266",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": true,
                "name": "Arduino Nano",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [],
                "options": [],
                "subtype": "arduino",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "actuator",
        "options": [
            {
                "available": true,
                "name": "Led",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Conector",
                        "name": "pin",
                        "reference": false,
                        "hidden": false,
                        "type": "string",
                        "value": "12"
                    }
                ],
                "options": [],
                "subtype": "led",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": true,
                "name": "Relay",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Conector",
                        "name": "pin",
                        "reference": false,
                        "hidden": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 20.0,
                        "value": 12.0
                    },
                    {
                        "display": "Tipo de Ativação",
                        "name": "type",
                        "reference": false,
                        "type": "radio",
                        "valid": [
                            {
                                "display": "Normally-Open",
                                "value": "NO"
                            },
                            {
                                "display": "Normally-Closed",
                                "value": "NC"
                            }
                        ]
                    }
                ],
                "options": [],
                "subtype": "relay",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "sensor",
        "options": [
            {
                "available": true,
                "name": "Higrômetro",
                "subtype": "hygrometer",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Eventos",
                        "name": "events",
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "hidden": true,
                        "options": [
                            {
                                "display": "Recebimento de dados",
                                "value": "data"
                            },
                            {
                                "display": "Alteração de valor",
                                "value": "change"
                            }
                        ]
                    },
                    {
                        "display": "Controlador",
                        "name": "controller",
                        "reference": false,
                        "type": "radio",
                        "value": "Default",
                        "hidden": true,
                        "valid": [
                            {
                                "display": "Default",
                                "value": "Default"
                            },
                            {
                                "display": "HTU21D",
                                "value": "HTU21D"
                            },
                            {
                                "display": "HIH6130",
                                "value": "HIH6130"
                            },
                            {
                                "display": "TH02",
                                "value": "TH02"
                            },
                            {
                                "display": "SI7020",
                                "value": "SI7020"
                            },
                            {
                                "display": "SHT31D",
                                "value": "SHT31D"
                            },
                            {
                                "display": "DHT11_I2C_NANO_BACKPACK",
                                "value": "DHT11_I2C_NANO_BACKPACK"
                            },
                            {
                                "display": "BME280",
                                "value": "BME280"
                            }
                        ]
                    },
                    {
                        "display": "Analógico",
                        "name": "analogic",
                        "reference": false,
                        "hidden": false,
                        "type": "boolean",
                        "value": false
                    },
                    {
                        "display": "Frequência",
                        "name": "loop",
                        "hidden": true,
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 1000.0,
                        "value": 100.0
                    },
                    {
                        "display": "Conector",
                        "name": "pin",
                        "reference": false,
                        "hidden": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 20.0,
                        "value": 12.0
                    },
                    {
                        "display": "Medida",
                        "name": "unit",
                        "reference": true,
                        "hidden": true,
                        "type": "select",
                        "valid": "unitTypes",
                        "value": "%"
                    },
                    {
                        "display": "Saída",
                        "name": "output",
                        "hidden": true,
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "options": [
                            {
                                "display": "Id",
                                "value": "id"
                            },
                            {
                                "display": "Humidade relativa",
                                "value": "relativeHumidity"
                            }
                        ]
                    }
                ],
                "options": [],
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": false,
                "name": "Osciloscópio",
                "options": [],
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Eventos",
                        "name": "events",
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "hidden": true,
                        "options": []
                    },
                    {
                        "display": "Controlador",
                        "name": "controller",
                        "reference": false,
                        "type": "radio",
                        "value": "",
                        "hidden": true,
                        "valid": []
                    },
                    {
                        "display": "Analógico",
                        "name": "analogic",
                        "reference": false,
                        "hidden": false,
                        "type": "boolean",
                        "value": false
                    },
                    {
                        "display": "Medida",
                        "name": "unit",
                        "reference": false,
                        "hidden": true,
                        "type": "string",
                        "value": "V"
                    },
                    {
                        "display": "Conector",
                        "name": "pin",
                        "reference": false,
                        "hidden": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 20.0,
                        "value": 12.0
                    },
                    {
                        "display": "Saída",
                        "name": "output",
                        "hidden": true,
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "options": [
                            {
                                "display": "Id",
                                "value": "id"
                            },
                            {
                                "display": "Humidade relativa",
                                "value": "relativeHumidity"
                            }
                        ]
                    }
                ],
                "subtype": "oscillator",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": true,
                "name": "Movimento",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": "Movimento"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "MOV"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Sensor de Movivemtno para Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": 0.0
                    }
                ],
                "properties": [
                    {
                        "display": "Eventos",
                        "name": "events",
                        "hidden": true,
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "options": [
                            {
                                "display": "Recebimento de dados",
                                "value": "data"
                            },
                            {
                                "display": "Mudança de Valores ",
                                "value": "change"
                            },
                            {
                                "display": "Movimentação encontrada",
                                "value": "motionstart"
                            },
                            {
                                "display": "Movimentação terminou",
                                "value": "motionend"
                            },
                            {
                                "display": "Sensor Calibrado",
                                "value": "calibrated"
                            }
                        ]
                    },
                    {
                        "display": "Controlador",
                        "name": "controller",
                        "hidden": true,
                        "reference": false,
                        "type": "radio",
                        "value": "PIR",
                        "valid": [
                            {
                                "display": "PIR",
                                "value": "PIR",
                                "imgschema": "assets/images/breadboards/motion.png"
                            },
                            {
                                "display": "HCSR501",
                                "value": "HCSR501",
                                "imgschema": "assets/images/breadboards/motion.png"
                            },
                            {
                                "display": "GP2Y0D805Z0F",
                                "value": "GP2Y0D805Z0F",
                                "imgschema": "assets/images/breadboards/motion-gp2y0d805z0f.png"
                            },
                            {
                                "display": "GP2Y0D810Z0F",
                                "value": "GP2Y0D810Z0F",
                                "imgschema": "assets/images/breadboards/GP2Y0D810Z0F.png"
                            },
                            {
                                "display": "GP2Y0D815Z0F",
                                "value": "GP2Y0D815Z0F",
                                "imgschema": "assets/images/breadboards/GP2Y0D810Z0F.png"
                            }
                        ]
                    },
                    {
                        "display": "Analógico",
                        "name": "analogic",
                        "reference": false,
                        "hidden": false,
                        "type": "boolean",
                        "value": false
                    },
                    {
                        "display": "Conector",
                        "name": "pin",
                        "hidden": false,
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 20.0,
                        "value": 12.0
                    },
                    {
                        "display": "Medida",
                        "name": "unit",
                        "hidden": true,
                        "reference": false,
                        "type": "const",
                        "value": "!"
                    },
                    {
                        "display": "Saída",
                        "name": "output",
                        "hidden": true,
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "options": [
                            {
                                "display": "Id",
                                "value": "id"
                            },
                            {
                                "display": "Conector",
                                "value": "pin"
                            },
                            {
                                "display": "Movimento detectado",
                                "value": "detectedMotion"
                            },
                            {
                                "display": "Sensor Calibrado",
                                "value": "isCalibrated"
                            },
                            {
                                "display": "Valor",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "options": [],
                "subtype": "motion",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": true,
                "name": "Termômetro",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": "Termômetro"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Eventos",
                        "name": "events",
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "hidden": true,
                        "options": [
                            {
                                "display": "Recebimento de dados",
                                "value": "data"
                            },
                            {
                                "display": "Alteração de valor",
                                "value": "change"
                            }
                        ]
                    },
                    {
                        "display": "Controlador",
                        "name": "controller",
                        "reference": false,
                        "type": "radio",
                        "value": "ANALOG",
                        "hidden": true,
                        "valid": [
                            {
                                "display": "ANALOG",
                                "value": "ANALOG"
                            },
                            {
                                "display": "LM35",
                                "value": "LM35"
                            },
                            {
                                "display": "TMP36",
                                "value": "TMP36"
                            },
                            {
                                "display": "DS18B20",
                                "value": "DS18B20"
                            },
                            {
                                "display": "MPU6050",
                                "value": "MPU6050"
                            },
                            {
                                "display": "GROVE",
                                "value": "GROVE"
                            },
                            {
                                "display": "BMP180",
                                "value": "BMP180"
                            },
                            {
                                "display": "MPL115A2",
                                "value": "MPL115A2"
                            },
                            {
                                "display": "MPL3115A2",
                                "value": "MPL3115A2"
                            },
                            {
                                "display": "HTU21D",
                                "value": "HTU21D"
                            },
                            {
                                "display": "MCP9808",
                                "value": "MCP9808"
                            },
                            {
                                "display": "SI7020",
                                "value": "SI7020"
                            }
                        ]
                    },
                    {
                        "display": "Frequência",
                        "name": "loop",
                        "hidden": true,
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 1000.0,
                        "value": 100.0
                    },
                    {
                        "display": "Analógico",
                        "name": "analogic",
                        "reference": false,
                        "hidden": false,
                        "type": "boolean",
                        "value": false
                    },
                    {
                        "display": "Conector",
                        "name": "pin",
                        "reference": false,
                        "hidden": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 20.0,
                        "value": 12.0
                    },
                    {
                        "display": "Medida",
                        "name": "unit",
                        "reference": false,
                        "hidden": true,
                        "type": "string",
                        "value": "ºC"
                    },
                    {
                        "display": "Saída",
                        "name": "output",
                        "hidden": true,
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "options": [
                            {
                                "display": "Id",
                                "value": "id"
                            },
                            {
                                "display": "Celsius",
                                "value": "celsius"
                            },
                            {
                                "display": "Fahrenheit",
                                "value": "Fahrenheit"
                            },
                            {
                                "display": "Kelvin",
                                "value": "kelvin"
                            }
                        ]
                    }
                ],
                "options": [],
                "subtype": "thermometer",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": false,
                "name": "Proximidade",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": "Proximidade"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Eventos",
                        "name": "events",
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "hidden": true,
                        "options": [
                            {
                                "display": "Recebimento de dados",
                                "value": "data"
                            },
                            {
                                "display": "Mudança de Valores ",
                                "value": "change"
                            }
                        ]
                    },
                    {
                        "display": "Analógico",
                        "name": "analogic",
                        "reference": false,
                        "hidden": false,
                        "type": "boolean",
                        "value": true
                    },
                    {
                        "display": "Controlador",
                        "name": "controller",
                        "reference": false,
                        "type": "radio",
                        "value": "HC-SR04",
                        "hidden": true,
                        "valid": [
                            {
                                "display": "GP2Y0A21YK",
                                "value": "GP2Y0A21YK"
                            },
                            {
                                "display": "GP2D120XJ00F",
                                "value": "GP2D120XJ00F"
                            },
                            {
                                "display": "GP2Y0A02YK0F",
                                "value": "GP2Y0A02YK0F"
                            },
                            {
                                "display": "GP2Y0A41SK0F",
                                "value": "GP2Y0A41SK0F"
                            },
                            {
                                "display": "LV-MaxSonar-EZ",
                                "value": "LV-MaxSonar-EZ"
                            },
                            {
                                "display": "HRLV-MaxSonar-EZ0",
                                "value": "HRLV-MaxSonar-EZ0"
                            },
                            {
                                "display": "XL-MaxSonar-EZ3",
                                "value": "XL-MaxSonar-EZ3"
                            },
                            {
                                "display": "HC-SR04",
                                "value": "HC-SR04"
                            },
                            {
                                "display": "SRF05",
                                "value": "SRF05"
                            },
                            {
                                "display": "PARALLAXPING",
                                "value": "PARALLAXPING"
                            },
                            {
                                "display": "SEEEDPING",
                                "value": "SEEEDPING"
                            },
                            {
                                "display": "GROVEPING",
                                "value": "GROVEPING"
                            },
                            {
                                "display": "LIDAR-Lite",
                                "value": "LIDAR-Lite"
                            }
                        ]
                    },
                    {
                        "display": "Frequência",
                        "name": "loop",
                        "hidden": true,
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 1000.0,
                        "value": 100.0
                    },
                    {
                        "display": "Conector",
                        "name": "pin",
                        "reference": false,
                        "hidden": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 20.0,
                        "value": 12.0
                    },
                    {
                        "display": "Saída",
                        "name": "output",
                        "hidden": true,
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "options": [
                            {
                                "display": "Id",
                                "value": "id"
                            },
                            {
                                "display": "Centimetros",
                                "value": "centimeters"
                            },
                            {
                                "display": "Pés",
                                "value": "inches"
                            }
                        ]
                    }
                ],
                "options": [],
                "subtype": "proximity",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": true,
                "name": "Padrão",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": "Sensor"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Eventos",
                        "name": "events",
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "hidden": true,
                        "options": [
                            {
                                "display": "Recebimento de dados",
                                "value": "data"
                            },
                            {
                                "display": "Alteração de valor",
                                "value": "change"
                            }
                        ]
                    },
                    {
                        "display": "Analógico",
                        "name": "analogic",
                        "reference": false,
                        "hidden": false,
                        "type": "boolean",
                        "value": true
                    },
                    {
                        "display": "Frequência",
                        "name": "loop",
                        "hidden": true,
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 1000.0,
                        "value": 100.0
                    },
                    {
                        "display": "Conector",
                        "name": "pin",
                        "reference": false,
                        "hidden": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 20.0,
                        "value": 12.0
                    },
                    {
                        "display": "Limite",
                        "name": "threshold",
                        "hidden": true,
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 100.0,
                        "value": 1.0
                    },
                    {
                        "display": "Saída",
                        "name": "output",
                        "hidden": true,
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "options": [
                            {
                                "display": "Id",
                                "value": "id"
                            },
                            {
                                "display": "Conector",
                                "value": "pin"
                            },
                            {
                                "display": "Limite",
                                "value": "threshold"
                            },
                            {
                                "display": "Booleano",
                                "value": "boolean"
                            },
                            {
                                "display": "Original",
                                "value": "raw"
                            },
                            {
                                "display": "Analógico",
                                "value": "analog"
                            },
                            {
                                "display": "Corrigido",
                                "value": "constrained"
                            },
                            {
                                "display": "Valor",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "options": [],
                "subtype": "sensor",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": true,
                "name": "Fluxo de Água",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": "Fluxo de Água"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Eventos",
                        "name": "events",
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "hidden": true,
                        "options": [
                            {
                                "display": "Recebimento de dados",
                                "value": "data"
                            },
                            {
                                "display": "Alteração de valor",
                                "value": "change"
                            }
                        ]
                    },
                    {
                        "display": "Fluxo de água",
                        "name": "flowrate",
                        "hidden": true,
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 1000.0,
                        "value": 1000.0
                    },
                    {
                        "display": "Frequência",
                        "name": "loop",
                        "hidden": true,
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 1000.0,
                        "value": 100.0
                    },
                    {
                        "display": "Valor Máximo",
                        "name": "maxval",
                        "reference": false,
                        "hidden": true,
                        "type": "number",
                        "min": 0.0,
                        "max": 100.0,
                        "value": 1.0
                    },
                    {
                        "display": "Conector",
                        "name": "pin",
                        "reference": false,
                        "hidden": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 20.0,
                        "value": 12.0
                    },
                    {
                        "display": "Analógico",
                        "name": "analogic",
                        "reference": false,
                        "hidden": false,
                        "type": "boolean",
                        "value": true
                    },
                    {
                        "display": "Medida",
                        "name": "unit",
                        "reference": false,
                        "hidden": true,
                        "type": "string",
                        "value": "l"
                    },
                    {
                        "display": "Saída",
                        "name": "output",
                        "hidden": true,
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "options": [
                            {
                                "display": "Id",
                                "value": "id"
                            },
                            {
                                "display": "Conector",
                                "value": "pin"
                            },
                            {
                                "display": "Limite",
                                "value": "threshold"
                            },
                            {
                                "display": "Original",
                                "value": "raw"
                            },
                            {
                                "display": "Valor",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "options": [],
                "subtype": "flow",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": true,
                "name": "Luminosidade",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": "Luminosidade"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Eventos",
                        "name": "events",
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "hidden": true,
                        "options": [
                            {
                                "display": "Recebimento de dados",
                                "value": "data"
                            },
                            {
                                "display": "Alteração de valor",
                                "value": "change"
                            }
                        ]
                    },
                    {
                        "display": "Controlador",
                        "name": "controller",
                        "reference": false,
                        "type": "radio",
                        "value": "DEFAULT",
                        "hidden": true,
                        "valid": [
                            {
                                "display": "DEFAULT",
                                "value": "DEFAULT"
                            },
                            {
                                "display": "EVS_EV3",
                                "value": "EVS_EV3"
                            },
                            {
                                "display": "TSL2561",
                                "value": "TSL2561"
                            }
                        ]
                    },
                    {
                        "display": "Frequência",
                        "name": "loop",
                        "hidden": true,
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 1000.0,
                        "value": 100.0
                    },
                    {
                        "display": "Variação",
                        "name": "range",
                        "hidden": false,
                        "dualKnobs": true,
                        "pin": true,
                        "snaps": true,
                        "icon": "sunny",
                        "reference": false,
                        "type": "range",
                        "min": 0.0,
                        "max": 100.0,
                        "value": {
                            "lower": 20.0,
                            "upper": 60.0
                        }
                    },
                    {
                        "display": "Conector",
                        "name": "pin",
                        "reference": false,
                        "hidden": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 20.0,
                        "value": 12.0
                    },
                    {
                        "display": "Limite",
                        "name": "threshold",
                        "hidden": true,
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 1000.0,
                        "value": 1000.0
                    },
                    {
                        "display": "Medida",
                        "name": "unit",
                        "reference": false,
                        "hidden": true,
                        "type": "string",
                        "value": "cd"
                    },
                    {
                        "display": "Saída",
                        "name": "output",
                        "hidden": true,
                        "reference": false,
                        "type": "checkbox",
                        "value": "all",
                        "options": [
                            {
                                "display": "Id",
                                "value": "id"
                            },
                            {
                                "display": "Conector",
                                "value": "pin"
                            },
                            {
                                "display": "Limite",
                                "value": "threshold"
                            },
                            {
                                "display": "Valor",
                                "value": "value"
                            },
                            {
                                "display": "Nível",
                                "value": "level"
                            }
                        ]
                    }
                ],
                "options": [],
                "subtype": "light",
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "channel",
        "options": [
            {
                "available": false,
                "name": "Enviar Alerta",
                "options": [],
                "subtype": "alert",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Ações",
                        "name": "actions",
                        "reference": false,
                        "type": "constant",
                        "default": [
                            "publish",
                            "subscribe"
                        ]
                    },
                    {
                        "display": "Atributos",
                        "name": "attributes",
                        "reference": false,
                        "type": "array",
                        "default": [
                            "active",
                            "severity",
                            "message"
                        ]
                    },
                    {
                        "display": "Colunas",
                        "name": "column",
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 100.0,
                        "value": 0.0,
                        "default": 1.0
                    },
                    {
                        "display": "Linhas",
                        "name": "row",
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 100.0,
                        "value": 0.0,
                        "default": 1.0
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "image",
                        "default": "assets/icons/action/ic_alarm_48px.svg"
                    },
                    {
                        "display": "Endereço",
                        "name": "geo",
                        "reference": false,
                        "type": "object",
                        "prototype": [
                            {
                                "display": "Endereço",
                                "name": "address",
                                "reference": false,
                                "type": "string"
                            },
                            {
                                "display": "Latitude",
                                "name": "lat",
                                "reference": false,
                                "type": "number"
                            },
                            {
                                "display": "Longitude",
                                "name": "lng",
                                "reference": false,
                                "type": "number"
                            }
                        ]
                    },
                    {
                        "display": "Etiqueta",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "",
                        "default": "ALR"
                    }
                ],
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": false,
                "name": "Enviar Email",
                "options": [],
                "subtype": "email",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Ações",
                        "name": "actions",
                        "reference": false,
                        "type": "constant",
                        "default": [
                            "publish",
                            "subscribe"
                        ]
                    },
                    {
                        "display": "Atributos",
                        "name": "attributes",
                        "reference": false,
                        "type": "array",
                        "default": [
                            "severity",
                            "message",
                            "title"
                        ]
                    },
                    {
                        "display": "Colunas",
                        "name": "column",
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 100.0,
                        "value": 0.0,
                        "default": 1.0
                    },
                    {
                        "display": "Linhas",
                        "name": "row",
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 100.0,
                        "value": 0.0,
                        "default": 1.0
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "image",
                        "default": "assets/icons/communication/ic_email_48px.svg"
                    },
                    {
                        "display": "Endereço",
                        "name": "geo",
                        "reference": false,
                        "type": "object",
                        "prototype": [
                            {
                                "display": "Endereço",
                                "name": "address",
                                "reference": false,
                                "type": "string"
                            },
                            {
                                "display": "Latitude",
                                "name": "lat",
                                "reference": false,
                                "type": "number"
                            },
                            {
                                "display": "Longitude",
                                "name": "lng",
                                "reference": false,
                                "type": "number"
                            }
                        ]
                    },
                    {
                        "display": "Etiqueta",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "",
                        "defaul": "EML"
                    }
                ],
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            {
                "available": false,
                "name": "Enviar Mensagem",
                "options": [],
                "subtype": "message",
                "info": [
                    {
                        "display": "Nome",
                        "name": "name",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    },
                    {
                        "display": "Endereço",
                        "name": "geo",
                        "reference": false,
                        "type": "string",
                        "value": ""
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "string",
                        "value": "assets/icons/motion.svg"
                    },
                    {
                        "display": "Imagem",
                        "name": "image",
                        "reference": false,
                        "type": "string",
                        "value": "assets/images/profile_header0.png"
                    },
                    {
                        "display": "Label",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "Teste"
                    },
                    {
                        "display": "Descrição",
                        "name": "description",
                        "reference": false,
                        "type": "string",
                        "value": "Descricao Teste"
                    }
                ],
                "connection": [
                    {
                        "display": "Host",
                        "name": "host",
                        "hidden": "false",
                        "reference": "false",
                        "type": "string",
                        "mask": "",
                        "value": ""
                    },
                    {
                        "display": "Porta",
                        "name": "port",
                        "hidden": "false",
                        "reference": "false",
                        "type": "number",
                        "min": 0.0,
                        "max": 9999.0,
                        "value": ""
                    }
                ],
                "properties": [
                    {
                        "display": "Ações",
                        "name": "actions",
                        "reference": false,
                        "type": "constant",
                        "default": [
                            "publish",
                            "subscribe"
                        ]
                    },
                    {
                        "display": "Atributos",
                        "name": "attributes",
                        "reference": false,
                        "type": "array",
                        "default": [
                            "severity",
                            "message",
                            "title"
                        ]
                    },
                    {
                        "display": "Colunas",
                        "name": "column",
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 100.0,
                        "value": 0.0,
                        "default": 1.0
                    },
                    {
                        "display": "Linhas",
                        "name": "row",
                        "reference": false,
                        "type": "number",
                        "min": 0.0,
                        "max": 100.0,
                        "value": 0.0,
                        "default": 1.0
                    },
                    {
                        "display": "Ícone",
                        "name": "icon",
                        "reference": false,
                        "type": "image",
                        "default": "assets/icons/action/ic_message_24px.svg"
                    },
                    {
                        "display": "Endereço",
                        "name": "geo",
                        "reference": false,
                        "type": "object",
                        "prototype": [
                            {
                                "display": "Endereço",
                                "name": "address",
                                "reference": false,
                                "type": "string"
                            },
                            {
                                "display": "Latitude",
                                "name": "lat",
                                "reference": false,
                                "type": "number"
                            },
                            {
                                "display": "Longitude",
                                "name": "lng",
                                "reference": false,
                                "type": "number"
                            }
                        ]
                    },
                    {
                        "display": "Etiqueta",
                        "name": "label",
                        "reference": false,
                        "type": "string",
                        "value": "",
                        "defaul": "MSG"
                    }
                ],
                "relations": [
                    {
                        "display": "Responsáveis",
                        "name": "ownedBy",
                        "attributes": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Conectodo com",
                        "name": "connectedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Assinante em",
                        "name": "subscriberAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Gostou de",
                        "name": "likedTo",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Comentou em",
                        "name": "commentedAt",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    },
                    {
                        "display": "Subscrito por",
                        "name": "subscribedBy",
                        "prototype": [
                            {
                                "display": "Id",
                                "attribute": "_id",
                                "type": "string",
                                "valid": "",
                                "value": ""
                            },
                            {
                                "display": "Sincronização",
                                "attribute": "sync",
                                "type": "number",
                                "valid": "",
                                "value": 0.0
                            },
                            {
                                "display": "Permissão de Leitura",
                                "attribute": "view",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Publicação",
                                "attribute": "publish",
                                "type": "boolean",
                                "valid": "",
                                "value": false
                            },
                            {
                                "display": "Permissão de Acesso",
                                "attribute": "access",
                                "type": "radio",
                                "valid": [
                                    {
                                        "display": "Público",
                                        "value": "public"
                                    },
                                    {
                                        "display": "Privado",
                                        "value": "private"
                                    }
                                ],
                                "value": ""
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
export var ACTUATOR_TYPES = [
    {
        "available": true,
        "name": "Led",
        "properties": {
            "input": {
                "pin": 13.0
            }
        },
        "style": "action",
        "type": "led"
    },
    {
        "available": true,
        "name": "Sensor",
        "properties": {
            "events": [
                "data",
                "change"
            ],
            "input": {
                "analogic": true,
                "loop": 25.0,
                "pin": "A0",
                "threshold": 5.0,
                "type": "analogic"
            },
            "output": [
                "id",
                "pin",
                "threshold",
                "boolean",
                "raw",
                "analog",
                "constrained",
                "value"
            ]
        },
        "style": "sensor",
        "type": "sensor"
    },
    {
        "available": true,
        "name": "Relay",
        "properties": {
            "input": {
                "pin": "D13",
                "type": [
                    {
                        "display": "Normally-Open",
                        "value": "NO"
                    },
                    {
                        "display": "Normally-Closed",
                        "value": "NC"
                    }
                ]
            }
        },
        "style": "action",
        "type": "relay"
    }
];
export var ADDRESS_TYPES = [
    "casa",
    "edifício",
    "sobrado"
];
export var RELATION_TYPES = [
    {
        "display": "Proprietário",
        "value": "ownedBy"
    }, {
        "display": "Conectado à",
        "value": "connectedTo"
    }, {
        "display": "Subscrito por",
        "value": "subscribedBy"
    }, {
        "display": "Assinante em",
        "value": "subscriberAt"
    }
];
export var ALERT_ATTRIBUTES = [
    {
        "display": "Severidade",
        "value": "severity"
    },
    {
        "display": "Valor",
        "value": "value"
    }
];
export var ALERT_ATTRIBUTES_VALUES = [
    {
        "display": "Vermelho",
        "value": "red"
    },
    {
        "display": "Amarelo",
        "value": "yellow"
    },
    {
        "display": "Verde",
        "value": "green"
    },
    {
        "display": "Azul",
        "value": "blue"
    },
    {
        "display": "Cinza",
        "value": "grey"
    }
];
export var ALERT_TYPES = [
    {
        "display": "Alteração",
        "value": "update"
    },
    {
        "display": "Remoção",
        "value": "remove"
    }
];
export var COUNTRY_TYPES = [
    {
        "abbrev": "BR",
        "name": "Brasil"
    },
    {
        "abbrev": "AR",
        "name": "Argentina"
    },
    {
        "abbrev": "PR",
        "name": "Paraguai"
    },
    {
        "abbrev": "UR",
        "name": "Uruguai"
    }
];
export var EXTERNAL_APIS = [
    {
        "type": "social",
        "category": "facebook",
        "apis": {
            "facebookInfo": {
                "attributes": "",
                "parameters": [
                    "access_token",
                    "fields",
                    "q",
                    "type"
                ],
                "path": ""
            },
            "getid": {
                "attributes": [
                    "nickname"
                ],
                "parameters": {
                    "access_token": ""
                },
                "path": "/"
            }
        },
        "clientInfo": {
            "appId": "240020133093766",
            "appSecret": "414408bd3b2f6ecaa63f689142ca3def",
            "clientToken": "4254a25dca55dfdc3b4e1301450c5115",
            "secret": "EAADaTArFoYYBACJxvDf21BbVnFHedoWGXTuUuNZAVe8dhGj79N2dVOGsALq3BKJcWIHLXXZAHwq4qNUQV0JMHJwnovn3obOgQxoM6YZAVxpc8h5V9T9ZC7IFfJZBMLffrsAeEZCkgi5FjSTmhxrQ3UZBkq4tgEmfl8mcDFpThk3dgZDZD"
        },
        "executeFunction": "",
        "url": "https://graph.facebook.com/",
        "version": "v2.8/"
    }, {
        "type": "database",
        "category": "firebase",
        "apis": "",
        "clientInfo": {
            "appId": "",
            "appSecret": "",
            "clientToken": ""
        },
        "executeFunction": "",
        "url": ""
    }, {
        "type": "code",
        "category": "github",
        "apis": "",
        "clientInfo": {
            "appId": "",
            "appSecret": "",
            "clientToken": ""
        },
        "executeFunction": "",
        "url": ""
    }, {
        "type": "social",
        "category": "google",
        "apis": {
            "interestByRegion": {
                "attributes": "",
                "output": [
                    "geoName",
                    "value"
                ],
                "parameters": [
                    "keyword",
                    "startTime",
                    "endTime",
                    "geo",
                    "hl"
                ],
                "path": "interestByRegion",
                "root": "geoMapData"
            },
            "interestOverTime": {
                "attributes": "",
                "output": [
                    "time",
                    "value"
                ],
                "parameters": [
                    "keyword",
                    "startTime",
                    "endTime",
                    "geo",
                    "resolution"
                ],
                "path": "interestOverTime",
                "root": "timelineData"
            },
            "relatedQueries": {
                "attributes": "",
                "output": [
                    "value"
                ],
                "parameters": [
                    "keyword",
                    "startTime",
                    "endTime",
                    "geo",
                    "hl"
                ],
                "path": "relatedQueries",
                "root": "rankedList"
            },
            "relatedTopics": {
                "attributes": "",
                "output": [
                    "value"
                ],
                "parameters": [
                    "keyword",
                    "startTime",
                    "endTime",
                    "geo",
                    "hl"
                ],
                "path": "relatedTopics",
                "root": "rankedList"
            }
        },
        "clientInfo": {
            "appId": "",
            "appSecret": "",
            "clientToken": "1234"
        },
        "executeFunction": "",
        "url": "https://www.google.com"
    }, {
        "type": "social",
        "category": "twitter",
        "apis": {
            "search": {
                "attributes": "",
                "parameters": [
                    "q"
                ],
                "path": "search/tweets.json"
            },
            "trends": {
                "attributes": "",
                "parameters": [
                    "id"
                ],
                "path": "trends/place.json"
            }
        },
        "clientInfo": {
            "appId": "qakPneDrG2qino1ln5BhXVEMv",
            "appSecret": "tQBwsjedD3jMbiwnGrvL2u9ywQxNvMGvtQg1dinzHVg8DvpBoJ",
            "clientToken": "AAAAAAAAAAAAAAAAAAAAAMn0zQAAAAAAipBJa6H8K7OsBtu3nfMqSY0ZsO0%3Dxy1zLNR821yVRXE1Ncg3LiWPhFGPbVzPSKizxWHtgU13ZNNzTa",
            "token_type": "bearer"
        },
        "executeFunction": "",
        "url": "https://api.twitter.com/",
        "version": "1.1/"
    }
];
export var GATT_TYPES = {
    "characteristics": {
        "2a00": {
            "name": "Device Name",
            "type": "org.bluetooth.characteristic.gap.device_name"
        },
        "2a01": {
            "name": "Appearance",
            "type": "org.bluetooth.characteristic.gap.appearance"
        },
        "2a02": {
            "name": "Peripheral Privacy Flag",
            "type": "org.bluetooth.characteristic.gap.peripheral_privacy_flag"
        },
        "2a03": {
            "name": "Reconnection Address",
            "type": "org.bluetooth.characteristic.gap.reconnection_address"
        },
        "2a04": {
            "name": "Peripheral Preferred Connection Parameters",
            "type": "org.bluetooth.characteristic.gap.peripheral_preferred_connection_parameters"
        },
        "2a05": {
            "name": "Service Changed",
            "type": "org.bluetooth.characteristic.gatt.service_changed"
        },
        "2a06": {
            "name": "Alert Level",
            "type": "org.bluetooth.characteristic.alert_level"
        },
        "2a07": {
            "name": "Tx Power Level",
            "type": "org.bluetooth.characteristic.tx_power_level"
        },
        "2a08": {
            "name": "Date Time",
            "type": "org.bluetooth.characteristic.date_time"
        },
        "2a09": {
            "name": "Day of Week",
            "type": "org.bluetooth.characteristic.day_of_week"
        },
        "2a0a": {
            "name": "Day Date Time",
            "type": "org.bluetooth.characteristic.day_date_time"
        },
        "2a0c": {
            "name": "Exact Time 256",
            "type": "org.bluetooth.characteristic.exact_time_256"
        },
        "2a0d": {
            "name": "DST Offset",
            "type": "org.bluetooth.characteristic.dst_offset"
        },
        "2a0e": {
            "name": "Time Zone",
            "type": "org.bluetooth.characteristic.time_zone"
        },
        "2a0f": {
            "name": "Local Time Information",
            "type": "org.bluetooth.characteristic.local_time_information"
        },
        "2a11": {
            "name": "Time with DST",
            "type": "org.bluetooth.characteristic.time_with_dst"
        },
        "2a12": {
            "name": "Time Accuracy",
            "type": "org.bluetooth.characteristic.time_accuracy"
        },
        "2a13": {
            "name": "Time Source",
            "type": "org.bluetooth.characteristic.time_source"
        },
        "2a14": {
            "name": "Reference Time Information",
            "type": "org.bluetooth.characteristic.reference_time_information"
        },
        "2a16": {
            "name": "Time Update Control Point",
            "type": "org.bluetooth.characteristic.time_update_control_point"
        },
        "2a17": {
            "name": "Time Update State",
            "type": "org.bluetooth.characteristic.time_update_state"
        },
        "2a18": {
            "name": "Glucose Measurement",
            "type": "org.bluetooth.characteristic.glucose_measurement"
        },
        "2a19": {
            "name": "Battery Level",
            "type": "org.bluetooth.characteristic.battery_level"
        },
        "2a1c": {
            "name": "Temperature Measurement",
            "type": "org.bluetooth.characteristic.temperature_measurement"
        },
        "2a1d": {
            "name": "Temperature Type",
            "type": "org.bluetooth.characteristic.temperature_type"
        },
        "2a1e": {
            "name": "Intermediate Temperature",
            "type": "org.bluetooth.characteristic.intermediate_temperature"
        },
        "2a21": {
            "name": "Measurement Interval",
            "type": "org.bluetooth.characteristic.measurement_interval"
        },
        "2a22": {
            "name": "Boot Keyboard Input Report",
            "type": "org.bluetooth.characteristic.boot_keyboard_input_report"
        },
        "2a23": {
            "name": "System ID",
            "type": "org.bluetooth.characteristic.system_id"
        },
        "2a24": {
            "name": "Model Number String",
            "type": "org.bluetooth.characteristic.model_number_string"
        },
        "2a25": {
            "name": "Serial Number String",
            "type": "org.bluetooth.characteristic.serial_number_string"
        },
        "2a26": {
            "name": "Firmware Revision String",
            "type": "org.bluetooth.characteristic.firmware_revision_string"
        },
        "2a27": {
            "name": "Hardware Revision String",
            "type": "org.bluetooth.characteristic.hardware_revision_string"
        },
        "2a28": {
            "name": "Software Revision String",
            "type": "org.bluetooth.characteristic.software_revision_string"
        },
        "2a29": {
            "name": "Manufacturer Name String",
            "type": "org.bluetooth.characteristic.manufacturer_name_string"
        },
        "2a2a": {
            "name": "IEEE 11073-20601 Regulatory Certification Data List",
            "type": "org.bluetooth.characteristic.ieee_11073-20601_regulatory_certification_data_list"
        },
        "2a2b": {
            "name": "Current Time",
            "type": "org.bluetooth.characteristic.current_time"
        },
        "2a2c": {
            "name": "Magnetic Declination",
            "type": "org.bluetooth.characteristic.magnetic_declination"
        },
        "2a31": {
            "name": "Scan Refresh",
            "type": "org.bluetooth.characteristic.scan_refresh"
        },
        "2a32": {
            "name": "Boot Keyboard Output Report",
            "type": "org.bluetooth.characteristic.boot_keyboard_output_report"
        },
        "2a33": {
            "name": "Boot Mouse Input Report",
            "type": "org.bluetooth.characteristic.boot_mouse_input_report"
        },
        "2a34": {
            "name": "Glucose Measurement Context",
            "type": "org.bluetooth.characteristic.glucose_measurement_context"
        },
        "2a35": {
            "name": "Blood Pressure Measurement",
            "type": "org.bluetooth.characteristic.blood_pressure_measurement"
        },
        "2a36": {
            "name": "Intermediate Cuff Pressure",
            "type": "org.bluetooth.characteristic.intermediate_blood_pressure"
        },
        "2a37": {
            "name": "Heart Rate Measurement",
            "type": "org.bluetooth.characteristic.heart_rate_measurement"
        },
        "2a38": {
            "name": "Body Sensor Location",
            "type": "org.bluetooth.characteristic.body_sensor_location"
        },
        "2a39": {
            "name": "Heart Rate Control Point",
            "type": "org.bluetooth.characteristic.heart_rate_control_point"
        },
        "2a3f": {
            "name": "Alert Status",
            "type": "org.bluetooth.characteristic.alert_status"
        },
        "2a40": {
            "name": "Ringer Control Point",
            "type": "org.bluetooth.characteristic.ringer_control_point"
        },
        "2a41": {
            "name": "Ringer Setting",
            "type": "org.bluetooth.characteristic.ringer_setting"
        },
        "2a42": {
            "name": "Alert Category ID Bit Mask",
            "type": "org.bluetooth.characteristic.alert_category_id_bit_mask"
        },
        "2a43": {
            "name": "Alert Category ID",
            "type": "org.bluetooth.characteristic.alert_category_id"
        },
        "2a44": {
            "name": "Alert Notification Control Point",
            "type": "org.bluetooth.characteristic.alert_notification_control_point"
        },
        "2a45": {
            "name": "Unread Alert Status",
            "type": "org.bluetooth.characteristic.unread_alert_status"
        },
        "2a46": {
            "name": "New Alert",
            "type": "org.bluetooth.characteristic.new_alert"
        },
        "2a47": {
            "name": "Supported New Alert Category",
            "type": "org.bluetooth.characteristic.supported_new_alert_category"
        },
        "2a48": {
            "name": "Supported Unread Alert Category",
            "type": "org.bluetooth.characteristic.supported_unread_alert_category"
        },
        "2a49": {
            "name": "Blood Pressure Feature",
            "type": "org.bluetooth.characteristic.blood_pressure_feature"
        },
        "2a4a": {
            "name": "HID Information",
            "type": "org.bluetooth.characteristic.hid_information"
        },
        "2a4b": {
            "name": "Report Map",
            "type": "org.bluetooth.characteristic.report_map"
        },
        "2a4c": {
            "name": "HID Control Point",
            "type": "org.bluetooth.characteristic.hid_control_point"
        },
        "2a4d": {
            "name": "Report",
            "type": "org.bluetooth.characteristic.report"
        },
        "2a4e": {
            "name": "Protocol Mode",
            "type": "org.bluetooth.characteristic.protocol_mode"
        },
        "2a4f": {
            "name": "Scan Interval Window",
            "type": "org.bluetooth.characteristic.scan_interval_window"
        },
        "2a50": {
            "name": "PnP ID",
            "type": "org.bluetooth.characteristic.pnp_id"
        },
        "2a51": {
            "name": "Glucose Feature",
            "type": "org.bluetooth.characteristic.glucose_feature"
        },
        "2a52": {
            "name": "Record Access Control Point",
            "type": "org.bluetooth.characteristic.record_access_control_point"
        },
        "2a53": {
            "name": "RSC Measurement",
            "type": "org.bluetooth.characteristic.rsc_measurement"
        },
        "2a54": {
            "name": "RSC Feature",
            "type": "org.bluetooth.characteristic.rsc_feature"
        },
        "2a55": {
            "name": "SC Control Point",
            "type": "org.bluetooth.characteristic.sc_control_point"
        },
        "2a56": {
            "name": "Digital",
            "type": "org.bluetooth.characteristic.digital"
        },
        "2a58": {
            "name": "Analog",
            "type": "org.bluetooth.characteristic.analog"
        },
        "2a5a": {
            "name": "Aggregate",
            "type": "org.bluetooth.characteristic.aggregate"
        },
        "2a5b": {
            "name": "CSC Measurement",
            "type": "org.bluetooth.characteristic.csc_measurement"
        },
        "2a5c": {
            "name": "CSC Feature",
            "type": "org.bluetooth.characteristic.csc_feature"
        },
        "2a5d": {
            "name": "Sensor Location",
            "type": "org.bluetooth.characteristic.sensor_location"
        },
        "2a63": {
            "name": "Cycling Power Measurement",
            "type": "org.bluetooth.characteristic.cycling_power_measurement"
        },
        "2a64": {
            "name": "Cycling Power Vector",
            "type": "org.bluetooth.characteristic.cycling_power_vector"
        },
        "2a65": {
            "name": "Cycling Power Feature",
            "type": "org.bluetooth.characteristic.cycling_power_feature"
        },
        "2a66": {
            "name": "Cycling Power Control Point",
            "type": "org.bluetooth.characteristic.cycling_power_control_point"
        },
        "2a67": {
            "name": "Location and Speed",
            "type": "org.bluetooth.characteristic.location_and_speed"
        },
        "2a68": {
            "name": "Navigation",
            "type": "org.bluetooth.characteristic.navigation"
        },
        "2a69": {
            "name": "Position Quality",
            "type": "org.bluetooth.characteristic.position_quality"
        },
        "2a6a": {
            "name": "LN Feature",
            "type": "org.bluetooth.characteristic.ln_feature"
        },
        "2a6b": {
            "name": "LN Control Point",
            "type": "org.bluetooth.characteristic.ln_control_point"
        },
        "2a6c": {
            "name": "Elevation",
            "type": "org.bluetooth.characteristic.elevation"
        },
        "2a6d": {
            "name": "Pressure",
            "type": "org.bluetooth.characteristic.pressure"
        },
        "2a6e": {
            "name": "Temperature",
            "type": "org.bluetooth.characteristic.temperature"
        },
        "2a6f": {
            "name": "Humidity",
            "type": "org.bluetooth.characteristic.humidity"
        },
        "2a70": {
            "name": "True Wind Speed",
            "type": "org.bluetooth.characteristic.true_wind_speed"
        },
        "2a71": {
            "name": "True Wind Direction",
            "type": "org.bluetooth.characteristic.true_wind_direction"
        },
        "2a72": {
            "name": "Apparent Wind Speed",
            "type": "org.bluetooth.characteristic.apparent_wind_speed"
        },
        "2a73": {
            "name": "Apparent Wind Direction",
            "type": "org.bluetooth.characteristic.apparent_wind_direction"
        },
        "2a74": {
            "name": "Gust Factor",
            "type": "org.bluetooth.characteristic.gust_factor"
        },
        "2a75": {
            "name": "Pollen Concentration",
            "type": "org.bluetooth.characteristic.pollen_concentration"
        },
        "2a76": {
            "name": "UV Index",
            "type": "org.bluetooth.characteristic.uv_index"
        },
        "2a77": {
            "name": "Irradiance",
            "type": "org.bluetooth.characteristic.irradiance"
        },
        "2a78": {
            "name": "Rainfall",
            "type": "org.bluetooth.characteristic.rainfall"
        },
        "2a79": {
            "name": "Wind Chill",
            "type": "org.bluetooth.characteristic.wind_chill"
        },
        "2a7a": {
            "name": "Heat Index",
            "type": "org.bluetooth.characteristic.heat_index"
        },
        "2a7b": {
            "name": "Dew Point",
            "type": "org.bluetooth.characteristic.dew_point"
        },
        "2a7d": {
            "name": "Descriptor Value Changed",
            "type": "org.bluetooth.characteristic.descriptor_value_change"
        },
        "2a7e": {
            "name": "Aerobic Heart Rate Lower Limit",
            "type": "org.bluetooth.characteristic.aerobic_heart_rate_lower_limit"
        },
        "2a7f": {
            "name": "Aerobic Threshold",
            "type": "org.bluetooth.characteristic.aerobic_threshold"
        },
        "2a80": {
            "name": "Age",
            "type": "org.bluetooth.characteristic.age"
        },
        "2a81": {
            "name": "Anaerobic Heart Rate Lower Limit",
            "type": "org.bluetooth.characteristic.anaerobic_heart_rate_lower_limit"
        },
        "2a82": {
            "name": "Anaerobic Heart Rate Upper Limit",
            "type": "org.bluetooth.characteristic.anaerobic_heart_rate_upper_limit"
        },
        "2a83": {
            "name": "Anaerobic Threshold",
            "type": "org.bluetooth.characteristic.anaerobic_threshold"
        },
        "2a84": {
            "name": "Aerobic Heart Rate Upper Limit",
            "type": "org.bluetooth.characteristic.aerobic_heart_rate_upper_limit"
        },
        "2a85": {
            "name": "Date of Birth",
            "type": "org.bluetooth.characteristic.date_of_birth"
        },
        "2a86": {
            "name": "Date of Threshold Assessment",
            "type": "org.bluetooth.characteristic.date_of_threshold_assessment"
        },
        "2a87": {
            "name": "Email Address",
            "type": "org.bluetooth.characteristic.email_address"
        },
        "2a88": {
            "name": "Fat Burn Heart Rate Lower Limit",
            "type": "org.bluetooth.characteristic.fat_burn_heart_lower_limit"
        },
        "2a89": {
            "name": "Fat Burn Heart Rate Upper Limit",
            "type": "org.bluetooth.characteristic.fat_burn_heart_upper_limit"
        },
        "2a8a": {
            "name": "First Name",
            "type": "org.bluetooth.characteristic.first_name"
        },
        "2a8b": {
            "name": "Five Zone Heart Rate Limits",
            "type": "org.bluetooth.characteristic.five_zone_heart_rate_limits"
        },
        "2a8c": {
            "name": "Gender",
            "type": "org.bluetooth.characteristic.gender"
        },
        "2a8d": {
            "name": "Heart Rate Max",
            "type": "org.bluetooth.characteristic.heart_rate_max"
        },
        "2a8e": {
            "name": "Height",
            "type": "org.bluetooth.characteristic.height"
        },
        "2a8f": {
            "name": "Hip Circumference",
            "type": "org.bluetooth.characteristic.hip_circumference"
        },
        "2a90": {
            "name": "Last Name",
            "type": "org.bluetooth.characteristic.last_name"
        },
        "2a91": {
            "name": "Maximum Recommended Heart Rate",
            "type": "org.bluetooth.characteristic.maximum_recommended_heart_rate"
        },
        "2a92": {
            "name": "Resting Heart Rate",
            "type": "org.bluetooth.characteristic.resting_heart_rate"
        },
        "2a93": {
            "name": "Sport Type for Aerobic and Anaerobic Threshold",
            "type": "org.bluetooth.characteristic.sport_type_for_aerobic_and_anaerobic_threshold"
        },
        "2a94": {
            "name": "Three Zone Heart Rate Limits",
            "type": "org.bluetooth.characteristic.three_zone_heart_rate_limits"
        },
        "2a95": {
            "name": "Two Zone Heart Rate Limit",
            "type": "org.bluetooth.characteristic.two_zone_heart_rate_limit"
        },
        "2a96": {
            "name": "VO2 Max",
            "type": "org.bluetooth.characteristic.vo2_max"
        },
        "2a97": {
            "name": "Waist Circumference",
            "type": "org.bluetooth.characteristic.waist_circumference"
        },
        "2a98": {
            "name": "Weight",
            "type": "org.bluetooth.characteristic.weight"
        },
        "2a99": {
            "name": "Database Change Increment",
            "type": "org.bluetooth.characteristic.database_change_increment"
        },
        "2a9a": {
            "name": "User Index",
            "type": "org.bluetooth.characteristic.user_index"
        },
        "2a9b": {
            "name": "Body Composition Feature",
            "type": "org.bluetooth.characteristic.body_composition_feature"
        },
        "2a9c": {
            "name": "Body Composition Measurement",
            "type": "org.bluetooth.characteristic.body_composition_measurement"
        },
        "2a9d": {
            "name": "Weight Measurement",
            "type": "org.bluetooth.characteristic.weight_measurement"
        },
        "2a9e": {
            "name": "Weight Scale Feature",
            "type": "org.bluetooth.characteristic.weight_scale_feature"
        },
        "2a9f": {
            "name": "User Control Point",
            "type": "org.bluetooth.characteristic.user_control_point"
        },
        "2aa0": {
            "name": "Magnetic Flux Density - 2D",
            "type": "org.bluetooth.characteristic.magnetic_flux_density_2d"
        },
        "2aa1": {
            "name": "Magnetic Flux Density - 3D",
            "type": "org.bluetooth.characteristic.magnetic_flux_density_3d"
        },
        "2aa2": {
            "name": "Language",
            "type": "org.bluetooth.characteristic.language"
        },
        "2aa3": {
            "name": "Barometric Pressure Trend",
            "type": "org.bluetooth.characteristic.barometric_pressure_trend"
        },
        "2aa4": {
            "name": "Bond Management Control Point",
            "type": "org.bluetooth.characteristic.bond_management_control_point"
        },
        "2aa5": {
            "name": "Bond Management Feature",
            "type": "org.bluetooth.characteristic.bond_management_feature"
        },
        "2aa6": {
            "name": "Central Address Resolution",
            "type": "org.bluetooth.characteristic.central_address_resolution"
        },
        "2aa7": {
            "name": "CGM Measurement",
            "type": "org.bluetooth.characteristic.cgm_measurement"
        },
        "2aa8": {
            "name": "CGM Feature",
            "type": "org.bluetooth.characteristic.cgm_feature"
        },
        "2aa9": {
            "name": "CGM Status",
            "type": "org.bluetooth.characteristic.cgm_status"
        },
        "2aaa": {
            "name": "CGM Session Start Time",
            "type": "org.bluetooth.characteristic.cgm_session_start_time"
        },
        "2aab": {
            "name": "CGM Session Run Time",
            "type": "org.bluetooth.characteristic.cgm_session_run_time"
        },
        "2aac": {
            "name": "CGM Specific Ops Control Point",
            "type": "org.bluetooth.characteristic.cgm_specific_ops_control_point"
        },
        "2aad": {
            "name": "Indoor Positioning Configuration",
            "type": "org.bluetooth.characteristic.indoor_positioning_configuration"
        },
        "2aae": {
            "name": "Latitude",
            "type": "org.bluetooth.characteristic.latitude"
        },
        "2aaf": {
            "name": "Longitude",
            "type": "org.bluetooth.characteristic.longitude"
        },
        "2ab0": {
            "name": "Local North Coordinate",
            "type": "org.bluetooth.characteristic.local_north_coordinate"
        },
        "2ab1": {
            "name": "Local East Coordinate",
            "type": "org.bluetooth.characteristic.local_east_coordinate"
        },
        "2ab2": {
            "name": "Floor Number",
            "type": "org.bluetooth.characteristic.floor_number"
        },
        "2ab3": {
            "name": "Altitude",
            "type": "org.bluetooth.characteristic.altitude"
        },
        "2ab4": {
            "name": "Uncertainty",
            "type": "org.bluetooth.characteristic.uncertainty"
        },
        "2ab5": {
            "name": "Location Name",
            "type": "org.bluetooth.characteristic.location_name"
        },
        "2ab6": {
            "name": "URI",
            "type": "org.bluetooth.characteristic.uri"
        },
        "2ab7": {
            "name": "HTTP Headers",
            "type": "org.bluetooth.characteristic.http_headers"
        },
        "2ab8": {
            "name": "HTTP Status Code ",
            "type": "org.bluetooth.characteristic.http_status_code"
        },
        "2ab9": {
            "name": "HTTP Entity Body ",
            "type": "org.bluetooth.characteristic.http_entity_body"
        },
        "2aba": {
            "name": "HTTP Control Point ",
            "type": "org.bluetooth.characteristic.http_control_point"
        },
        "2abb": {
            "name": "HTTPS Security ",
            "type": "org.bluetooth.characteristic.https_security"
        },
        "2abc": {
            "name": "TDS Control Point",
            "type": "org.bluetooth.characteristic.tds_control_point"
        },
        "2abd": {
            "name": "OTS Feature",
            "type": "org.bluetooth.characteristic.ots_feature"
        },
        "2abe": {
            "name": "Object Name",
            "type": "org.bluetooth.characteristic.object_name"
        },
        "2abf": {
            "name": "Object Type",
            "type": "org.bluetooth.characteristic.object_type"
        },
        "2ac0": {
            "name": "Object Size",
            "type": "org.bluetooth.characteristic.object_size"
        },
        "2ac1": {
            "name": "Object First-Created ",
            "type": "org.bluetooth.characteristic.object_first_created"
        },
        "2ac2": {
            "name": "Object Last-Modified ",
            "type": "org.bluetooth.characteristic.object_last_modified"
        },
        "2ac3": {
            "name": "Object ID",
            "type": "org.bluetooth.characteristic.object_id"
        },
        "2ac4": {
            "name": "Object Properties",
            "type": "org.bluetooth.characteristic.object_properties"
        },
        "2ac5": {
            "name": "Object Action Control Point",
            "type": "org.bluetooth.characteristic.object_action_control_point"
        },
        "2ac6": {
            "name": "Object List Control Point",
            "type": "org.bluetooth.characteristic.object_list_control_point"
        },
        "2ac7": {
            "name": "Object List Filter ",
            "type": "org.bluetooth.characteristic.object_list_filter"
        },
        "2ac8": {
            "name": "Object Changed ",
            "type": "org.bluetooth.characteristic.object_changed"
        },
        "2ac9": {
            "name": "Resolvable  Private Address Only",
            "type": "org.bluetooth.characteristic.resolvable_private_address_only"
        },
        "2acc": {
            "name": "Fitness Machine Feature",
            "type": "org.bluetooth.characteristic.fitness_machine_feature"
        },
        "2acd": {
            "name": "Tread mill Data ",
            "type": "org.bluetooth.characteristic.treadmill_data"
        },
        "2ace": {
            "name": "Cross Trainer Data  ",
            "type": "org.bluetooth.characteristic.cross_trainer_data"
        },
        "2acf": {
            "name": "Step Climber Data",
            "type": "org.bluetooth.characteristic.step_climber_data"
        },
        "2ad0": {
            "name": "Stair Climber Data",
            "type": "org.bluetooth.characteristic.stair_climber_data"
        },
        "2ad1": {
            "name": "Rower Data",
            "type": "org.bluetooth.characteristic.rower_data"
        },
        "2ad2": {
            "name": "Indoor Bike Data ",
            "type": "org.bluetooth.characteristic.indoor_bike_data"
        },
        "2ad3": {
            "name": "Training Status",
            "type": "org.bluetooth.characteristic.training_status"
        },
        "2ad4": {
            "name": "Supported  Speed Range",
            "type": "org.bluetooth.characteristic.supported_speed_range"
        },
        "2ad5": {
            "name": "Supported  Inclination Range",
            "type": "org.bluetooth.characteristic.supported_inclination_range"
        },
        "2ad6": {
            "name": "Supported  Resistance Level Range",
            "type": "org.bluetooth.characteristic.supported_resistance_level_range"
        },
        "2ad7": {
            "name": "Supported  Heart Rate Range",
            "type": "org.bluetooth.characteristic.supported_heart_rate_range"
        },
        "2ad8": {
            "name": "Supported  Power Range",
            "type": "org.bluetooth.characteristic.supported_power_range"
        },
        "2ad9": {
            "name": "Fitness Machine Control Point",
            "type": "org.bluetooth.characteristic.fitness_machine_control_point"
        },
        "2ada": {
            "name": "Fitness Machine Status",
            "type": "org.bluetooth.characteristic.fitness_machine_status"
        }
    },
    "declarations": "",
    "descriptors": {
        "2900": {
            "name": "Characteristic Extended Properties",
            "type": "org.bluetooth.descriptor.gatt.characteristic_extended_properties"
        },
        "2901": {
            "name": "Characteristic User Description",
            "type": "org.bluetooth.descriptor.gatt.characteristic_user_description"
        },
        "2902": {
            "name": "Client Characteristic Configuration",
            "type": "org.bluetooth.descriptor.gatt.client_characteristic_configuration"
        },
        "2903": {
            "name": "Server Characteristic Configuration",
            "type": "org.bluetooth.descriptor.gatt.server_characteristic_configuration"
        },
        "2904": {
            "name": "Characteristic Presentation Format",
            "type": "org.bluetooth.descriptor.gatt.characteristic_presentation_format"
        },
        "2905": {
            "name": "Characteristic Aggregate Format",
            "type": "org.bluetooth.descriptor.gatt.characteristic_aggregate_format"
        },
        "2906": {
            "name": "Valid Range",
            "type": "org.bluetooth.descriptor.valid_range"
        },
        "2907": {
            "name": "External Report Reference",
            "type": "org.bluetooth.descriptor.external_report_reference"
        },
        "2908": {
            "name": "Report Reference",
            "type": "org.bluetooth.descriptor.report_reference"
        },
        "2909": {
            "name": "Number of Digitals",
            "type": "org.bluetooth.descriptor.number_of_digitals"
        },
        "290a": {
            "name": "Value Trigger Setting",
            "type": "org.bluetooth.descriptor.value_trigger_setting"
        },
        "290b": {
            "name": "Environmental Sensing Configuration",
            "type": "org.bluetooth.descriptor.environmental_sensing_configuration"
        },
        "290c": {
            "name": "Environmental Sensing Measurement",
            "type": "org.bluetooth.descriptor.environmental_sensing_measurement"
        },
        "290d": {
            "name": "Environmental Sensing Trigger Setting",
            "type": "org.bluetooth.descriptor.environmental_sensing_trigger_setting"
        },
        "290e": {
            "name": "Time Trigger Setting",
            "type": "org.bluetooth.descriptor.time_trigger_setting"
        }
    },
    "services": {
        "1800": {
            "name": "Generic Access",
            "type": "org.bluetooth.service.generic_access"
        },
        "1801": {
            "name": "Generic Attribute",
            "type": "org.bluetooth.service.generic_attribute"
        },
        "1802": {
            "name": "Immediate Alert",
            "type": "org.bluetooth.service.immediate_alert"
        },
        "1803": {
            "name": "Link Loss",
            "type": "org.bluetooth.service.link_loss"
        },
        "1804": {
            "name": "Tx Power",
            "type": "org.bluetooth.service.tx_power"
        },
        "1805": {
            "name": "Current Time Service",
            "type": "org.bluetooth.service.current_time"
        },
        "1806": {
            "name": "Reference Time Update Service",
            "type": "org.bluetooth.service.reference_time_update"
        },
        "1807": {
            "name": "Next DST Change Service",
            "type": "org.bluetooth.service.next_dst_change"
        },
        "1808": {
            "name": "Glucose",
            "type": "org.bluetooth.service.glucose"
        },
        "1809": {
            "name": "Health Thermometer",
            "type": "org.bluetooth.service.health_thermometer"
        },
        "1810": {
            "name": "Blood Pressure",
            "type": "org.bluetooth.service.blood_pressuer"
        },
        "1811": {
            "name": "Alert Notification Service",
            "type": "org.bluetooth.service.alert_notification"
        },
        "1812": {
            "name": "Human Interface Device",
            "type": "org.bluetooth.service.human_interface_device"
        },
        "1813": {
            "name": "Scan Parameters",
            "type": "org.bluetooth.service.scan_parameters"
        },
        "1814": {
            "name": "Running Speed and Cadence",
            "type": "org.bluetooth.service.running_speed_and_cadence"
        },
        "1815": {
            "name": "Automation IO",
            "type": "org.bluetooth.service.automation_io"
        },
        "1816": {
            "name": "Cycling Speed and Cadence",
            "type": "org.bluetooth.service.cycling_speed_and_cadence"
        },
        "1818": {
            "name": "Cycling Power",
            "type": "org.bluetooth.service.cycling_power"
        },
        "1819": {
            "name": "Location and Navigation",
            "type": "org.bluetooth.service.location_and_navigation"
        },
        "1820": {
            "name": "Internet Protocol Support",
            "type": "org.bluetooth.service.internet_protocol_support"
        },
        "1821": {
            "name": "Indoor Positioning",
            "type": "org.bluetooth.service.indoor_positioning"
        },
        "1822": {
            "name": "Pulse Oximeter",
            "type": "org.bluetooth.service.pulse_oximeter"
        },
        "1823": {
            "name": "HTTP Proxy",
            "type": "org.bluetooth.service.http_proxy"
        },
        "1824": {
            "name": "Transport Discovery",
            "type": "org.bluetooth.service.transport_discovery"
        },
        "1825": {
            "name": "Object Transfer",
            "type": "org.bluetooth.service.object_transfer"
        },
        "1826": {
            "name": "Fitness Machine",
            "type": "org.bluetooth.service.fitness_machine"
        },
        "180a": {
            "name": "Device Information",
            "service": "<Service xsi:noNamespaceSchemaLocation=\"http://schemas.bluetooth.org/Documents/service.xsd\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" type=\"org.bluetooth.service.device_information\" uuid=\"180A\" name=\"Device Information\" last-modified=\"2011-10-28\" approved=\"Yes\"><InformativeText><Abstract>     The Device Information Service exposes manufacturer and/or vendor information about a device.             \t\t</Abstract><Summary>                 This service exposes manufacturer information about a device.     The Device Information Service is instantiated as a Primary Service.     Only one instance of the Device Information Service is exposed on a device. \t\t</Summary></InformativeText><Dependencies><Dependency>This service is not dependent upon any other services.</Dependency></Dependencies><Transports><Classic>true</Classic><LowEnergy>true</LowEnergy></Transports><ErrorCodes></ErrorCodes><Characteristics><Characteristic name=\"Manufacturer Name String\" type=\"org.bluetooth.characteristic.manufacturer_name_string\"><InformativeText>             This characteristic represents the name of the manufacturer of the device.           </InformativeText><Requirement>Optional</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write><WriteWithoutResponse>Excluded</WriteWithoutResponse><SignedWrite>Excluded</SignedWrite><ReliableWrite>Excluded</ReliableWrite><Notify>Excluded</Notify><Indicate>Excluded</Indicate><WritableAuxiliaries>Excluded</WritableAuxiliaries><Broadcast>Excluded</Broadcast></Properties></Characteristic><Characteristic name=\"Model Number String\" type=\"org.bluetooth.characteristic.model_number_string\"><InformativeText>             This characteristic represents the model number that is assigned by the device vendor.           </InformativeText><Requirement>Optional</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write><WriteWithoutResponse>Excluded</WriteWithoutResponse><SignedWrite>Excluded</SignedWrite><ReliableWrite>Excluded</ReliableWrite><Notify>Excluded</Notify><Indicate>Excluded</Indicate><WritableAuxiliaries>Excluded</WritableAuxiliaries><Broadcast>Excluded</Broadcast></Properties></Characteristic><Characteristic name=\"Serial Number String\" type=\"org.bluetooth.characteristic.serial_number_string\"><InformativeText>             This characteristic represents the serial number for a particular instance of the device.           </InformativeText><Requirement>Optional</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write><WriteWithoutResponse>Excluded</WriteWithoutResponse><SignedWrite>Excluded</SignedWrite><ReliableWrite>Excluded</ReliableWrite><Notify>Excluded</Notify><Indicate>Excluded</Indicate><WritableAuxiliaries>Excluded</WritableAuxiliaries><Broadcast>Excluded</Broadcast></Properties></Characteristic><Characteristic name=\"Hardware Revision String\" type=\"org.bluetooth.characteristic.hardware_revision_string\"><InformativeText>             This characteristic represents the hardware revision for the hardware within the device.           </InformativeText><Requirement>Optional</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write><WriteWithoutResponse>Excluded</WriteWithoutResponse><SignedWrite>Excluded</SignedWrite><ReliableWrite>Excluded</ReliableWrite><Notify>Excluded</Notify><Indicate>Excluded</Indicate><WritableAuxiliaries>Excluded</WritableAuxiliaries><Broadcast>Excluded</Broadcast></Properties></Characteristic><Characteristic name=\"Firmware Revision String\" type=\"org.bluetooth.characteristic.firmware_revision_string\"><InformativeText>             This characteristic represents the firmware revision for the firmware within the device.           </InformativeText><Requirement>Optional</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write><WriteWithoutResponse>Excluded</WriteWithoutResponse><SignedWrite>Excluded</SignedWrite><ReliableWrite>Excluded</ReliableWrite><Notify>Excluded</Notify><Indicate>Excluded</Indicate><WritableAuxiliaries>Excluded</WritableAuxiliaries><Broadcast>Excluded</Broadcast></Properties></Characteristic><Characteristic name=\"Software Revision String\" type=\"org.bluetooth.characteristic.software_revision_string\"><InformativeText>             This characteristic represents the software revision for the software within the device.           </InformativeText><Requirement>Optional</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write><WriteWithoutResponse>Excluded</WriteWithoutResponse><SignedWrite>Excluded</SignedWrite><ReliableWrite>Excluded</ReliableWrite><Notify>Excluded</Notify><Indicate>Excluded</Indicate><WritableAuxiliaries>Excluded</WritableAuxiliaries><Broadcast>Excluded</Broadcast></Properties></Characteristic><Characteristic name=\"System ID\" type=\"org.bluetooth.characteristic.system_id\"><InformativeText>             This characteristic represents a structure containing an Organizationally Unique Identifier (OUI) followed by a manufacturer-defined identifier and is unique for each individual instance of the product.           </InformativeText><Requirement>Optional</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write><WriteWithoutResponse>Excluded</WriteWithoutResponse><SignedWrite>Excluded</SignedWrite><ReliableWrite>Excluded</ReliableWrite><Notify>Excluded</Notify><Indicate>Excluded</Indicate><WritableAuxiliaries>Excluded</WritableAuxiliaries><Broadcast>Excluded</Broadcast></Properties></Characteristic><Characteristic name=\"IEEE 11073-20601 Regulatory Certification Data List\" type=\"org.bluetooth.characteristic.ieee_11073-20601_regulatory_certification_data_list\"><InformativeText>             This characteristic represents regulatory and certification information for the product in a list defined in IEEE 11073-20601.           </InformativeText><Requirement>Optional</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write><WriteWithoutResponse>Excluded</WriteWithoutResponse><SignedWrite>Excluded</SignedWrite><ReliableWrite>Excluded</ReliableWrite><Notify>Excluded</Notify><Indicate>Excluded</Indicate><WritableAuxiliaries>Excluded</WritableAuxiliaries><Broadcast>Excluded</Broadcast></Properties></Characteristic><Characteristic name=\"PnP ID\" type=\"org.bluetooth.characteristic.pnp_id\"><InformativeText>             The PnP_ID characteristic is a set of values used to create a device ID value that is unique for this device.           </InformativeText><Requirement>Optional</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write><WriteWithoutResponse>Excluded</WriteWithoutResponse><SignedWrite>Excluded</SignedWrite><ReliableWrite>Excluded</ReliableWrite><Notify>Excluded</Notify><Indicate>Excluded</Indicate><WritableAuxiliaries>Excluded</WritableAuxiliaries><Broadcast>Excluded</Broadcast></Properties></Characteristic></Characteristics></Service>",
            "type": "org.bluetooth.service.device_information"
        },
        "180d": {
            "name": "Heart Rate",
            "type": "org.bluetooth.service.heart_rate"
        },
        "180e": {
            "name": "Phone Alert Status Service",
            "type": "org.bluetooth.service.phone_alert_service"
        },
        "180f": {
            "name": "Battery Service",
            "service": "<Service xsi:noNamespaceSchemaLocation=\"http://schemas.bluetooth.org/Documents/service.xsd\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" name=\"Battery Service\" type=\"org.bluetooth.service.battery_service\" uuid=\"180F\" last-modified=\"2011-12-12\"><InformativeText><Abstract>             The Battery Service exposes the state of a battery within a device. \t\t</Abstract><Summary>                         The Battery Service exposes the Battery State and Battery Level of a single battery or set of batteries in a device. \t\t</Summary></InformativeText><Dependencies><Dependency>This service has no dependencies on other GATT-based services.</Dependency></Dependencies><GATTRequirements><Requirement subProcedure=\"Read Characteristic Descriptors\">Mandatory</Requirement><Requirement subProcedure=\"Notifications\">C1: Mandatory if the Battery Level characteristic properties supports notification, otherwise excluded.</Requirement><Requirement subProcedure=\"Write Characteristic Descriptors\">C1: Mandatory if the Battery Level characteristic properties supports notification, otherwise excluded.</Requirement></GATTRequirements><Transports><Classic>true</Classic><LowEnergy>true</LowEnergy></Transports><ErrorCodes></ErrorCodes><Characteristics><Characteristic name=\"Battery Level\" type=\"org.bluetooth.characteristic.battery_level\"><InformativeText>                 The Battery Level characteristic is read using the GATT Read Characteristic Value sub-procedure and returns the current battery level as a percentage from 0% to 100%;                  0% represents a battery that is fully discharged, 100% represents a battery that is fully charged. \t        </InformativeText><Requirement>Mandatory</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write><WriteWithoutResponse>Excluded</WriteWithoutResponse><SignedWrite>Excluded</SignedWrite><ReliableWrite>Excluded</ReliableWrite><Notify>Optional</Notify><Indicate>Excluded</Indicate><WritableAuxiliaries>Excluded</WritableAuxiliaries><Broadcast>Excluded</Broadcast></Properties><Descriptors><Descriptor name=\"Characteristic Presentation Format\" type=\"org.bluetooth.descriptor.gatt.characteristic_presentation_format\"><Requirement>if_multiple_service_instances</Requirement><Properties><Read>Mandatory</Read><Write>Excluded</Write></Properties></Descriptor><Descriptor name=\"Client Characteristic Configuration\" type=\"org.bluetooth.descriptor.gatt.client_characteristic_configuration\"><Requirement>if_notify_or_indicate_supported</Requirement><Properties><Read>Mandatory</Read><Write>Mandatory</Write></Properties></Descriptor></Descriptors></Characteristic></Characteristics></Service>",
            "type": "org.bluetooth.service.battery_service"
        },
        "181a": {
            "name": "Environmental Sensing",
            "type": "org.bluetooth.service.environmental_sensing"
        },
        "181b": {
            "name": "Body Composition",
            "type": "org.bluetooth.service.body_composition"
        },
        "181c": {
            "name": "User Data",
            "type": "org.bluetooth.service.user_data"
        },
        "181d": {
            "name": "Weight Scale",
            "type": "org.bluetooth.service.weight_scale"
        },
        "181e": {
            "name": "Bond Management",
            "type": "org.bluetooth.service.bond_management"
        },
        "181f": {
            "name": "Continuous Glucose Monitoring",
            "type": "org.bluetooth.service.continuous_glucose_monitoring"
        }
    }
};
export var ICON_TYPES = [
    {
        "display": "Movimento",
        "path": "assets/icons/motion.svg"
    },
    {
        "display": "Oscilador",
        "path": "assets/icons/oscillator.svg"
    }
];
export var LOCAL_TYPES = [
    {
        "display": "Comercial",
        "value": 0
    },
    {
        "display": "Residencial",
        "value": 1
    }
];
export var MSG_STATUS = [
    {
        "display": "Salvo",
        "value": "SAVED",
        "index": 0
    }, {
        "display": "Enviando",
        "value": "SENDING",
        "index": 1
    }, {
        "display": "Enviado",
        "value": "SENT",
        "index": 2
    }, {
        "display": "Recebido",
        "value": "RECEIVED",
        "index": 3
    }, {
        "display": "Lido",
        "value": "READ",
        "index": 4
    }, {
        "display": "Falha",
        "value": "FAILED",
        "index": -2
    }, {
        "display": "Todos",
        "value": "ALL",
        "index": -1
    }
];
export var PIN_TYPES = [
    {
        "display": "DIGITAL",
        "pre": "D"
    }, {
        "display": "ANALOGIC",
        "pre": "A"
    }
];
export var SEARCH_OPTION_TYPES = [
    {
        "availableAttributes": [
            "tweet_volume"
        ],
        "display": "Trending Topics",
        "parameters": [
            "woeid",
            "hashtag"
        ],
        "value": "trends"
    },
    {
        "availableAttributes": [
            "count"
        ],
        "display": "Busca Tweets",
        "parameters": [
            "query",
            "geocode",
            "lang",
            "locale",
            "result_type",
            "until",
            "since_id",
            "max_id"
        ],
        "value": "search"
    }
];
export var SIGN_TYPES = [
    {
        "icon": "",
        "display": "Maior",
        "value": ">"
    },
    {
        "icon": "",
        "display": "Menor",
        "value": "<"
    },
    {
        "icon": "",
        "display": "Igual",
        "value": "=="
    },
    {
        "icon": "",
        "display": "Diferente",
        "value": "<>"
    }
];
export var STATES_TYPES = [
    {
        "value": "RJ",
        "display": "Rio de Janeiro"
    },
    {
        "value": "SP",
        "display": "São Paulo"
    },
    {
        "value": "MG",
        "display": "Minas Gerais"
    }
];
export var TEMPLATES = {
    "actions": [
        {
            "active": false,
            "configurations": {
                "actions": [
                    "add",
                    "update",
                    "remove"
                ],
                "attributes": [
                    "active",
                    "severity",
                    "message"
                ],
                "col": 1.0,
                "icon": "assets/icons/action/ic_class_24px.svg",
                "localization": {
                    "image": "assets/images/profile_header0.png"
                },
                "pin": {
                    "color": "yellow"
                },
                "row": 1.0,
                "type": "alert"
            },
            "icon": "assets/icons/action/ic_alarm_48px.svg",
            "key": "0",
            "label": "ALR",
            "lastUpdate": "",
            "name": "Enviar Alerta",
            "subtype": "alerta",
            "type": "action"
        },
        {
            "active": false,
            "configurations": {
                "actions": [
                    "send"
                ],
                "attributes": [
                    "severity",
                    "message",
                    "title"
                ],
                "col": 1.0,
                "icon": "assets/icons/action/ic_class_24px.svg",
                "pin": {
                    "color": "yellow"
                },
                "row": 1.0,
                "type": "email"
            },
            "icon": "assets/icons/communication/ic_email_48px.svg",
            "key": "0",
            "label": "EML",
            "lastUpdate": "",
            "name": "Enviar Email",
            "subtype": "email",
            "type": "action"
        },
        {
            "active": false,
            "configurations": {
                "actions": [
                    "send"
                ],
                "attributes": [
                    "severity",
                    "message",
                    "title"
                ],
                "col": 1.0,
                "icon": "assets/icons/action/ic_message_24px.svg",
                "pin": {
                    "color": "yellow"
                },
                "row": 1.0,
                "type": "message"
            },
            "icon": "assets/icons/communication/ic_textsms_48px.svg",
            "key": "0",
            "label": "MSG",
            "lastUpdate": "",
            "name": "Enviar Mensagem",
            "subtype": "mensagem",
            "type": "action"
        }
    ],
    "connectors": [
        {
            "icon": "assets/icons/communication/ic_call_merge_24px.svg",
            "label": "AND",
            "max": 2.0,
            "name": "AND",
            "subtype": "boleano",
            "type": "operador"
        },
        {
            "icon": "assets/icons/communication/ic_call_split_24px.svg",
            "label": "OR",
            "max": 2.0,
            "name": "OR",
            "subtype": "boleano",
            "type": "operador"
        },
        {
            "icon": "assets/icons/notification/ic_priority_high_48px.svg",
            "label": "NOT",
            "max": 1.0,
            "name": "NOT",
            "subtype": "boleano",
            "type": "operador"
        },
        {
            "icon": "assets/icons/action/ic_greaterthansign.svg",
            "label": "GT",
            "max": "2",
            "name": "Maior que",
            "subtype": "relacional",
            "type": "operador"
        },
        {
            "icon": "assets/icons/action/ic_greaterequalsign.svg",
            "label": "GE",
            "max": "2",
            "name": "Maior ou igual",
            "subtype": "relacional",
            "type": "operador"
        },
        {
            "icon": "assets/icons/action/ic_lessthansign.svg",
            "label": "LT",
            "max": "2",
            "name": "Menor que",
            "subtype": "relacional",
            "type": "operador"
        },
        {
            "icon": "assets/icons/action/ic_lessequalsign.svg",
            "label": "LE",
            "max": "2",
            "name": "Menor ou igual",
            "subtype": "relacional",
            "type": "operador"
        },
        {
            "icon": "assets/icons/action/ic_equalsign.svg",
            "label": "EQ",
            "max": "2",
            "name": "Igual a",
            "subtype": "relacional",
            "type": "operador"
        },
        {
            "icon": "assets/icons/action/ic_leftparenthesis.svg",
            "label": "LP",
            "name": "( parêntesis",
            "subtype": "parêntesis",
            "type": "separador"
        },
        {
            "icon": "assets/icons/action/ic_rightparenthesis.svg",
            "label": "RP",
            "name": ") parêntesis",
            "subtype": "parêntesis",
            "type": "separador"
        },
        {
            "icon": "assets/icons/action/ic_notequalsign.svg",
            "label": "NE",
            "name": "Diferente de",
            "subtype": "relacional",
            "type": "operador"
        }
    ],
    "types": [
        {
            "display": "Humidade",
            "value": "moisture"
        },
        {
            "display": "Oscilador",
            "value": "oscillator"
        },
        {
            "display": "Led",
            "value": "led"
        },
        {
            "display": "Movimento",
            "value": "motion"
        },
        {
            "display": "Fluxo de Água",
            "value": "waterflow"
        }
    ],
    "unitTypes": [
        {
            "display": "Centimetros",
            "value": "cm"
        },
        {
            "display": "Metros",
            "value": "m"
        },
        {
            "display": "Percentual",
            "value": "%"
        },
        {
            "display": "Celsius",
            "value": "°C"
        },
        {
            "display": "Movimento",
            "value": "!"
        },
        {
            "display": "Litros",
            "value": "l"
        },
        {
            "display": "Candela",
            "value": "cd"
        }
    ]
};
export var CONNECTORS = [
    {
        "icon": "assets/icons/communication/ic_call_merge_24px.svg",
        "label": "AND",
        "max": 2.0,
        "name": "AND",
        "subtype": "boleano",
        "type": "operador"
    },
    {
        "icon": "assets/icons/communication/ic_call_split_24px.svg",
        "label": "OR",
        "max": 2.0,
        "name": "OR",
        "subtype": "boleano",
        "type": "operador"
    },
    {
        "icon": "assets/icons/notification/ic_priority_high_48px.svg",
        "label": "NOT",
        "max": 1.0,
        "name": "NOT",
        "subtype": "boleano",
        "type": "operador"
    },
    {
        "icon": "assets/icons/action/ic_greaterthansign.svg",
        "label": "GT",
        "max": "2",
        "name": "Maior que",
        "subtype": "relacional",
        "type": "operador"
    },
    {
        "icon": "assets/icons/action/ic_greaterequalsign.svg",
        "label": "GE",
        "max": "2",
        "name": "Maior ou igual",
        "subtype": "relacional",
        "type": "operador"
    },
    {
        "icon": "assets/icons/action/ic_lessthansign.svg",
        "label": "LT",
        "max": "2",
        "name": "Menor que",
        "subtype": "relacional",
        "type": "operador"
    },
    {
        "icon": "assets/icons/action/ic_lessequalsign.svg",
        "label": "LE",
        "max": "2",
        "name": "Menor ou igual",
        "subtype": "relacional",
        "type": "operador"
    },
    {
        "icon": "assets/icons/action/ic_equalsign.svg",
        "label": "EQ",
        "max": "2",
        "name": "Igual a",
        "subtype": "relacional",
        "type": "operador"
    },
    {
        "icon": "assets/icons/action/ic_leftparenthesis.svg",
        "label": "LP",
        "name": "( parêntesis",
        "subtype": "parêntesis",
        "type": "separador"
    },
    {
        "icon": "assets/icons/action/ic_rightparenthesis.svg",
        "label": "RP",
        "name": ") parêntesis",
        "subtype": "parêntesis",
        "type": "separador"
    },
    {
        "icon": "assets/icons/action/ic_notequalsign.svg",
        "label": "NE",
        "name": "Diferente de",
        "subtype": "relacional",
        "type": "operador"
    }
];
export var ConnectorTypes;
(function (ConnectorTypes) {
    ConnectorTypes[ConnectorTypes["AND"] = 0] = "AND";
    ConnectorTypes[ConnectorTypes["OR"] = 1] = "OR";
    ConnectorTypes[ConnectorTypes["NOT"] = 2] = "NOT";
    ConnectorTypes[ConnectorTypes["GT"] = 3] = "GT";
    ConnectorTypes[ConnectorTypes["LT"] = 4] = "LT";
    ConnectorTypes[ConnectorTypes["LE"] = 5] = "LE";
    ConnectorTypes[ConnectorTypes["EQ"] = 6] = "EQ";
    ConnectorTypes[ConnectorTypes["LP"] = 7] = "LP";
    ConnectorTypes[ConnectorTypes["RP"] = 8] = "RP";
    ConnectorTypes[ConnectorTypes["NE"] = 9] = "NE";
})(ConnectorTypes || (ConnectorTypes = {}));
export var AnalogicPins;
(function (AnalogicPins) {
    AnalogicPins[AnalogicPins["A0"] = 0] = "A0";
    AnalogicPins[AnalogicPins["A1"] = 1] = "A1";
    AnalogicPins[AnalogicPins["A2"] = 2] = "A2";
    AnalogicPins[AnalogicPins["A3"] = 3] = "A3";
    AnalogicPins[AnalogicPins["A4"] = 4] = "A4";
    AnalogicPins[AnalogicPins["A5"] = 5] = "A5";
})(AnalogicPins || (AnalogicPins = {}));
;
export var DigitalPins;
(function (DigitalPins) {
    DigitalPins[DigitalPins["D0"] = 0] = "D0";
    DigitalPins[DigitalPins["D1"] = 1] = "D1";
    DigitalPins[DigitalPins["D2"] = 2] = "D2";
    DigitalPins[DigitalPins["D3"] = 3] = "D3";
    DigitalPins[DigitalPins["D4"] = 4] = "D4";
    DigitalPins[DigitalPins["D5"] = 5] = "D5";
    DigitalPins[DigitalPins["D6"] = 6] = "D6";
    DigitalPins[DigitalPins["D7"] = 7] = "D7";
    DigitalPins[DigitalPins["D8"] = 8] = "D8";
    DigitalPins[DigitalPins["D9"] = 9] = "D9";
    DigitalPins[DigitalPins["D10"] = 10] = "D10";
    DigitalPins[DigitalPins["D11"] = 11] = "D11";
    DigitalPins[DigitalPins["D12"] = 12] = "D12";
    DigitalPins[DigitalPins["D13"] = 13] = "D13";
    DigitalPins[DigitalPins["D14"] = 14] = "D14";
    DigitalPins[DigitalPins["D15"] = 15] = "D15";
    DigitalPins[DigitalPins["D16"] = 16] = "D16";
})(DigitalPins || (DigitalPins = {}));
;
export var StatusTypes;
(function (StatusTypes) {
    StatusTypes[StatusTypes["OFFLINE"] = 0] = "OFFLINE";
    StatusTypes[StatusTypes["ONLINE"] = 1] = "ONLINE";
    StatusTypes[StatusTypes["ACTIVE"] = 2] = "ACTIVE";
    StatusTypes[StatusTypes["BLOCKED"] = -4] = "BLOCKED";
    StatusTypes[StatusTypes["EXPIRED"] = -3] = "EXPIRED";
    StatusTypes[StatusTypes["DISABLED"] = -2] = "DISABLED";
    StatusTypes[StatusTypes["FAILED"] = -1] = "FAILED";
})(StatusTypes || (StatusTypes = {}));
;
export var LedStyles;
(function (LedStyles) {
    LedStyles[LedStyles["Blink"] = 0] = "Blink";
    LedStyles[LedStyles["Pulse"] = 1] = "Pulse";
    LedStyles[LedStyles["Fade"] = 2] = "Fade";
})(LedStyles || (LedStyles = {}));
;
export var REFERENCES = {
    CONNECTORS: CONNECTORS,
    EQUIPMENT_TYPES: EQUIPMENT_TYPES,
    ACTUATOR_TYPES: ACTUATOR_TYPES,
    ADDRESS_TYPES: ADDRESS_TYPES,
    ALERT_ATTRIBUTES: ALERT_ATTRIBUTES,
    ALERT_ATTRIBUTES_VALUES: ALERT_ATTRIBUTES_VALUES,
    ALERT_TYPES: ALERT_TYPES,
    COUNTRY_TYPES: COUNTRY_TYPES,
    EXTERNAL_APIS: EXTERNAL_APIS,
    GATT_TYPES: GATT_TYPES,
    ICON_TYPES: ICON_TYPES,
    PIN_TYPES: PIN_TYPES,
    MSG_STATUS: MSG_STATUS,
    LedStyles: LedStyles,
    SEARCH_OPTION_TYPES: SEARCH_OPTION_TYPES,
    SIGN_TYPES: SIGN_TYPES,
    STATES_TYPES: STATES_TYPES,
    TEMPLATES: TEMPLATES,
    ConnectorTypes: ConnectorTypes,
    AnalogicPins: AnalogicPins,
    DigitalPins: DigitalPins,
    StatusTypes: StatusTypes
};
//# sourceMappingURL=references.js.map