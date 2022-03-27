const txUserID = document.querySelector('#txUserID')
const statusOfUserID = document.querySelector('#statusOfUserID')

const txPassword = document.querySelector('#txPassword')
const statusOfPassword = document.querySelector('#statusOfPassword')

const checkLength = (inputElement, spanElement, start, end) => {
	inputElement.onblur = () => {
		const value = inputElement.value.trim().length
		value >= start && value <= end
			? (spanElement.textContent = undefined)
			: (spanElement.textContent = `Nhận độ dài từ ${start} đến ${end}`)
	}
}

checkLength(txUserID, statusOfUserID, 5, 12)
checkLength(txPassword, statusOfPassword, 7, 12)

const txName = document.querySelector('#txName')
const statusOfName = document.querySelector('#statusOfName')

const txZipCode = document.querySelector('#txZipCode')
const statusOfZipCode = document.querySelector('#statusOfZipCode')

const txEmail = document.querySelector('#txEmail')
const statusOfEmail = document.querySelector('#statusOfEmail')

const alphabate = /^[a-zA-Z]+$/
const numeric = /^[0-9]+$/
const email =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const checkOnly = (inputElement, regex, statusElm, contentError) => {
	inputElement.onblur = () => {
		const value = regex.test(inputElement.value)
		value
			? (statusElm.textContent = undefined)
			: (statusElm.textContent = contentError)
	}
}

checkOnly(txName, alphabate, statusOfName, 'Chỉ được ghi chữ và ghi liền k dấu')
checkOnly(txZipCode, numeric, statusOfZipCode, 'Chỉ nhận giá trị số')
checkOnly(txEmail, email, statusOfEmail, 'Vui lòng nhập đúng email')






