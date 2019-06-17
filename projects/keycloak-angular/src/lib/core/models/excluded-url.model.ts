/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { HttpMethods } from '../types/common-types';

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
export interface ExcludedUrl {
  url: string;
  httpMethods?: HttpMethods[];
}
