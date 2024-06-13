const queryTypes = document.querySelectorAll('.query'),
	firstName = document.getElementById('first-name'),
	lastName = document.getElementById('last-name'),
	email = document.getElementById('email'),
	submitBtn = document.getElementById('submit'),
	fNameError = document.getElementById('first-name_error'),
	lNameError = document.getElementById('last-name_error'),
	emailErrorMsg = document.getElementById('emailErrorMsg'),
	message = document.getElementById('message'),
	messageError = document.getElementById('textarea-msg'),
	queryErrorMsg = document.getElementById('query-error'),
	teamContact = document.getElementById('team'),
	successMsg = document.getElementById('success-msg')

let nameStatus = false,
	lNameStatus = false,
	emailStatus = false,
	messageStatus = false

// submit data btn
submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
	validation()
	queryTypeValidation()
	contactTeam()
	

	// success message
	if(validation() & queryTypeValidation() && contactTeam()) {
		successMsg.style.opacity = '1'
		// hide the success message after 1s
		setTimeout(() => {
			successMsg.style.opacity = '0'
		},4000)

		firstName.value = ''
		lastName.value = ''
		email.value = ''
		message.value = ''
		// hide query types options one
		queryTypes[0].classList.remove('checked')
		queryTypes[0].querySelector('span span').classList.add('hidden')
		queryTypes[0].querySelector('span').classList.remove('checked')
		queryTypes[0].querySelector('input').checked = false
		// hide query types options two
		queryTypes[1].classList.remove('checked')
		queryTypes[1].querySelector('span span').classList.add('hidden')
		queryTypes[1].querySelector('span').classList.remove('checked')
		queryTypes[1].querySelector('input').checked = false
		
		teamContact.checked = false
	} 
})
// validation inputs function
function validation() {
	// check if there is a value in first name input
	if (firstName.value) {
		fNameError.innerText = ''
		firstName.style.borderColor = "hsl(186, 15%, 59%)"
		nameStatus = true
	} else {
		fNameError.innerText = 'This field is required'
		firstName.style.borderColor = "hsl(0, 66%, 54%)"
		nameStatus = false
	}
	// check if there is a value in last name input
	if (lastName.value) {
		lNameError.innerText = ''
		lastName.style.borderColor = "hsl(186, 15%, 59%)"
		lNameStatus = true
	} else {
		lNameError.innerText = 'This field is required'
		lastName.style.borderColor = "hsl(0, 66%, 54%)"
		lNameStatus = false
	}
	// check if there is a value in email input
	if (email.value) {
		emailErrorMsg.innerText = ''
		email.style.borderColor = "hsl(186, 15%, 59%)"

		// validation email address
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		
		if (emailRegex.test(email.value)) {
			emailStatus = true
		} else {
			emailErrorMsg.innerText = 'Please enter a valid email address'
			email.style.borderColor = "hsl(0, 66%, 54%)"
			emailStatus = false
		}

	} else {
		emailErrorMsg.innerText = 'This field is required'
		email.style.borderColor = "hsl(0, 66%, 54%)"
	}
	// check if there is a value in textarea input
	if (message.value) {
		messageError.innerText = ''
		message.style.borderColor = "hsl(186, 15%, 59%)"
		messageStatus = true
	} else {
		messageError.innerText = 'This field is required'
		message.style.borderColor = "hsl(0, 66%, 54%)"
		messageStatus = false
	}

	return nameStatus && lNameStatus && emailStatus && messageStatus
}
// click query type option
queryTypes.forEach(item => {
	item.addEventListener('click', (e) => {
		let checkbox = e.currentTarget.querySelector('input')
		const circle = e.currentTarget.querySelector('span span')
		const parentCircle = e.currentTarget.querySelector('span')
		
		if (checkbox.checked) {
			circle.classList.add('hidden')
			e.currentTarget.classList.remove('checked')
			parentCircle.classList.remove('checked')
			checkbox.checked = false
		} else {

			circle.classList.remove('hidden')
			e.currentTarget.classList.add('checked')
			parentCircle.classList.add('checked')
			checkbox.checked = true
		}
		
	})
});
// validation query type options
function queryTypeValidation() {
	// check any quey input is checked
	if(queryTypes[0].querySelector('input').checked || queryTypes[1].querySelector('input').checked) {
		queryErrorMsg.innerText = ""
		return true
	} else {
		queryErrorMsg.innerText = "Please select a query type"
		return false
	}
}

// check contact team 
function contactTeam() {
	const teamErrorMsg = document.getElementById('contact-team-error')
	if(teamContact.checked) {
		teamErrorMsg.innerText = ''
		return true
	} else {
		teamErrorMsg.innerText = 'To submit this form, please consent to being contacted'
		return false
	}
}


