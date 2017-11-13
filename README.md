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

    HTTP 200 : send UserID and token

    HTTP 404 : User Not Found
