window.addEventListener('DOMContentLoaded', () => {
	// Home Page
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
		const authToken = window.localStorage.getItem('nekoTssel-PTO')
		if (!authToken) {
			window.location.href = 'auth.html'
		} else {
			document.getElementById('logout-btn').addEventListener('click', () => {
				if (authToken) {
					window.localStorage.removeItem('nekoTssel-PTO')
					window.localStorage.removeItem('os')
				}
				window.location.href = 'auth.html'
			})
		}
	}

	// Auth Page
	if (window.location.pathname === '/auth.html') {
		const authToken = window.localStorage.getItem('nekoTssel-PTO')
		if (authToken) {
			window.location.href = '/'
		}
	}
})
