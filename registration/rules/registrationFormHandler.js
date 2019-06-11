import {FormElementsStatusHelper, RuleFactory} from 'rules-config/rules';

const RegistrationViewFilter = RuleFactory("0b97e156-97d1-471a-b04c-69aad8d64bdd", "ViewFilter");

@RegistrationViewFilter("63510db8-4f2e-44dd-bf31-c76b923a2208", "Registration View Filter", 100.0, {})
class RegistrationHandler {
    static exec(individual, formElementGroup) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new RegistrationHandler(), individual, formElementGroup);
    }
}

export {
    RegistrationHandler
}
