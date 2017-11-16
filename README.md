# Team : 성기사 is King
2017 Dicon node.js backend

## API Document

* POST /auth/signup : User register

> Params

    id : User's ID [String]

    passwd : User's Password [String]

    email : User's Email [String]

    name : User's Nick-Name [String]

    phone_number : User's Phone_number [String]

    address : User's Address [String]

> Response

    HTTP 200 : send User id, User token

    HTTP 412 : User duplicate

* POST /auth/signin : User's Login

> Params

    id : User's id [String]

    passwd : Users's passwd [String]

> Response

    res.redirect('/');

* POST /find/name : Find Item (use item's name)

> Params

    item_name : item's name [String]

> Response

    HTTP 200 : send item's json

    HTTP 404 : item Not Found

* POST /find/category : Find Item (use item's category)

> Params

    category : item's category [String]

> Response

    HTTP 200 : send item's json

    HTTP 404 : item Not Found

* POST /image : Item_image

> Params

    file : Item's Image

> Response

    HTTP 200 : send image's name, type

    HTTP 500 : fail save

* POST /list/add : Add Item

> Params

    item_name : Item's name

    start_price : Item's First price

    item_image :  Image's name. "When you received form '/image' "

    item_introduce : Introduce Your Item

    category : Item's category

    keyword : Item's keyword

> Response

    HTTP 200 : item's json

    HTTP 412 : params error!

* GET /open/:item : Find with Item's item_token

> params

    item_token : Item's item_token

    ex) localhost:3000/open/itemtoken

> Response

    HTTP 200 : Item's json

    HTTP 404 : Item Not Found!
