import {
  OAuthPermissionsMessage,
  OAuthPermissionsPermission,
  OAuthPermissionsPermissionsWrapper,
  OAuthPermissionsWrapper,
} from "./OAuthPermissions.styled";

import { OAuthPermissionsProps } from "./OAuthPermissions.types";
import React from "react";

export const OAuthPermissions: React.FC<OAuthPermissionsProps> = (props) => {
  return (
    <OAuthPermissionsWrapper>
      <OAuthPermissionsMessage>
        {props.lang.permissions.access} {props.app.organisation.name} {props.lang.permissions.to}:
      </OAuthPermissionsMessage>
      <OAuthPermissionsPermissionsWrapper>
        {props.app.permissions.map((permission) => (
          <OAuthPermissionsPermission
            key={permission.id}
            title={permission.name}
          >
            {permission.description}
          </OAuthPermissionsPermission>
        ))}
      </OAuthPermissionsPermissionsWrapper>
    </OAuthPermissionsWrapper>
  );
};
