/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

/**
 * HTTP Methods
 */
export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';

// TYPES FROM KEYCLOAK-JS
/**
 * Keycloak onload options: 'login-required' or 'check-sso'
 */
export type KeycloakOnLoad = 'login-required' | 'check-sso';
/**
 * Keycloak response mode options: 'query' or 'fragment'
 */
export type KeycloakResponseMode = 'query' | 'fragment';
/**
 * Keycloak response type options: 'code' or 'id_token token' or 'code id_token token'
 */
export type KeycloakResponseType = 'code' | 'id_token token' | 'code id_token token';
/**
 * Keycloak flow: 'standard' or 'implicit' or 'hybrid'
 */
export type KeycloakFlow = 'standard' | 'implicit' | 'hybrid';
