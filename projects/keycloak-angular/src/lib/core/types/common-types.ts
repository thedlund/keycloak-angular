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

/**
 * ExcludedUrl type may be used to specify the url and the HTTP method that
 * should not be intercepted by the KeycloakBearerInterceptor.
 *
 * Example:
 * const excludedUrl: ExcludedUrl[] = [
 *  {
 *    url: 'reports/public'
 *    httpMethods: ['GET']
 *  }
 * ]
 *
 * In the example above for URL reports/public and HTTP Method GET the
 * bearer will not be automatically added.
 *
 * If the url is informed but httpMethod is undefined, then the bearer
 * will not be added for all HTTP Methods.
 */
export type UrlMatcher = {
  url: string;
  httpMethods?: HttpMethods[];
};

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
