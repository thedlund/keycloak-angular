/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import * as Keycloak from 'keycloak-js';

export interface KeycloakAngularProfile extends Keycloak.KeycloakProfile {
  attributes: any;
}
