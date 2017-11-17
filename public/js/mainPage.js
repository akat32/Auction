function listover(obj) {
    obj.style.backgroundColor = "#327fff";
    obj.style.color = "white";
}

function listout(obj) {
    obj.style.backgroundColor = "white";
    obj.style.color = "#327fff";
}

function over(obj, num, sr) {
    obj.style.backgroundColor = "white";
    console.log(num);
    var tex = document.getElementsByClassName("categorytext").item(num);
    tex.style.color = "#327fff";
    var im = document.getElementsByClassName("image").item(num);
    im.setAttribute("src", sr);

}

function out(obj, num, sr) {
    obj.style.backgroundColor = "#327fff";
    var tex = document.getElementsByClassName("categorytext").item(num);
    tex.style.color = "white";
    console.log(num);
    var im = document.getElementsByClassName("image").item(num);
    im.setAttribute("src", sr);
}
function printProduct(items) {
    for (i = 0; i < items.length; i++) {
        var product = document.createElement("div");
        product.class = "product";

        var productImageDiv = document.createElement("div");
        productImageDiv.class = "productImageDiv";
        var productImage = document.createElement("img");
        productImage.class = "productImage";
        productImage.src = items[i].item_picture;

        var productData = document.createElement('div');
        productData.class = "productdata";

        var itemName = document.createElement('span');
        itemName.class = "itemname";
        itemName.innerHTML = items[i].item_name;
        var alarmImage = document.createElement('img');
        alarmImage.class = "alarmImage";
        alarmImage.src = "Resource/black/alarm-clock-png-475340-alarm-clock-512.png";
        alarmImage.innerHTML = '<span class="itemtime">' + items[i].item_time + '</span><br>'
        var itemPrice = document.createElement('span');
        itemPrice.class = "itemprice";
        itemPrice.innerHTML = items[i].time;

        productImageDiv.appendChild(productImage);

        productData.appendChild(itemName);
        productData.appendChild(alarmImage);
        productData.appendChild(itemPrice);

        product.appendChild(productImageDiv);
        product.appendChild(productData);

        document.getElementById(productList).appendChild(product);
    }
//printProduct가 만드는 모양
// <div class="productlist">
//     <div class="product">
//         <div class="productImageDiv">
//                 <img src=Resource/benz.png class="productImage">
//         </div>
//         <div class="productdata">
//                  <span class="itemname">사고싶다</span><br>
//                  <img src="Resource/black/alarm-clock-png-475340-alarm-clock-512.png" class="alarmImage"><span class="itemtime">1:1:20:20</span><br>
//                  <span class="itemprice">999,999￦</span>
//         </div>
//     </div>
// </div>
}
function removeList() {
    var productList = document.getElementById("productList");
    while ( productList.hasChildNodes() ) {
        productList.removeChild( productList.firstChild );
    }
}
function categorySearch(send) {
        //remove
        removeList();
        //search
        var test = $.ajax({
            type: "POST",
            url: "http://iwin247.info:3474/find/category",
            category: send,
            success: function(data) {
                return data;
            },
            error: function() {
                alert("ERROR");
            }
        });
        test.done(function(json) {
            //getjson
            var searchItems = [];
            for (var i = 0; i < json.length; i++) {
                searchItems[i] = json[i];
            }
            //print
            printProduct(searchItems);
        });

}
$(document).ready(function() {
    //popup3 Top animation
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.top,.popUp3').fadeIn();
        } else {
            $('.top,.popUp3').fadeOut();
        }
    });
    $('.top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    //create products list get
    removeList();
    var test = $.ajax({
        type        : "POST",
        url         : "http://iwin247.info:3474/auth/signup",
        success     : function (data) {
            return data;
        },
        error       : function () {
            console.log("error");
        }
    });
    test.done(function (json) {
        var items = [];
        for (var i = 0; i < json.length; i++) {
            items[i] = json[i];
        }
        //print
        printProduct(items)
    });



    //name search
    $('#searchButton').click(function() {
        //remove
        removeList();
        //search
        var test = $.ajax({
            type: "POST",
            url: "http://iwin247.info:3474/find/name",
            item_name: $('#searchText').val(),
            success: function(data) {
                return data;
            },
            error: function() {
                alert("ERROR");
            }
        });
        test.done(function(json) {
            //getjson
            var searchItems = [];
            for (var i = 0; i < json.length; i++) {
                searchItems[i] = json[i];
            }
            //print
            printProduct(searchItems);
        });
    });

    //category search
    $('#cloth').click(categorySearch(cloth));
    $('#pizza').click(categorySearch(cloth));
    $('#living').click(categorySearch(cloth));
    $('#elec').click(categorySearch(cloth));
    $('#figure').click(categorySearch(cloth));
    $('#ticket').click(categorySearch(cloth));
    $('#school_supply').click(categorySearch(cloth));
    $('#book').click(categorySearch(cloth));
    $('#pet').click(categorySearch(cloth));
    $('#furniture').click(categorySearch(cloth));


});
