export const EQUIPMENT_TYPES = [
  {
    "name" : "topic",
    "options" : [
      {
        "available" : true,
        "name" : "Tópico Padrão",
        "subtype" : "basic",
        "options" : [],
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Ações definidas",
            "name" : "actionContainer",
            "reference" : false,
            "type" : "array",
            "value" : [],
            "items" : {
              "reference" : false,
              "type" : "object",
              "prototype" : "any"
            }
          },
          {
            "display" : "Regras definidas",
            "name" : "ruleContainer",
            "reference" : false,
            "type" : "array",
            "value" : [],
            "items" : {
              "reference" : false,
              "type" : "object",
              "prototype" : "any"
            }
          },
          {
            "display" : "Fórmula",
            "name" : "formula",
            "reference" : false,
            "type" : "array",
            "value" : [],
            "items" : {
              "reference" : false,
              "type" : "string"
            }
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "image",
            "value" : "assets/images/profile_header2.png"
          },
          {
            "display" : "Etiqueta",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Máximo",
            "name" : "max",
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 100.0,
            "value" : 0.0
          },
          {
            "display" : "Máximo de acões",
            "name" : "maxActions",
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 100.0,
            "value" : 0.0
          },
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          }
        ],
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name" : "complex",
    "options" : [
      {
        "available" : true,
        "name" : "ESP8266-12",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [],
        "options" : [],
        "subtype" : "esp8266",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : true,
        "name" : "Arduino Nano",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [],
        "options" : [],
        "subtype" : "arduino",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name" : "actuator",
    "options" : [
      {
        "available" : true,
        "name" : "Led",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Conector",
            "name" : "pin",
            "reference" : false,
            "hidden" : false,
            "type" : "string",
            "value" : "12"
          }
        ],
        "options" : [],
        "subtype" : "led",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : true,
        "name" : "Relay",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Conector",
            "name" : "pin",
            "reference" : false,
            "hidden" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 20.0,
            "value" : 12.0
          },
          {
            "display" : "Tipo de Ativação",
            "name" : "type",
            "reference" : false,
            "type" : "radio",
            "valid" : [
              {
                "display" : "Normally-Open",
                "value" : "NO"
              },
              {
                "display" : "Normally-Closed",
                "value" : "NC"
              }
            ]
          }
        ],
        "options" : [],
        "subtype" : "relay",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name" : "sensor",
    "options" : [
      {
        "available" : true,
        "name" : "Higrômetro",
        "subtype" : "hygrometer",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Eventos",
            "name" : "events",
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "hidden" : true,
            "options" : [
              {
                "display" : "Recebimento de dados",
                "value" : "data"
              },
              {
                "display" : "Alteração de valor",
                "value" : "change"
              }
            ]
          },
          {
            "display" : "Controlador",
            "name" : "controller",
            "reference" : false,
            "type" : "radio",
            "value" : "Default",
            "hidden" : true,
            "valid" : [
              {
                "display" : "Default",
                "value" : "Default"
              },
              {
                "display" : "HTU21D",
                "value" : "HTU21D"
              },
              {
                "display" : "HIH6130",
                "value" : "HIH6130"
              },
              {
                "display" : "TH02",
                "value" : "TH02"
              },
              {
                "display" : "SI7020",
                "value" : "SI7020"
              },
              {
                "display" : "SHT31D",
                "value" : "SHT31D"
              },
              {
                "display" : "DHT11_I2C_NANO_BACKPACK",
                "value" : "DHT11_I2C_NANO_BACKPACK"
              },
              {
                "display" : "BME280",
                "value" : "BME280"
              }
            ]
          },
          {
            "display" : "Analógico",
            "name" : "analogic",
            "reference" : false,
            "hidden" : false,
            "type" : "boolean",
            "value" : false
          },
          {
            "display" : "Frequência",
            "name" : "loop",
            "hidden" : true,
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 1000.0,
            "value" : 100.0
          },
          {
            "display" : "Conector",
            "name" : "pin",
            "reference" : false,
            "hidden" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 20.0,
            "value" : 12.0
          },
          {
            "display" : "Medida",
            "name" : "unit",
            "reference" : true,
            "hidden" : true,
            "type" : "select",
            "valid" : "unitTypes",
            "value" : "%"
          },
          {
            "display" : "Saída",
            "name" : "output",
            "hidden" : true,
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "options" : [
              {
                "display" : "Id",
                "value" : "id"
              },
              {
                "display" : "Humidade relativa",
                "value" : "relativeHumidity"
              }
            ]
          }
        ],
        "options" : [],
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : false,
        "name" : "Osciloscópio",
        "options" : [],
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Eventos",
            "name" : "events",
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "hidden" : true,
            "options" : []
          },
          {
            "display" : "Controlador",
            "name" : "controller",
            "reference" : false,
            "type" : "radio",
            "value" : "",
            "hidden" : true,
            "valid" : []
          },
          {
            "display" : "Analógico",
            "name" : "analogic",
            "reference" : false,
            "hidden" : false,
            "type" : "boolean",
            "value" : false
          },
          {
            "display" : "Medida",
            "name" : "unit",
            "reference" : false,
            "hidden" : true,
            "type" : "string",
            "value" : "V"
          },
          {
            "display" : "Conector",
            "name" : "pin",
            "reference" : false,
            "hidden" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 20.0,
            "value" : 12.0
          },
          {
            "display" : "Saída",
            "name" : "output",
            "hidden" : true,
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "options" : [
              {
                "display" : "Id",
                "value" : "id"
              },
              {
                "display" : "Humidade relativa",
                "value" : "relativeHumidity"
              }
            ]
          }
        ],
        "subtype" : "oscillator",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : true,
        "name" : "Movimento",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : "Movimento"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "MOV"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Sensor de Movivemtno para Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : 0.0
          }
        ],
        "properties" : [
          {
            "display" : "Eventos",
            "name" : "events",
            "hidden" : true,
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "options" : [
              {
                "display" : "Recebimento de dados",
                "value" : "data"
              },
              {
                "display" : "Mudança de Valores ",
                "value" : "change"
              },
              {
                "display" : "Movimentação encontrada",
                "value" : "motionstart"
              },
              {
                "display" : "Movimentação terminou",
                "value" : "motionend"
              },
              {
                "display" : "Sensor Calibrado",
                "value" : "calibrated"
              }
            ]
          },
          {
            "display" : "Controlador",
            "name" : "controller",
            "hidden" : true,
            "reference" : false,
            "type" : "radio",
            "value" : "PIR",
            "valid" : [
              {
                "display" : "PIR",
                "value" : "PIR",
                "imgschema" : "assets/images/breadboards/motion.png"
              },
              {
                "display" : "HCSR501",
                "value" : "HCSR501",
                "imgschema" : "assets/images/breadboards/motion.png"
              },
              {
                "display" : "GP2Y0D805Z0F",
                "value" : "GP2Y0D805Z0F",
                "imgschema" : "assets/images/breadboards/motion-gp2y0d805z0f.png"
              },
              {
                "display" : "GP2Y0D810Z0F",
                "value" : "GP2Y0D810Z0F",
                "imgschema" : "assets/images/breadboards/GP2Y0D810Z0F.png"
              },
              {
                "display" : "GP2Y0D815Z0F",
                "value" : "GP2Y0D815Z0F",
                "imgschema" : "assets/images/breadboards/GP2Y0D810Z0F.png"
              }
            ]
          },
          {
            "display" : "Analógico",
            "name" : "analogic",
            "reference" : false,
            "hidden" : false,
            "type" : "boolean",
            "value" : false
          },
          {
            "display" : "Conector",
            "name" : "pin",
            "hidden" : false,
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 20.0,
            "value" : 12.0
          },
          {
            "display" : "Medida",
            "name" : "unit",
            "hidden" : true,
            "reference" : false,
            "type" : "const",
            "value" : "!"
          },
          {
            "display" : "Saída",
            "name" : "output",
            "hidden" : true,
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "options" : [
              {
                "display" : "Id",
                "value" : "id"
              },
              {
                "display" : "Conector",
                "value" : "pin"
              },
              {
                "display" : "Movimento detectado",
                "value" : "detectedMotion"
              },
              {
                "display" : "Sensor Calibrado",
                "value" : "isCalibrated"
              },
              {
                "display" : "Valor",
                "value" : "value"
              }
            ]
          }
        ],
        "options" : [],
        "subtype" : "motion",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : true,
        "name" : "Termômetro",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : "Termômetro"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Eventos",
            "name" : "events",
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "hidden" : true,
            "options" : [
              {
                "display" : "Recebimento de dados",
                "value" : "data"
              },
              {
                "display" : "Alteração de valor",
                "value" : "change"
              }
            ]
          },
          {
            "display" : "Controlador",
            "name" : "controller",
            "reference" : false,
            "type" : "radio",
            "value" : "ANALOG",
            "hidden" : true,
            "valid" : [
              {
                "display" : "ANALOG",
                "value" : "ANALOG"
              },
              {
                "display" : "LM35",
                "value" : "LM35"
              },
              {
                "display" : "TMP36",
                "value" : "TMP36"
              },
              {
                "display" : "DS18B20",
                "value" : "DS18B20"
              },
              {
                "display" : "MPU6050",
                "value" : "MPU6050"
              },
              {
                "display" : "GROVE",
                "value" : "GROVE"
              },
              {
                "display" : "BMP180",
                "value" : "BMP180"
              },
              {
                "display" : "MPL115A2",
                "value" : "MPL115A2"
              },
              {
                "display" : "MPL3115A2",
                "value" : "MPL3115A2"
              },
              {
                "display" : "HTU21D",
                "value" : "HTU21D"
              },
              {
                "display" : "MCP9808",
                "value" : "MCP9808"
              },
              {
                "display" : "SI7020",
                "value" : "SI7020"
              }
            ]
          },
          {
            "display" : "Frequência",
            "name" : "loop",
            "hidden" : true,
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 1000.0,
            "value" : 100.0
          },
          {
            "display" : "Analógico",
            "name" : "analogic",
            "reference" : false,
            "hidden" : false,
            "type" : "boolean",
            "value" : false
          },
          {
            "display" : "Conector",
            "name" : "pin",
            "reference" : false,
            "hidden" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 20.0,
            "value" : 12.0
          },
          {
            "display" : "Medida",
            "name" : "unit",
            "reference" : false,
            "hidden" : true,
            "type" : "string",
            "value" : "ºC"
          },
          {
            "display" : "Saída",
            "name" : "output",
            "hidden" : true,
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "options" : [
              {
                "display" : "Id",
                "value" : "id"
              },
              {
                "display" : "Celsius",
                "value" : "celsius"
              },
              {
                "display" : "Fahrenheit",
                "value" : "Fahrenheit"
              },
              {
                "display" : "Kelvin",
                "value" : "kelvin"
              }
            ]
          }
        ],
        "options" : [],
        "subtype" : "thermometer",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : false,
        "name" : "Proximidade",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : "Proximidade"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Eventos",
            "name" : "events",
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "hidden" : true,
            "options" : [
              {
                "display" : "Recebimento de dados",
                "value" : "data"
              },
              {
                "display" : "Mudança de Valores ",
                "value" : "change"
              }
            ]
          },
          {
            "display" : "Analógico",
            "name" : "analogic",
            "reference" : false,
            "hidden" : false,
            "type" : "boolean",
            "value" : true
          },
          {
            "display" : "Controlador",
            "name" : "controller",
            "reference" : false,
            "type" : "radio",
            "value" : "HC-SR04",
            "hidden" : true,
            "valid" : [
              {
                "display" : "GP2Y0A21YK",
                "value" : "GP2Y0A21YK"
              },
              {
                "display" : "GP2D120XJ00F",
                "value" : "GP2D120XJ00F"
              },
              {
                "display" : "GP2Y0A02YK0F",
                "value" : "GP2Y0A02YK0F"
              },
              {
                "display" : "GP2Y0A41SK0F",
                "value" : "GP2Y0A41SK0F"
              },
              {
                "display" : "LV-MaxSonar-EZ",
                "value" : "LV-MaxSonar-EZ"
              },
              {
                "display" : "HRLV-MaxSonar-EZ0",
                "value" : "HRLV-MaxSonar-EZ0"
              },
              {
                "display" : "XL-MaxSonar-EZ3",
                "value" : "XL-MaxSonar-EZ3"
              },
              {
                "display" : "HC-SR04",
                "value" : "HC-SR04"
              },
              {
                "display" : "SRF05",
                "value" : "SRF05"
              },
              {
                "display" : "PARALLAXPING",
                "value" : "PARALLAXPING"
              },
              {
                "display" : "SEEEDPING",
                "value" : "SEEEDPING"
              },
              {
                "display" : "GROVEPING",
                "value" : "GROVEPING"
              },
              {
                "display" : "LIDAR-Lite",
                "value" : "LIDAR-Lite"
              }
            ]
          },
          {
            "display" : "Frequência",
            "name" : "loop",
            "hidden" : true,
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 1000.0,
            "value" : 100.0
          },
          {
            "display" : "Conector",
            "name" : "pin",
            "reference" : false,
            "hidden" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 20.0,
            "value" : 12.0
          },
          {
            "display" : "Saída",
            "name" : "output",
            "hidden" : true,
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "options" : [
              {
                "display" : "Id",
                "value" : "id"
              },
              {
                "display" : "Centimetros",
                "value" : "centimeters"
              },
              {
                "display" : "Pés",
                "value" : "inches"
              }
            ]
          }
        ],
        "options" : [],
        "subtype" : "proximity",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : true,
        "name" : "Padrão",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : "Sensor"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Eventos",
            "name" : "events",
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "hidden" : true,
            "options" : [
              {
                "display" : "Recebimento de dados",
                "value" : "data"
              },
              {
                "display" : "Alteração de valor",
                "value" : "change"
              }
            ]
          },
          {
            "display" : "Analógico",
            "name" : "analogic",
            "reference" : false,
            "hidden" : false,
            "type" : "boolean",
            "value" : true
          },
          {
            "display" : "Frequência",
            "name" : "loop",
            "hidden" : true,
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 1000.0,
            "value" : 100.0
          },
          {
            "display" : "Conector",
            "name" : "pin",
            "reference" : false,
            "hidden" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 20.0,
            "value" : 12.0
          },
          {
            "display" : "Limite",
            "name" : "threshold",
            "hidden" : true,
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 100.0,
            "value" : 1.0
          },
          {
            "display" : "Saída",
            "name" : "output",
            "hidden" : true,
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "options" : [
              {
                "display" : "Id",
                "value" : "id"
              },
              {
                "display" : "Conector",
                "value" : "pin"
              },
              {
                "display" : "Limite",
                "value" : "threshold"
              },
              {
                "display" : "Booleano",
                "value" : "boolean"
              },
              {
                "display" : "Original",
                "value" : "raw"
              },
              {
                "display" : "Analógico",
                "value" : "analog"
              },
              {
                "display" : "Corrigido",
                "value" : "constrained"
              },
              {
                "display" : "Valor",
                "value" : "value"
              }
            ]
          }
        ],
        "options" : [],
        "subtype" : "sensor",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : true,
        "name" : "Fluxo de Água",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : "Fluxo de Água"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Eventos",
            "name" : "events",
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "hidden" : true,
            "options" : [
              {
                "display" : "Recebimento de dados",
                "value" : "data"
              },
              {
                "display" : "Alteração de valor",
                "value" : "change"
              }
            ]
          },
          {
            "display" : "Fluxo de água",
            "name" : "flowrate",
            "hidden" : true,
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 1000.0,
            "value" : 1000.0
          },
          {
            "display" : "Frequência",
            "name" : "loop",
            "hidden" : true,
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 1000.0,
            "value" : 100.0
          },
          {
            "display" : "Valor Máximo",
            "name" : "maxval",
            "reference" : false,
            "hidden" : true,
            "type" : "number",
            "min" : 0.0,
            "max" : 100.0,
            "value" : 1.0
          },
          {
            "display" : "Conector",
            "name" : "pin",
            "reference" : false,
            "hidden" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 20.0,
            "value" : 12.0
          },
          {
            "display" : "Analógico",
            "name" : "analogic",
            "reference" : false,
            "hidden" : false,
            "type" : "boolean",
            "value" : true
          },
          {
            "display" : "Medida",
            "name" : "unit",
            "reference" : false,
            "hidden" : true,
            "type" : "string",
            "value" : "l"
          },
          {
            "display" : "Saída",
            "name" : "output",
            "hidden" : true,
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "options" : [
              {
                "display" : "Id",
                "value" : "id"
              },
              {
                "display" : "Conector",
                "value" : "pin"
              },
              {
                "display" : "Limite",
                "value" : "threshold"
              },
              {
                "display" : "Original",
                "value" : "raw"
              },
              {
                "display" : "Valor",
                "value" : "value"
              }
            ]
          }
        ],
        "options" : [],
        "subtype" : "flow",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : true,
        "name" : "Luminosidade",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : "Luminosidade"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Eventos",
            "name" : "events",
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "hidden" : true,
            "options" : [
              {
                "display" : "Recebimento de dados",
                "value" : "data"
              },
              {
                "display" : "Alteração de valor",
                "value" : "change"
              }
            ]
          },
          {
            "display" : "Controlador",
            "name" : "controller",
            "reference" : false,
            "type" : "radio",
            "value" : "DEFAULT",
            "hidden" : true,
            "valid" : [
              {
                "display" : "DEFAULT",
                "value" : "DEFAULT"
              },
              {
                "display" : "EVS_EV3",
                "value" : "EVS_EV3"
              },
              {
                "display" : "TSL2561",
                "value" : "TSL2561"
              }
            ]
          },
          {
            "display" : "Frequência",
            "name" : "loop",
            "hidden" : true,
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 1000.0,
            "value" : 100.0
          },
          {
            "display" : "Variação",
            "name" : "range",
            "hidden" : false,
            "dualKnobs" : true,
            "pin" : true,
            "snaps" : true,
            "icon" : "sunny",
            "reference" : false,
            "type" : "range",
            "min" : 0.0,
            "max" : 100.0,
            "value" : {
              "lower" : 20.0,
              "upper" : 60.0
            }
          },
          {
            "display" : "Conector",
            "name" : "pin",
            "reference" : false,
            "hidden" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 20.0,
            "value" : 12.0
          },
          {
            "display" : "Limite",
            "name" : "threshold",
            "hidden" : true,
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 1000.0,
            "value" : 1000.0
          },
          {
            "display" : "Medida",
            "name" : "unit",
            "reference" : false,
            "hidden" : true,
            "type" : "string",
            "value" : "cd"
          },
          {
            "display" : "Saída",
            "name" : "output",
            "hidden" : true,
            "reference" : false,
            "type" : "checkbox",
            "value" : "all",
            "options" : [
              {
                "display" : "Id",
                "value" : "id"
              },
              {
                "display" : "Conector",
                "value" : "pin"
              },
              {
                "display" : "Limite",
                "value" : "threshold"
              },
              {
                "display" : "Valor",
                "value" : "value"
              },
              {
                "display" : "Nível",
                "value" : "level"
              }
            ]
          }
        ],
        "options" : [],
        "subtype" : "light",
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name" : "channel",
    "options" : [
      {
        "available" : false,
        "name" : "Enviar Alerta",
        "options" : [],
        "subtype" : "alert",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Ações",
            "name" : "actions",
            "reference" : false,
            "type" : "constant",
            "default" : [
              "publish",
              "subscribe"
            ]
          },
          {
            "display" : "Atributos",
            "name" : "attributes",
            "reference" : false,
            "type" : "array",
            "default" : [
              "active",
              "severity",
              "message"
            ]
          },
          {
            "display" : "Colunas",
            "name" : "column",
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 100.0,
            "value" : 0.0,
            "default" : 1.0
          },
          {
            "display" : "Linhas",
            "name" : "row",
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 100.0,
            "value" : 0.0,
            "default" : 1.0
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "image",
            "default" : "assets/icons/action/ic_alarm_48px.svg"
          },
          {
            "display" : "Endereço",
            "name" : "geo",
            "reference" : false,
            "type" : "object",
            "prototype" : [
              {
                "display" : "Endereço",
                "name" : "address",
                "reference" : false,
                "type" : "string"
              },
              {
                "display" : "Latitude",
                "name" : "lat",
                "reference" : false,
                "type" : "number"
              },
              {
                "display" : "Longitude",
                "name" : "lng",
                "reference" : false,
                "type" : "number"
              }
            ]
          },
          {
            "display" : "Etiqueta",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "",
            "default" : "ALR"
          }
        ],
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : false,
        "name" : "Enviar Email",
        "options" : [],
        "subtype" : "email",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Ações",
            "name" : "actions",
            "reference" : false,
            "type" : "constant",
            "default" : [
              "publish",
              "subscribe"
            ]
          },
          {
            "display" : "Atributos",
            "name" : "attributes",
            "reference" : false,
            "type" : "array",
            "default" : [
              "severity",
              "message",
              "title"
            ]
          },
          {
            "display" : "Colunas",
            "name" : "column",
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 100.0,
            "value" : 0.0,
            "default" : 1.0
          },
          {
            "display" : "Linhas",
            "name" : "row",
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 100.0,
            "value" : 0.0,
            "default" : 1.0
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "image",
            "default" : "assets/icons/communication/ic_email_48px.svg"
          },
          {
            "display" : "Endereço",
            "name" : "geo",
            "reference" : false,
            "type" : "object",
            "prototype" : [
              {
                "display" : "Endereço",
                "name" : "address",
                "reference" : false,
                "type" : "string"
              },
              {
                "display" : "Latitude",
                "name" : "lat",
                "reference" : false,
                "type" : "number"
              },
              {
                "display" : "Longitude",
                "name" : "lng",
                "reference" : false,
                "type" : "number"
              }
            ]
          },
          {
            "display" : "Etiqueta",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "",
            "defaul" : "EML"
          }
        ],
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      },
      {
        "available" : false,
        "name" : "Enviar Mensagem",
        "options" : [],
        "subtype" : "message",
        "info" : [
          {
            "display" : "Nome",
            "name" : "name",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          },
          {
            "display" : "Endereço",
            "name" : "geo",
            "reference" : false,
            "type" : "string",
            "value" : ""
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "string",
            "value" : "assets/icons/motion.svg"
          },
          {
            "display" : "Imagem",
            "name" : "image",
            "reference" : false,
            "type" : "string",
            "value" : "assets/images/profile_header0.png"
          },
          {
            "display" : "Label",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "Teste"
          },
          {
            "display" : "Descrição",
            "name" : "description",
            "reference" : false,
            "type" : "string",
            "value" : "Descricao Teste"
          }
        ],
        "connection" : [
          {
            "display" : "Host",
            "name" : "host",
            "hidden" : "false",
            "reference" : "false",
            "type" : "string",
            "mask" : "",
            "value" : ""
          },
          {
            "display" : "Porta",
            "name" : "port",
            "hidden" : "false",
            "reference" : "false",
            "type" : "number",
            "min" : 0.0,
            "max" : 9999.0,
            "value" : ""
          }
        ],
        "properties" : [
          {
            "display" : "Ações",
            "name" : "actions",
            "reference" : false,
            "type" : "constant",
            "default" : [
              "publish",
              "subscribe"
            ]
          },
          {
            "display" : "Atributos",
            "name" : "attributes",
            "reference" : false,
            "type" : "array",
            "default" : [
              "severity",
              "message",
              "title"
            ]
          },
          {
            "display" : "Colunas",
            "name" : "column",
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 100.0,
            "value" : 0.0,
            "default" : 1.0
          },
          {
            "display" : "Linhas",
            "name" : "row",
            "reference" : false,
            "type" : "number",
            "min" : 0.0,
            "max" : 100.0,
            "value" : 0.0,
            "default" : 1.0
          },
          {
            "display" : "Ícone",
            "name" : "icon",
            "reference" : false,
            "type" : "image",
            "default" : "assets/icons/action/ic_message_24px.svg"
          },
          {
            "display" : "Endereço",
            "name" : "geo",
            "reference" : false,
            "type" : "object",
            "prototype" : [
              {
                "display" : "Endereço",
                "name" : "address",
                "reference" : false,
                "type" : "string"
              },
              {
                "display" : "Latitude",
                "name" : "lat",
                "reference" : false,
                "type" : "number"
              },
              {
                "display" : "Longitude",
                "name" : "lng",
                "reference" : false,
                "type" : "number"
              }
            ]
          },
          {
            "display" : "Etiqueta",
            "name" : "label",
            "reference" : false,
            "type" : "string",
            "value" : "",
            "defaul" : "MSG"
          }
        ],
        "relations" : [
          {
            "display" : "Responsáveis",
            "name" : "ownedBy",
            "attributes" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Conectodo com",
            "name" : "connectedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Assinante em",
            "name" : "subscriberAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Gostou de",
            "name" : "likedTo",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Comentou em",
            "name" : "commentedAt",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          },
          {
            "display" : "Subscrito por",
            "name" : "subscribedBy",
            "prototype" : [
              {
                "display" : "Id",
                "attribute" : "_id",
                "type" : "string",
                "valid" : "",
                "value" : ""
              },
              {
                "display" : "Sincronização",
                "attribute" : "sync",
                "type" : "number",
                "valid" : "",
                "value" : 0.0
              },
              {
                "display" : "Permissão de Leitura",
                "attribute" : "view",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Publicação",
                "attribute" : "publish",
                "type" : "boolean",
                "valid" : "",
                "value" : false
              },
              {
                "display" : "Permissão de Acesso",
                "attribute" : "access",
                "type" : "radio",
                "valid" : [
                  {
                    "display" : "Público",
                    "value" : "public"
                  },
                  {
                    "display" : "Privado",
                    "value" : "private"
                  }
                ],
                "value" : ""
              }
            ]
          }
        ]
      }
    ]
  }
];
export const ACTUATOR_TYPES = [
  {
    "available" : true,
    "name" : "Led",
    "properties" : {
      "input" : {
        "pin" : 13.0
      }
    },
    "style" : "action",
    "type" : "led"
  },
  {
    "available" : true,
    "name" : "Sensor",
    "properties" : {
      "events" : [
        "data",
        "change"
      ],
      "input" : {
        "analogic" : true,
        "loop" : 25.0,
        "pin" : "A0",
        "threshold" : 5.0,
        "type" : "analogic"
      },
      "output" : [
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
    "style" : "sensor",
    "type" : "sensor"
  },
  {
    "available" : true,
    "name" : "Relay",
    "properties" : {
      "input" : {
        "pin" : "D13",
        "type" : [
          {
            "display" : "Normally-Open",
            "value" : "NO"
          },
          {
            "display" : "Normally-Closed",
            "value" : "NC"
          }
        ]
      }
    },
    "style" : "action",
    "type" : "relay"
  }
];
export const ADDRESS_TYPES = [
  "casa",
  "edifício",
  "sobrado"
];

export const TEMPLATES = {
  "actions" : [
    {
      "active" : false,
      "configurations" : {
        "actions" : [
          "add",
          "update",
          "remove"
        ],
        "attributes" : [
          "active",
          "severity",
          "message"
        ],
        "col" : 1.0,
        "icon" : "assets/icons/action/ic_class_24px.svg",
        "localization" : {
          "image" : "assets/images/profile_header0.png"
        },
        "pin" : {
          "color" : "yellow"
        },
        "row" : 1.0,
        "type" : "alert"
      },
      "icon" : "assets/icons/action/ic_alarm_48px.svg",
      "key" : "0",
      "label" : "ALR",
      "lastUpdate" : "",
      "name" : "Enviar Alerta",
      "subtype" : "alerta",
      "type" : "action"
    },
    {
      "active" : false,
      "configurations" : {
        "actions" : [
          "send"
        ],
        "attributes" : [
          "severity",
          "message",
          "title"
        ],
        "col" : 1.0,
        "icon" : "assets/icons/action/ic_class_24px.svg",
        "pin" : {
          "color" : "yellow"
        },
        "row" : 1.0,
        "type" : "email"
      },
      "icon" : "assets/icons/communication/ic_email_48px.svg",
      "key" : "0",
      "label" : "EML",
      "lastUpdate" : "",
      "name" : "Enviar Email",
      "subtype" : "email",
      "type" : "action"
    },
    {
      "active" : false,
      "configurations" : {
        "actions" : [
          "send"
        ],
        "attributes" : [
          "severity",
          "message",
          "title"
        ],
        "col" : 1.0,
        "icon" : "assets/icons/action/ic_message_24px.svg",
        "pin" : {
          "color" : "yellow"
        },
        "row" : 1.0,
        "type" : "message"
      },
      "icon" : "assets/icons/communication/ic_textsms_48px.svg",
      "key" : "0",
      "label" : "MSG",
      "lastUpdate" : "",
      "name" : "Enviar Mensagem",
      "subtype" : "mensagem",
      "type" : "action"
    }
  ]
};

export enum ConnectorTypes {
  AND,
  OR,
  NOT,
  GT,
  LT,
  LE,
  EQ,
  BT,
  LP,
  RP,
  NE,
  NULL
}
export enum AnalogicPins { A0, A1, A2, A3, A4, A5};
export enum DigitalPins { D0, D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12, D13, D14, D15, D16 };
export enum StatusTypes {
  OFFLINE  = 0,
  ONLINE   = 1,
  ACTIVE   = 2,
  BLOCKED  = - 4,
  EXPIRED  = - 3,
  DISABLED = - 2,
  FAILED   = - 1,
};
export enum LedStyles {
  Blink,
  Pulse,
  Fade
};

export const REFERENCES = {
  EQUIPMENT_TYPES: EQUIPMENT_TYPES,
  ACTUATOR_TYPES: ACTUATOR_TYPES,
  ADDRESS_TYPES: ADDRESS_TYPES,
  LedStyles: LedStyles,
  ConnectorTypes: ConnectorTypes,
  AnalogicPins: AnalogicPins,
  DigitalPins: DigitalPins,
  StatusTypes: StatusTypes
}
