document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function(event) {


        var fullname = document.getElementById('fullname').value;
        var cardcode = document.getElementById('cardcode').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var customertype = document.getElementById('customertype').value;
        var invoice = document.getElementById('invoice').value;
        var description = document.getElementById('description').value;


        var feedbackInfo = "Họ và Tên: " + fullname + "\n" +
                            "Mã thẻ: " + cardcode + "\n" +
                            "Số điện thoại: " + phone + "\n" +
                            "E-mail: " + email + "\n" +
                            "Loại khách hàng: " + customertype + "\n" +
                            "Mã hóa đơn: " + invoice + "\n" +
                            "Chi tiết mô tả: " + description;


    });
});
