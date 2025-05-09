import React from 'react';

const ApiDocs = () => {
  return (
    <div className="pt-20 px-4 md:px-8 min-h-screen bg-[#f9e3be]">
      <div className="container mx-auto py-12 max-w-4xl bg-white rounded-none shadow-[8px_8px_0_#3f1c08] border-4 border-[#3f1c08]">
        <div className="px-6 md:px-12">
          <h1 className="text-2xl font-pixel mb-8 text-[#3f1c08]">OATH Authentication API</h1>
          <div className="prose prose-sm max-w-none font-pixel">
            <pre className="bg-[#3f1c08] text-[#f9e3be] p-6 overflow-x-auto rounded-none border-4 border-[#3f1c08] text-xs leading-relaxed">
{`openapi: 3.0.3
info:
  title: OATH Authentication API
  version: 1.0.0
  description: >
    This API provides endpoints for generating and verifying one-time passwords (OTPs)
    using the OATH standard (TOTP and HOTP algorithms). It is suitable for implementing
    two-factor authentication (2FA) in web and mobile applications.

servers:
  - url: https://auth.example.com/api/v1/oath

paths:
  /generate:
    post:
      summary: Generate an OTP code
      description: Generates a one-time password using a shared secret and either TOTP or HOTP algorithm.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [type, secret]
              properties:
                type:
                  type: string
                  enum: [totp, hotp]
                secret:
                  type: string
                  example: JBSWY3DPEHPK3PXP
                counter:
                  type: integer
                  description: Required for HOTP
                  example: 42
                timestamp:
                  type: integer
                  description: Optional Unix timestamp for TOTP (defaults to current time)
                  example: 1680000000
      responses:
        '200':
          description: OTP successfully generated
          content:
            application/json:
              schema:
                type: object
                properties:
                  otp:
                    type: string
                    example: "482913"
                  valid_for_seconds:
                    type: integer
                    example: 30
        '400':
          description: Invalid request parameters

  /verify:
    post:
      summary: Verify an OTP code
      description: Verifies whether a given OTP is valid for a secret and authentication type.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [type, secret, otp]
              properties:
                type:
                  type: string
                  enum: [totp, hotp]
                secret:
                  type: string
                otp:
                  type: string
                  example: "482913"
                counter:
                  type: integer
                  description: Required for HOTP
                timestamp:
                  type: integer
                  description: Optional for TOTP if using custom time
      responses:
        '200':
          description: OTP verification result
          content:
            application/json:
              schema:
                type: object
                properties:
                  valid:
                    type: boolean
                    example: true
        '422':
          description: Invalid or expired OTP
        '400':
          description: Bad request

  /qr-code:
    get:
      summary: Generate OTP setup QR code
      description: Returns an OTP URI and an optional QR code image URL for apps like Google Authenticator.
      parameters:
        - name: label
          in: query
          required: true
          schema:
            type: string
            example: user@example.com
        - name: secret
          in: query
          required: true
          schema:
            type: string
            example: JBSWY3DPEHPK3PXP
        - name: issuer
          in: query
          required: true
          schema:
            type: string
            example: MyApp
        - name: type
          in: query
          required: true
          schema:
            type: string
            enum: [totp]
            example: totp
      responses:
        '200':
          description: OTP URI and QR code
          content:
            application/json:
              schema:
                type: object
                properties:
                  otpauth_uri:
                    type: string
                    example: otpauth://totp/MyApp:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=MyApp
                  qr_code_url:
                    type: string
                    example: https://auth.example.com/qrcodes/abc123.png

components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-API-Key

security:
  - ApiKeyAuth: []`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;