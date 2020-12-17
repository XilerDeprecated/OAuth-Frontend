import {
  OAuthPermissionsMessage,
  OAuthPermissionsPermission,
  OAuthPermissionsPermissionsWrapper,
  OAuthPermissionsWrapper,
} from "./OAuthPermissions.styled";

import React from "react";
import { XilerApp } from "../XilerAccounts/Organisation.types";

export const OAuthPermissions: React.FC<XilerApp> = (props) => {
  return (
    <OAuthPermissionsWrapper>
      <OAuthPermissionsMessage>
        This will allow {props.organisation.name} to:
      </OAuthPermissionsMessage>
      <OAuthPermissionsPermissionsWrapper>
        {props.permissions.map((permission) => (
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
