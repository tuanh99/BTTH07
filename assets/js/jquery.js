$(document).ready(function () {
	const checkLength = (inputElement, spanElement, start, end) => {
		inputElement.blur(function () {
			const value = inputElement.val().length
			value >= start && value <= end
				? (spanElement[0].textContent = undefined)
				: (spanElement[0].textContent = `Nhận độ dài từ ${start} đến ${end}`)
		})
	}

	checkLength($('#txUserID'), $('#statusOfUserID'), 5, 12)
	checkLength($('#txPassword'), $('#statusOfPassword'), 7, 12)

	const alphabate = /^[a-zA-Z]+$/
	const numeric = /^[0-9]+$/
	const email =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	const checkOnly = (inputElement, regex, statusElm, contentError) => {
		inputElement.blur(function () {
			const value = regex.test(inputElement.val())
			value
				? (statusElm[0].textContent = undefined)
				: (statusElm[0].textContent = contentError)
		})
	}

	checkOnly(
		$('#txName'),
		alphabate,
		$('#statusOfName'),
		'Chỉ được chữ và ghi liền k dấu'
	)
	checkOnly(
		$('#txZipCode'),
		numeric,
		$('#statusOfZipCode'),
		'Chỉ nhận giá trị số'
	)
	checkOnly(
		$('#txEmail'),
		email,
		$('#statusOfEmail'),
		'Vui lòng nhập đúng email'
	)
})
