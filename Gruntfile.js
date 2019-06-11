const rulesConfigInfra = require('rules-config/infra');
const IDI = require('openchs-idi');

module.exports = IDI.configure({
    "chs-admin": "admin",
    "org-admin": "admin@myorganisation",
    "secrets": '../secrets.json',
    "files": {
        "adminUsers": {
            "dev": ["./users/dev-admin-user.json"],
        },
        "forms": [
            "./registration/registrationForm.json",
            "./program1/enrolment.json",
            "./program1/encounter1.json",
        ],
        "formMappings": ["./formMappings.json"],
        "formDeletions": [],
        "formAdditions": [],
        "catchments": ["./catchments.json"],
        "checklistDetails": [],
        "concepts": [
            "./registration/concepts.json",
            "./program1/concepts.json",
            "./program2/concepts.json",
        ],
        "locations": [
            "locations/all.json",
        ],
        "programs": ["./programs.json"],
        "encounterTypes": ["./encounterTypes.json"],
        "operationalEncounterTypes": ["./operationalModules/operationalEncounterTypes.json"],
        "operationalPrograms": ["./operationalModules/operationalPrograms.json"],
        "operationalSubjectTypes": ["./operationalModules/operationalSubjectTypes.json"],
        "users": {
            "dev": ["./users/dev-users.json"],
        },
        "rules": [
            "./rules.js",
        ]
    }
}, rulesConfigInfra);
