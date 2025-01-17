import assertNever from 'assert-never';

import { Operations } from '../../generated/OpenapiIntegrations';
import { isDrawerSystemProperties, isEmailSystemProperties, SystemProperties } from '../../types/Notification';

export const getDefaultSystemEndpointAction = (systemProperties: SystemProperties) => {
    if (isEmailSystemProperties(systemProperties)) {
        return Operations.EndpointResourceGetOrCreateEmailSubscriptionEndpoint.actionCreator({
            body: {
                only_admins: systemProperties.props.onlyAdmins,
                group_id: systemProperties.props.groupId
            }
        });
    } else if (isDrawerSystemProperties(systemProperties)) {
        return Operations.EndpointResourceGetOrCreateDrawerSubscriptionEndpoint.actionCreator({
            body: {
                only_admins: systemProperties.props.onlyAdmins,
                group_id: systemProperties.props.groupId
            }
        });
    }

    assertNever(systemProperties);
};
