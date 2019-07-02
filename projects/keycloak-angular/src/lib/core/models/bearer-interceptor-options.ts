/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { UrlMatcher } from '../types/common-types';

export interface BearerInterceptorOption {
  /**
   * By default all requests made by Angular HttpClient will be intercepted in order to
   * add the bearer in the Authorization Http Header. However, if this is a not desired
   * feature, the enableBearerInterceptor must be false.
   *
   * Briefly, if enableBearerInterceptor === false, the bearer will not be added
   * to the authorization header.
   *
   * The default value is true.
   */
  enableBearerInterceptor?: boolean;
  /**
   * String Array to exclude the urls that should not have the Authorization Header automatically
   * added. This library makes use of Angular Http Interceptor, to automatically add the Bearer
   * token to the request.
   */
  urlPattern?: UrlMatcher[];
  /**
   * Policy type.
   *
   * default: excluded
   */
  policyType: 'included' | 'excluded';
  /**
   * This value will be used as the Authorization Http Header name. The default value is
   * **Authorization**. If the backend expects requests to have a token in a different header, you
   * should change this value, i.e: **JWT-Authorization**. This will result in a Http Header
   * Authorization as "JWT-Authorization: bearer <token>".
   */
  authorizationHeaderName?: string;
  /**
   * This value will be included in the Authorization Http Header param. The default value is
   * **bearer**, which will result in a Http Header Authorization as "Authorization: bearer <token>".
   * If any other value is needed by the backend in the authorization header, you should change this
   * value, i.e: **Bearer**.
   *
   * Warning: this value must be in compliance with the keycloak server instance and the adapter.
   */
  bearerPrefix?: string;
}
