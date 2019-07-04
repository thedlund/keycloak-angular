/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { Injectable } from '@angular/core';

import * as Keycloak from 'keycloak-js';

import { KeycloakOptions } from '../models/keycloak-options';
import { BearerInterceptorOption } from '../models/bearer-interceptor-options';

@Injectable()
export class KeycloakConfig {
  private _kcInstance: Keycloak.KeycloakInstance;
  private _bearerInterceptorOptions: BearerInterceptorOption;
  private _initOptions: Keycloak.KeycloakInitOptions;

  constructor(options: KeycloakOptions = {}) {
    this.init(options);
  }

  private init({ config, initOptions, bearerInterceptorOptions }: KeycloakOptions): void {
    this._initOptions = initOptions;
    this._bearerInterceptorOptions = bearerInterceptorOptions;
    this._kcInstance = Keycloak(config);
  }

  get kcInstance(): Keycloak.KeycloakInstance {
    return this._kcInstance;
  }

  get bearerInterceptorOptions(): BearerInterceptorOption {
    return this._bearerInterceptorOptions;
  }

  get initOptions(): Keycloak.KeycloakInitOptions {
    return this._initOptions;
  }
}
