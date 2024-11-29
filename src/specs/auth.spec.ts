import { expect } from "@playwright/test";
import { fixtures as test } from "../fixtures/api-fixture";
import { AUTH_REQUEST_JSON_BODY } from "../constants/api-request-constant";
import { HttpStatusCode } from "../constants/HttpStatusCode";
import { appConfig } from '../app-config';

test.describe("Authentication Test Suite", () => {
  test("[POST] Request new authentication token", async ({
    apiFixture,
  }) => {
    const response = await apiFixture.post(appConfig.urlPath.auth, AUTH_REQUEST_JSON_BODY);
    expect(response.status()).toBe(HttpStatusCode.OK_200);
    expect((await response.json()).token).not.toBeNull();
  });
});
