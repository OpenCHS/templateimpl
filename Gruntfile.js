const rulesConfigInfra = require("rules-config/infra");
const IDI = require("openchs-idi");

module.exports = IDI.configure({
    "chs-admin": "admin",
    "org-admin": "admin@myorganisation",
    "secrets": "../secrets.json",
    "files": {
        "adminUsers": {
            "dev": ["./users/dev-admin-user.json"]
        },
        "programs": [],
        "operationalPrograms": [],
        "subjectTypes": [],
        "operationalSubjectTypes": [],
        "encounterTypes": [],
        "operationalEncounterTypes": [],
        "concepts": [],
        "forms": [],
        "formMappings": [],
        "addressLevelTypes": [],
        "locations": [],
        "catchments": [],
        "users": {
            "dev": [],
            "staging": [],
            "uat": []
        },
        "rules": [],
        "checklistDetails": []
    }
}, rulesConfigInfra);
