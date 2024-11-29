export class HttpStatusCode {
  // Informational responses (100–199)
  static CONTINUE_100 = 100;
  static SWITCHING_PROTOCOLS_101 = 101;
  static PROCESSING_102 = 102;

  // Successful responses (200–299)
  static OK_200 = 200; 
  static CREATED_201 = 201;
  static ACCEPTED_202 = 202;
  static NON_AUTHORITATIVE_INFORMATION_203 = 203;
  static NO_CONTENT_204 = 204;
  static RESET_CONTENT_205 = 205;
  static PARTIAL_CONTENT_206 = 206;

  // Redirection messages (300–399)
  static MULTIPLE_CHOICES_300 = 300;
  static MOVED_PERMANENTLY_301 = 301;
  static FOUND_302 = 302;
  static SEE_OTHER_303 = 303;
  static NOT_MODIFIED_304 = 304;
  static TEMPORARY_REDIRECT_307 = 307;
  static PERMANENT_REDIRECT_308 = 308;

  // Client error responses (400–499)
  static BAD_REQUEST_400 = 400;
  static UNAUTHORIZED_401 = 401;
  static PAYMENT_REQUIRED_402 = 402;
  static FORBIDDEN_403 = 403;
  static NOT_FOUND_404 = 404;
  static METHOD_NOT_ALLOWED_405 = 405;
  static NOT_ACCEPTABLE_406 = 406;
  static REQUEST_TIMEOUT_408 = 408;
  static CONFLICT_409 = 409;
  static GONE_410 = 410;
  static PAYLOAD_TOO_LARGE_413 = 413;
  static UNSUPPORTED_MEDIA_TYPE_415 = 415;
  static TOO_MANY_REQUESTS_429 = 429;
  
  // Server error responses (500–599)
  static INTERNAL_SERVER_ERROR_500 = 500;
  static NOT_IMPLEMENTED_501 = 501;
  static BAD_GATEWAY_502 = 502;
  static SERVICE_UNAVAILABLE_503 = 503;
  static GATEWAY_TIMEOUT_504 = 504;
  static HTTP_VERSION_NOT_SUPPORTED_505 = 505;

  /**
   * Retrieves the status text for a given status code.
   * @param code The HTTP status code.
   * @returns The corresponding status text or `null` if the code is invalid.
   */
  static getStatusText(code: number): string | null {
    const statusTexts: Record<number, string> = {
      100: "Continue",
      101: "Switching Protocols",
      102: "Processing",
      200: "OK",
      201: "Created",
      202: "Accepted",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      307: "Temporary Redirect",
      308: "Permanent Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      406: "Not Acceptable",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      413: "Payload Too Large",
      415: "Unsupported Media Type",
      429: "Too Many Requests",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported",
    };
    return statusTexts[code] || null;
  }
}