$(document).ready(function() {
    $("#confirm").click(function () {
        var temp = $.ajax({
            type           : "POST",
            url            : "http://iwin247.info:3474/list/add",
            item_name     : $("#Pname").val(),
            start_price   : $("#Pstartprice").val(),
            item_introduce: $("#id").val(),
            category       : $("#Pcategory").val(),
            keyword         : $("#Pkeyword"),
            success     : function (data) {
                return data;
            },
            error       : function () {
                alert("실패")
            }
        });
        temp.done(function (temp) {
            console.log(temp);
        });
     });
    function handleImgFileSelect(e) {
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);

        filesArr.forEach(function(f) {
            if(!f.type.match("image.*")) {
                alert("확장자는 이미지 확장자만 가능합니다.");
                return;
            }

            sel_file = f;

            var reader = new FileReader();
            reader.onload = function(e) {
                $("#preview").attr("src", e.target.result);
            }
            reader.readAsDataURL(f);
        });
    }
    $("#FILE_TAG").on("change", handleImgFileSelect);
});
