import { expect } from "@playwright/test";
import { fixtures as test } from "../fixtures/api-fixture";
import {
  AUTH_REQUEST_JSON_BODY,
  CREATE_BOOKING_REQUEST_JSON_BODY,
  UPDATE_BOOKING_REQUEST_JSON_BODY,
} from "../constants/api-request-constant";
import { HttpStatusCode } from "../constants/HttpStatusCode";
import { appConfig } from '../app-config';

test.describe("Booking Test Suite", () => {
  let token: string;
  let bookingId: string;

  test.beforeAll(async ({ apiFixture }) => {
    const authResponse = await apiFixture.post(appConfig.urlPath.auth, AUTH_REQUEST_JSON_BODY);
    expect(authResponse.status()).toBe(HttpStatusCode.OK_200);
    token = (await authResponse.json()).token;

    const createBookingResponse = await apiFixture.post(
      appConfig.urlPath.booking,
      CREATE_BOOKING_REQUEST_JSON_BODY,
      token
    );
    expect(createBookingResponse.status()).toBe(HttpStatusCode.OK_200);
    bookingId = (await createBookingResponse.json()).bookingid;
  });

  test("[GET] Retrieve list of bookings", async ({ apiFixture }) => {
    const response = await apiFixture.get(appConfig.urlPath.booking, token);
    expect(await response.status()).toBe(HttpStatusCode.OK_200);

    const responseBody = await response.json();
    expect(responseBody[0]).toHaveProperty("bookingid");
    expect(responseBody.length).toBeGreaterThan(0);
  });

  test("[PUT] Fully update an existing booking", async ({
    apiFixture,
}) => {
    const response = await apiFixture.put(
      `${appConfig.urlPath.booking}/${bookingId}`,
      UPDATE_BOOKING_REQUEST_JSON_BODY,
      token
    );
    expect(response.status()).toBe(HttpStatusCode.OK_200);

    expect((await response.json()).firstname).toBe("Eranga");
  });

  test("[PATCH] Partially update an existing booking", async ({
    apiFixture,
  }) => {
    const response = await apiFixture.patch(
      `${appConfig.urlPath.booking}/${bookingId}`,
      {
        firstname: "john",
        lastname: "smith",
      },
      token
    );
    expect(response.status()).toBe(HttpStatusCode.OK_200);

    const responseBody = await response.json();
    expect(responseBody.firstname).toBe("john");
    expect(responseBody.lastname).toBe("smith");
  });

  test("[DELETE] Delete an existing booking", async ({ apiFixture }) => {
    const response = await apiFixture.delete(
      `${appConfig.urlPath.booking}/${bookingId}`,
      token
    );
    expect(response.status()).toBe(HttpStatusCode.CREATED_201);
  });
});

