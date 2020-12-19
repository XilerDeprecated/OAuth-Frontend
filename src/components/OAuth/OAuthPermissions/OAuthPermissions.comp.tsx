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
        {props.lang.site.permissions.access} {props.app.organisation.name}{" "}
        {props.lang.site.permissions.to}:
      </OAuthPermissionsMessage>
      <OAuthPermissionsPermissionsWrapper>
        {props.app.permissions.map((permission) => (
          <OAuthPermissionsPermission
            key={permission.id}
            title={permission.name}
          >
            {
              props.lang.permissions.filter(
                (item) => item.id === permission.id
              )[0].description
            }
          </OAuthPermissionsPermission>
        ))}

        {props.app.permissions.map((permission) => (
          <OAuthPermissionsPermission
            key={permission.id}
            title={permission.name}
          >
            {
              props.lang.permissions.filter(
                (item) => item.id === permission.id
              )[0].description
            }
          </OAuthPermissionsPermission>
        ))}
        {props.app.permissions.map((permission) => (
          <OAuthPermissionsPermission
            key={permission.id}
            title={permission.name}
          >
            {
              props.lang.permissions.filter(
                (item) => item.id === permission.id
              )[0].description
            }
          </OAuthPermissionsPermission>
        ))}
        {props.app.permissions.map((permission) => (
          <OAuthPermissionsPermission
            key={permission.id}
            title={permission.name}
          >
            {
              props.lang.permissions.filter(
                (item) => item.id === permission.id
              )[0].description
            }
          </OAuthPermissionsPermission>
        ))}
        {props.app.permissions.map((permission) => (
          <OAuthPermissionsPermission
            key={permission.id}
            title={permission.name}
          >
            {
              props.lang.permissions.filter(
                (item) => item.id === permission.id
              )[0].description
            }
          </OAuthPermissionsPermission>
        ))}
        {props.app.permissions.map((permission) => (
          <OAuthPermissionsPermission
            key={permission.id}
            title={permission.name}
          >
            {
              props.lang.permissions.filter(
                (item) => item.id === permission.id
              )[0].description
            }
          </OAuthPermissionsPermission>
        ))}
        {props.app.permissions.map((permission) => (
          <OAuthPermissionsPermission
            key={permission.id}
            title={permission.name}
          >
            {
              props.lang.permissions.filter(
                (item) => item.id === permission.id
              )[0].description
            }
          </OAuthPermissionsPermission>
        ))}
      </OAuthPermissionsPermissionsWrapper>
    </OAuthPermissionsWrapper>
  );
};
