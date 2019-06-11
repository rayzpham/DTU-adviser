# Bot subnet calculator Doraneko

## Cấu hình bot

B1: Vào trang [Facebook developers](https://developers.facebook.com/) đăng kí tài khoản vào tạo app mới

B2: Clone this project

B3: Trong mục Products chọn messenger, chọn trang cần deploy bot

B4: Sau 3 bước trên chúng ta sẽ có 3 thông số APP_SECRET(mã ứng dụng tại phần settings app), PAGE_ACCESS_TOKEN (trong phần settings Messenger), VALIDATION_TOKEN = token. Trong project vừa clone có file .env.example > rename thành .env, điền 3 thông số trên vào file .env, ví dụ:


```
NODE_ENV=development
APP_SECRET=3be80793a024asda543715XXXXXXXX
VALIDATION_TOKEN=token
PAGE_ACCESS_TOKEN=EAAGgQ0YKP04BAOhCJyTxzo5YZAJD3TekWvI4HSpsZCahdadkjqiwjeB0hfZBUuVQHBDpxmXoQgwZAbnMhnzjIEgxk52iGHczyTvZCw2DRnpcjZA9IYTzF0LqdmBdv1OZBOUqir8XQxI7gg57FVLzI5z8roaaNXa4ttZAdUiLXXXXXXXXXXXXXXXXXXXXXX
```

B5: git init và push lên host, ở đây mình sử dụng heroku, sử dụng host nào tùy các bạn (chú ý host phải có xác thực SSL thì fb mới chấp nhận), nếu host ko phải là heroku thì chạy lệnh ```npm start```

B6: Tại phần webhook, Events -> chọn full; Điền link webhook: ```https://<tên app trên heroku>.heroku.com/webhook``` or ```https:<your_domain>.com/webhook```, token validation: ```token```; OK

B7: Vào địa chỉ ```https://<tên app trên heroku>.heroku.com/``` nếu Server is running là đã thành công

B8: Enjoy!

Chú ý: bot sử dụng NodeJS(>= 8.16.0) + Express Framework(4.17.0)
    Nếu muốn bot chạy public thì cần phải xét duyệt ứng dụng (App Review for Messenger) quyền ```page_messaging```

Một số hình ảnh ví dụ: 

![image1](https://github.com/tranphuquy19/DoranekoMessengerBot/blob/master/img/ss1.png?raw=true)

![image2](https://github.com/tranphuquy19/DoranekoMessengerBot/blob/master/img/ss2.png?raw=true)
