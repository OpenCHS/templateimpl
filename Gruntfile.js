const rulesConfigInfra = require("rules-config/infra");
const IDI = require("openchs-idi");

module.exports = IDI.configure({
    "chs-admin": "admin",
    "org-admin": "admin@templateorg",
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
        "addressLevelTypes": ["addressLevelTypes.json"],
        "locations": ["locations.json"],
        "catchments": ["catchments.json"],
        "users": {
            "dev": ["./users/dev-user.json"],
            "staging": [],
            "uat": []
        },
        "rules": [],
        "checklistDetails": []
    }
}, rulesConfigInfra);
