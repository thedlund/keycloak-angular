/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { TestBed, inject } from '@angular/core/testing';

import { KeycloakService } from './keycloak.service';

describe('KeycloakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeycloakService]
    });
  });

  it('should be created', inject(
    [KeycloakService],
    (service: KeycloakService) => {
      expect(service).toBeTruthy();
    }
  ));

  describe('#loadIncludedUrls', () => {
    it('Should create the IncludedUrlRegex objects if the bearerIncludedUrls arg is a string array', inject(
      [KeycloakService],
      (service: KeycloakService) => {
        const loadIncludedUrls = service['loadIncludedUrls'];
        const result = loadIncludedUrls(['home', 'public']);
        const { urlPattern, httpMethods } = result[0];

        expect(result.length).toBe(2);
        expect(urlPattern).toBeDefined();
        expect(urlPattern.test('http://url/home')).toBeTruthy();
        expect(httpMethods.length).toBe(0);
      }
    ));

    it('Should create the IncludedUrlRegex objects if the bearerIncludedUrls arg is an mixed array of strings and IncludedUrl objects', inject(
      inject([KeycloakService], (service: KeycloakService) => {
        const loadIncludedUrls = service['loadIncludedUrls'];
        const result = loadIncludedUrls([
          'home',
          { url: 'public', httpMethods: ['GET'] }
        ]);
        expect(result.length).toBe(2);

        let includedRegex1 = result[0];
        expect(includedRegex1.urlPattern).toBeDefined();
        expect(includedRegex1.urlPattern.test('https://url/home')).toBeTruthy();
        expect(includedRegex1.httpMethods.length).toBe(0);

        let includedRegex2 = result[1];
        expect(includedRegex2.urlPattern).toBeDefined();
        expect(
          includedRegex2.urlPattern.test('https://url/public')
        ).toBeTruthy();
        expect(includedRegex2.httpMethods.length).toBe(1);
        expect(includedRegex2.httpMethods[0]).toBe('GET');
      }
    ));

    it('should not call login in error case if getToken is called with forceLogin false', inject(
      [KeycloakService],
      async (service: KeycloakService) => {
        service.updateToken = async () => Promise.reject(new Error('test'));
        spyOn(service, 'login');

        let error: Error;
        await service.getToken(false).catch(e => error = e);

        expect(error).toBeDefined();
        expect(service.login).not.toHaveBeenCalled();
      }
    ));

    it('should return correct token in success case if getToken is called with forceLogin false', inject(
      [KeycloakService],
      async (service: KeycloakService) => {
        service.updateToken = async () => Promise.resolve(true);
        (service['_instance'] as any) = {
          token: 'testToken'
        };

        const token = await service.getToken(false);

        expect(token).toEqual('testToken');
      }
    ));
  });
});
