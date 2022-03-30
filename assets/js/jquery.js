$(document).ready(function(){
    // UserID
    function checkUserID() {
        let userID = $('#txtUserID').val()
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/
        if (userIDRegex.test(userID)) {
            return true
        }
        return false
    }
    // Password
    function checkPassword() {
        let txtPassword = $('#txtPassword').val()
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/
        if (passwordRegex.test(txtPassword)){
            return true
        }
        return false
    }
    //Name
    function checkName() {
        let txtName = $('#txtName').val()
        let nameRegex = /^[a-zA-Z]+$/
        if (nameRegex.test(txtName)) {
            return true
        }
        return false
    }

    //ZipCode
    function checkZipCode() {
        let txtZipCode = $('#txtZipCode').val()
        let zipCodeRegex = /^\d{5}/
        if (zipCodeRegex.test(txtZipCode)) {
            return true
        }
        return false
    }
    //Email
    function checkEmail() {
        let txtEmail = $('#txtEmail').val()
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
        if (emailRegex.test(txtEmail)) {
            return true
        }
        return false
    }
    //Gender
    function checkGender() {
        if ($("#txtMale").is(":checked") || $("#txtFemale").is(":checked")) {
            return true
        }
        return false
    }
    //Language
    function checkLanguage() {
        if ($("#txtEnglish").is(":checked") || $("#txtNonEnglish").is(":checked")) {
            return true
        }
        return false
    }

    //Country
    function checkCountry() {
        let seletxtCountry = $('#txtCountry option:selected')
        if (seletxtCountry.val() == 'Nhatban' || seletxtCountry.val() == 'Vietnam' || seletxtCountry.val() == 'Trungquoc') {
            return true
        }
        return false
    }
    $('#btnRegister').click(function(e){
        e.preventDefault();
        //UserID
        if (checkUserID()) {
            $('#statusOfUserID').text('UserID hợp lệ')
            $('#statusOfUserID').css('color','blue')
        } else {
            $('#statusOfUserID').text('UserID không hợp hợp lệ. Độ dài từ 5-12')
            $('#statusOfUserID').css('color','red')
        }
        //Password
        if (checkPassword() == true) {
            $('#statusOfPassword').text('Password hợp lệ')
            $('#statusOfPassword').css('color','blue')
        } else {
            $('#statusOfPassword').text('Password không hợp hợp lệ. Độ dài từ 7-12')
            $('#statusOfPassword').css('color','red')
        }
        // Name
        if (checkName() == true) {
            $('#statusOfName').text('Name hợp lệ')
            $('#statusOfName').css('color','blue')
        } else {
            $('#statusOfName').text('Name không hợp hợp lệ')
            $('#statusOfName').css('color','red')
        }
        //Address
        $('#statusOfAddress').text('Không bắt buộc')
        $('#statusOfAddress').css('color','blue')
        // Country
        if (checkCountry() == true) {
            $('#statusOfCountry').text('Đã chọn quốc gia')
            $('#statusOfCountry').css('color','blue')
        } else {
            $('#statusOfCountry').text('Xin mời chọn quốc gia')
            $('#statusOfCountry').css('color','red')
        }
        // ZIP code
        if (checkZipCode() == true) {
            $('#statusOfZipCode').text('Zip code hợp lệ')
            $('#statusOfZipCode').css('color','blue')
        } else {
            $('#statusOfZipCode').text('Zip code không hợp hợp lệ.')
            $('#statusOfZipCode').css('color','red')
        }
        // Email
        if (checkEmail() == true) {
            $('#statusOfEmail').text('Email hợp lệ')
            $('#statusOfEmail').css('color','blue')
        } else {
            $('#statusOfEmail').text('Email không hợp hợp lệ.')
            $('#statusOfEmail').css('color','red')
        }
        // Gender
        if (checkGender() == true) {
            $('#statusOfGender').text('Giới tính hợp lệ')
            $('#statusOfGender').css('color','blue')
        } else {
            $('#statusOfGender').text('Giới tinh chưa được chọn.')
            $('#statusOfGender').css('color','red')
        }
        // Language
        if (checkLanguage() == true) {
            $('#statusOfLanguage').text('Đã chọn')
            $('#statusOfLanguage').css('color','blue')
        } else {
            $('#statusOfLanguage').text('Ngoại ngữ chưa được chọn.')
            $('#statusOfLanguage').css('color','red')
        }
        //About
        $('#statusOfAbout').text('Không bắt buộc')
        $('#statusOfAbout').css('color','blue')
    })
}) 