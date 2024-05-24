[![OTPless](https://d1j61bbz9a40n6.cloudfront.net/website/home/v4/logo/white_logo.svg)](https://otpless.com/platforms/home)

# OTPless Web SDK -> Javascript OnClick Page Demo

## Steps to add OTPless SDK to your Website

1. **Create New / Choose your App from [OTPless dashboard](https://otpless.com/dashboard/customer/dev-settings) and copy the `APP ID`**
2. **Add OTPLESS Sign in**

    > Add the code to your sign up/ sign in page where you want to embed your sign in functionality.

    ```html
    <div id="modalContainer">
    	<div id="otpless-login-page"></div>
    </div>
    ```

    > [view source](./auth.html#L13)

3. **Retrieving User's Information**

    > Implement the following script to retrieve and log the user's information.
    >
    > > Add your custom logic to handle UserData(**otplessUser**) and redirect post authentication in the `otpless` function.

    ```html
    <script type="text/javascript">
    	function otpless(otplessUser) {
    		// Add your Custom logic here to handle UserData(otplessUser) and redirect post authentication.
    		console.log(otplessUser)
    		alert(JSON.stringify(otplessUser))
    		window.location.href = '/'
    	}
    </script>
    ```

    > [view source](./auth.html#L20)

4. **Show/Hide OTPless Login**

    > Add the following script to handle the logic to show/hide otpless login page.
    >
    > > Replace [`PASTE_YOUR_APPID_HERE`](./auth.html#L47) with the copied `APP ID` from the dashboard.

    ```html
    <script type="text/javascript">
    	// Logic to show/hide otpless login page

    	const button = document.getElementById('showHideBtn')
    	const modalContainer = document.getElementById('modalContainer')

    	let isModalOpen = false

    	// function to Load OTPless CDN script in head
    	const loadScript = () => {
    		const isScriptLoaded = document.getElementById('otpless-sdk')
    		if (isScriptLoaded) return

    		const script = document.createElement('script')
    		script.id = 'otpless-sdk'
    		script.type = 'text/javascript'
    		script.src = 'https://otpless.com/v2/auth.js'
    		// TODO: Add your app id
    		script.setAttribute('data-appid', 'PASTE_YOUR_APPID_HERE')
    		document.head.appendChild(script)
    	}

    	// function to unload OTPless CDN script from head
    	const unloadScript = () => {
    		const script = document.getElementById('otpless-sdk')
    		script ? document.head.removeChild(script) : ''
    	}

    	const urlParams = new URLSearchParams(window.location.search)
    	const paramsValue = urlParams.get('ex')
    	if (paramsValue) loadScript()

    	// function to remove query param from url
    	const removeQueryParam = (param) => {
    		const url = new URL(window.location.href)
    		url.searchParams.delete(param)
    		window.history.pushState(null, '', url)
    	}

    	// function to open modal and show otpless login page
    	const openModal = () => {
    		const urlParams = new URLSearchParams(window.location.search)
    		const paramsValue = urlParams.get('ex')

    		if (!paramsValue) {
    			const currentURL = window.location.href
    			const newParam1 = 'ex=true'
    			const updatedURL = `${currentURL}?${newParam1}`
    			window.history.pushState(null, '', updatedURL)
    		}
    		loadScript()
    		const modalContainer = document.getElementById('modalContainer')
    		modalContainer ? (modalContainer.style.display = 'flex') : ''

    		setTimeout(() => {
    			removeQueryParam('ex')
    		}, 1000)
    	}

    	// function to close modal and hide otpless login page
    	const closeModal = () => {
    		removeQueryParam('ex')
    		unloadScript()
    		const modalContainer = document.getElementById('modalContainer')
    		modalContainer ? (modalContainer.style.display = 'none') : ''
    	}

    	const showHideModal = () => {
    		if (isModalOpen) closeModal()
    		else openModal()
    		isModalOpen = !isModalOpen
    	}

    	// Event listeners to show/hide otpless login page on click
    	button.addEventListener('click', showHideModal)
    	modalContainer.addEventListener('click', showHideModal)
    </script>
    ```

    > [view source](./auth.html#L29)

## _Thank You_

## [Visit OTPless](https://otpless.com/platforms/javascript)
