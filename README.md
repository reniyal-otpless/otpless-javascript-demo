[![OTPless](https://d1j61bbz9a40n6.cloudfront.net/website/home/v4/logo/white_logo.svg)](https://otpless.com/platforms/home)

# OTPless Web SDK -> Javascript Demo

## Steps to add OTPless SDK to your Website

1. **Create New / Choose your App from [OTPless dashboard](https://otpless.com/dashboard/customer/dev-settings) and copy the `APP ID`**
2. **Add OTPLESS Sign in**

    > Add the code to your sign up/ sign in page where you want to embed your sign in functionality, and replace `PASTE_YOUR_APPID_HERE` with the copied `APP ID` from the dashboard.

    ```html
    <script id="otpless-sdk" type="text/javascript" src="https://otpless.com/auth.js" appid="PASTE_YOUR_APPID_HERE"></script>
    ```

    > [view source](./auth.html#L12)

3. **Retrieving User's Information**

    > Implement the following script to retrieve and log the user's information.
    >> Add your custom logic to handle UserData(**otplessUser**) and redirect post authentication in the `otpless` function.

    ```html
    <script type="text/javascript">
        function otpless(otplessUser) {
            // Add your Custom logic here to handle UserData(otplessUser) and redirect post authentication.
            console.log(otplessUser);
            alert(JSON.stringify(otplessUser));
            window.location.href = '/';
        }
    </script>
    ```

    > [view source](./auth.html#L14)

## *Thank You*

## [Visit OTPless](https://otpless.com/platforms/javascript)
