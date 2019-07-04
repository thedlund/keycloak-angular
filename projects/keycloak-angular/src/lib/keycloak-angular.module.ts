/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { NgModule, ModuleWithProviders } from '@angular/core';

import { CoreModule } from './core/core.module';
import { KeycloakOptions } from './core/models/keycloak-options';
import { KeycloakConfig } from './core/services/keycloak-config.service';

@NgModule({
  imports: [CoreModule]
})
export class KeycloakAngularModule {
  static forRoot(options?: KeycloakOptions): ModuleWithProviders {
    return {
      ngModule: KeycloakAngularModule,
      providers: [
        {
          provide: KeycloakConfig,
          useFactory: options => new KeycloakConfig(options)
        }
      ]
    };
  }

  static forChild(options?: KeycloakOptions): ModuleWithProviders {
    return {
      ngModule: KeycloakAngularModule,
      providers: [
        {
          provide: KeycloakConfig,
          useFactory: options => new KeycloakConfig(options)
        }
      ]
    };
  }
}
