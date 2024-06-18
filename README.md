[![OTPless](https://d1j61bbz9a40n6.cloudfront.net/website/home/v4/logo/white_logo.svg)](https://otpless.com/)

# OTPless Web SDK -> Javascript Headless Demo

## Steps to add OTPless SDK to your Website

1. **Create New / Choose your App from [OTPless dashboard](https://otpless.com/dashboard/customer/dev-settings) and copy the `APP ID`**
2. **Add SDK Dependency**

    > Begin by incorporating the OTPLESS SDK into your project. This is achieved by inserting the following script tag within the “<head>” section of your HTML document. Replace `PASTE_YOUR_APPID_HERE` with the copied `APP ID` from the dashboard.

    ```html
    <script id="otpless-sdk" type="text/javascript" src="https://otpless.com/v2/headless.js" data-appid="PASTE_YOUR_APPID_HERE"></script>
    ```
    > [view source](./auth.html#L9)

3. **Initialize SDK and Handle Callback**

    > Implement the following script to retrieve and log the user's information.
    >> Add your custom logic to handle UserData(**otplessUser**) and redirect post authentication in the `otpless` function.

    ```html
    <script type="text/javascript">
        const callback = (otplessUser) => {
				// Add your Custom logic here to handle UserData(otplessUser) and redirect post authentication.
				const emailMap = otplessUser.identities.find((item) => item.identityType === 'EMAIL')
				const mobileMap = otplessUser.identities.find((item) => item.identityType === 'MOBILE')
				const token = otplessUser.token

				const email = emailMap?.identityValue

				const mobile = mobileMap?.identityValue

				const name = emailMap?.name || mobileMap?.name
				console.log(otplessUser)
				alert(JSON.stringify({ email, mobile, name, token }))
			}
			// Initialize OTPLESS SDK with the defined callback.
			const OTPlessSignin = new OTPless(callback)
    </script>
    ```
    > [view source](./auth.html#L31)

4. **Add Functions to handle authentication**

    - Social Signin.
        > OAuth Providers - 'WHATSAPP', 'GMAIL', 'FACEBOOK', 'MICROSOFT', etc.
        ```js
        const oauth = (provider) => {
            OTPlessSignin.initiate({
                channel: 'OAUTH',
                channelType: provider
            })
        }
        ```
        > [view source](./auth.html#L65)

    - Phone Authentication OTP/MagicLink
        ```js
        const phoneAuth = () => {
            OTPlessSignin.initiate({
                channel: 'PHONE',
                phone: '98785XXXXX',
                countryCode: '+91',
            })
        }
        ```
        > [view source](./auth.html#L49)

    - Email Authentications OTP/MagicLink

        ```js
        // Email Authentications OTP/MagicLink
        const emailAuth = () => {
            OTPlessSignin.initiate({
                channel: 'EMAIL',
                email: 'someone@example.com'
            })
        }
        ```
        > [view source](./auth.html#L58)

    - Verify OTP

        - Phone
            ```js
            const verifyOTP = () => {
                OTPlessSignin.verify({
                    channel: "PHONE",
                    phone: "98785XXXXX",
                    otp: "123456",
                    countryCode: "+91"
                })
            }
            ```

        - Email
            ```js
            const verifyOTP = () => {
                OTPlessSignin.verify({
                    channel: "EMAIL",
                    email: "someone@example.com",
                    otp: "123456"
                })
            }
            ```
        > [view source](./auth.html#L69)

5. **Create your UI**

    > Design UI to collect user input and trigger authentication method of your choice.

    ```html
    <div id="mobile-section">
        <input id="mobile-input" placeholder="Enter mobile number" />
        <button onclick="phoneAuth()">Request OTP</button>
    </div>

    <div id="otp-section" style="display: none;">
        <input id="otp-input" placeholder="Enter OTP" />
        <button onclick="verifyOTP()">Verify OTP</button>
    </div>

    <button onclick="oauth('WHATSAPP')">Austhenticate with WhatsApp</button>
    <button onclick="oauth('GMAIL')">Authenticate with Gmail</button>
    ```
    > [view source](./auth.html#L13)

### ***Note: Enable your choosen Authentication Method from [OTPless dashboard](https://otpless.com/dashboard/customer/channels) before using it.***

## *Thank You*

## [Visit OTPless](https://otpless.com/docs/frontend-sdks/web-sdks/javascript/headless)
