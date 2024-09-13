//  1. basic .................................... 11
//  2. array .................................... 69
//  3. function ................................. 107
//  4. trả kq từ dialog + return ................ 136
//  5. includes ................................. 157
//  6. polyfill (optional) ...................... 166
//  7. object - Construct - Prototype ........... 170
//  8. date ..................................... 228
//  9. if else .................................. 242
// 10. switch ................................... 254
// 11. ternary operator (tắt if else 2 kq)....... 272
// 12. for -while - do .......................... 286
// 13. array method ............................. 363
// 14. math object .............................. 480
// 15. callback (custom hàm) .................... 507
// 16. set và (...) ............................. 541
// 17. html dom ................................. 550
// 18. class list ............................... 633
// 19. dom event ................................ 652
// 20. event listener ........................... 727















var fullName = 'Le Huu Thinh';
var age = 26;

// Hiện label trên cosole dev tool
console.log(age);  
// Hiện câu hỏi xác minh
confirm('Xac minh ban du tuoi');
// Hiện input xác minh
prompt('Xác minh đủ tuổi');
// Chạy code trong hàm sau 1 khoảng tg 1000ml = 1s
setTimeout(function () {
    alert('Thong bao');
}, 1000);
// Cứ cách 1 khoảng tg 1000ml chạy hàm 1 lần
setInterval(function () {
    console.log('Day la thong bao');
}, 1000);
// Cộng trừ
var a = 1 + 2
console.log(a)
// + - * /
// ** = lũy thừa
//  % = chia lấy số dư
// ++ tăng 1
// -- giảm 1

var tf = true;

// 0 / false / '' / undefined / NaN / null = false;
// khác trên thì = true

// && || !
console.log(typeof age)  //typeof là check kiểu data
// ----------------------------------------------------- Array
var num = [
    1,
    2,
    3,
    4,
    5
]

var num2 = [
    1,
    2
]

console.log(num.toString())   // chuyển array thành chuỗi

console.log(num.join('x'))   // cũng thành chuỗi và thêm kí tự ngăn cách

console.log(num.pop())   // xóa pt cuối xong xuất ra pt đó

console.log(num.shift())  //xóa pt đầu xong xuất ra pt đó

console.log(num.push('x, y'))  //thêm pt vào cuối array và xuất ra length mới

console.log(num.unshift('x, y'))     //thêm pt vào đầu array và xuất ra length mới
  
num.splice(1, 1)    // Bắt đầu từ vị trí index 1 sẽ xóa 1 pt

num.splice(1, 0, 'Hello')   // Ko xóa mà thêm 'Hello' vào vị trí index 1

num.splice(1, 1, 'Hello')   // Thay đổi pt vị trí 1 = 'Hello'

console.log(num.concat(num2)) // Nối array num2 vào array num1 rồi xuất ra

console.log(num.slice(1,2))  // Cắt mảng từ vị trí 1 đến vt 2 rồi xuất ra

console.log(num.slice(0)) // Copy mảng

// --------------------------------------------------- Function
function showDialog(){
    console.log('Xin chao cac ban!')
}
showDialog();
////

function showDialog(message){   // Gán tham số
    console.log(message)              // tham số gán chỉ sd đc trong hàm đó (private)
}
showDialog('Xin chao');     // Lúc gọi hàm thêm đối số
// Có thể thêm mọi kiểu data làm đối số như string, num, [1, 2], {3, 4}, ...
////

function showDialog(){   // Ko cần gán tham số
    console.log(arguments)              
}
showDialog('Mot', 'Hai', 'Ba');  // arguments hiện tất cả đối số được thêm thành Array
////

function showDialog(){    
    var myString = '';
    for (var pt of arguments){   // Lặp từng pt trong arguments
        myString += ` ${pt} - `  // Thêm vào myString + ' - '
    }       
    console.log(myString)       // Xong vòng lặp xuất ra
}
showDialog('Mot', 'Hai', 'Ba');

// -------------------------------------- Trả kq từ dialog + return
var isConfirm = confirm('Xin hãy chọn !')   // Pop dialog chọn OK hoặc Cancel
                                        // biến isConfirm được lưu true hoặc false
if (isConfirm == true)
    console.log('Ban da chon OK')
else 
    console.log('Ban da chon Cancel')
////

function phepCong(x, y){    
    return x + y            // return trả về kq của phép cộng
}
var ketQua = phepCong(5, 7);  // gán biến ketQua = return hàm(đối số, đối số)
console.log(ketQua)      // xuất biến đã gán bằng kết quả
////

var ketQua = function /*tên*/ (x, y){   // có thể gắn thẳng biến ketQua = function
    return x + y               // ở th này thì tên function chỉ đặt cho vui 
}
 console.log(ketQua(5, 7))   // gán đối số cho function

 // -------------------------------------------- Includes
 var myString = 'Flick nhanh nhat viet nam'
 var myString = ['Flick', 'nhanh', 'nhat', 'viet', 'nam']
 console.log(myString.includes('nhat'))    // Tìm xem trong chuỗi có 'nhat' ko
                                            // Tương tự Array
 console.log(myString.includes('nhat', 8))  // Tham số 2 là vị trí bắt đầu tìm
                                            // Nếu số âm i thì length mảng + i
 ////

 // -------------------------------------------- Polyfill
 // Là cách gọi của việc tự viết 1 hàm để hỗ trợ cho những trình duyệt cũ ko có
 // hàm đó (vd như tự viết hàm includes để hỗ trợ những td cũ ch có update hàm
 // include)
 // -------------------------------------------- Object
 var emailKey = 'email'   // Khai báo biến emailKey là Key email trong sinhVien
 
 var sinhVien = {  // Đọc trc
    MSSV: '2212444',        // Key: 'Value'
    Ho: 'Ngô',
    Ten: 'Quân',
    Lop: 'CTk46B',
    [emailKey]: '2212444@dlu.edu.vn', // Hiểu là email: '22212444@dlu.edu.vn'
                                      // Nhưng Key đc khai báo ở ngoài
    getName: function(){         // Key có thể là function
        return this.Ten         // this được hiểu là thg chứa nó khi được gọi 
                                //(ở đây là sinhVien)
    }
 }

 sinhVien.DiaChi = '01 Hẻm Điên Loạn'  // Thêm 1 Key chung vào Object cụ thể
            // Muốn thêm 1 Key vào tất cả thì phải dùng prototype ở dưới
 delete sinhVien.Ho  // Xóa 1 Key khỏi Object

 console.log(sinhVien.Ho)           // Xuất ra Key 'Ho' trong sinhVien

 console.log(sinhVien.getName())    // Gọi hàm getName (kq là Quân)

 // ------------ Object Construct
 function UserConstruct(Ho, Ten, Avatar){   // Khung của một list đối tượng
    this.Ho = Ho                      // Họ trong khung này sẽ = Họ user thêm vào      
    this.Ten = Ten
    this.Avatar = Avatar 

    this.GetName = function(){          // Hàm lấy Ho và Ten
        return `${this.Ho} ${this.Ten}`
    }
    
}

var User1 = new UserConstruct('Bảo', 'Quân', 'CatImg') // Tạo User mới
var User2 = new UserConstruct('Quốc', 'Huy', 'DogImg')

User1.Tittle = 'Học bài đi mầy'  // Thêm một thuộc tính unique cho 1 User
User2.Commemt = 'Thằng pếu'

console.log(User1)     // Xuất User1 ra
console.log(User2.GetName())  // Xuất HoTen của User2

// ------------Object prototype ------- Chung với ví dụ trên
// Khi cần thêm một thuộc tính/hàm chung vào tất cả User
UserConstruct.prototype.Lop = 'CTK46B'    // Thêm Lop: CTK46B vào tất cả User
UserConstruct.prototype.GetAvatar = function(){  // Thêm hàm lấy Avt vào tất cả User
    return this.Avatar
}

console.log(User1.Lop)  // Xuất thuộc tính chung vừa thêm là Lop
console.log(User2.GetAvatar()) // Xuất kết quả hàm lấy avt vừa thêm

// Nên dùng prototype cho hàm chung (giả sử 1000 object thì có 1000 hàm = No no,
// 1000 object dùng 1 hàm chung prototype = Yes)

//--------------------------------------- Date
var ThoiGian = new Date()     // Gán biến ThoiGian bằng Tg hiện tại Date()

console.log(ThoiGian)       // Xuất ra tg hiện tại

var Nam = ThoiGian.getFullYear()    // Lấy năm

var Thang = ThoiGian.getMonth() + 1  // Lấy tháng (0 - 11) + 1

var Ngay = ThoiGian.getDate()  // Lấy ngày
// Còn có hàm lấy phút giây milisec . . . . 

console.log(`Hôm nay là Ngày ${Ngay} tháng ${Thang} năm ${Nam} `)

//---------------------------------------- If - else
var thu = 2;   // Biến gán số từ 2 - 4, khác 2 - 4 là ko bt

if (thu == 2)
    console.log('Hôm nay là Thứ Hai')
else if (thu == 3)
    console.log('Hôm nay là Thứ Ba')
else if (thu == 4)
    console.log('Hôm nay là Thứ Tư')
else 
    console.log('Hông biết')

//---------------------------------------- Switch
var thu = 2;  // Biến gán số từ 2 - 6, khác 2 - 6 là ko bt

switch (thu){
    case 2:
        console.log('Thứ Hai')
        break;
    case 3:
        console.log('Thứ Ba')
        break;    
    case 4:             // Đúng nhiều trường hợp 
    case 5:
    case 6:
        console.log('Thứ Tư, Năm và Sáu')
        break;
    default:           // Trường hợp ko có đúng cái nào
        console.log('Hông bt')
 }   
//---------------------------------------- Ternary Operator - Toán tử 3 ngôi
// Nói đơn giản là Câu lệnh viết tắt cho if else 2 kết quả
////// Bài toán: 0 coin là Free - X coin là X coin
var coin = 250

if (coin > 0)
    console.log(`Mình tốn ${coin} coin`)
else
    console.log('Mình miễn phí á')
// Thay thì viết if else 2 kq như trên
var ketqua = coin > 0 ? `Mình tốn ${coin} coin` : 'Mình miễn phí á'
// Điều kiện ? Vế nếu đúng : Vế nếu sai
console.log(ketqua)

//----------------------------------------- For - While - do
for (var i = 1; i <= 10; i++)   // Chạy từ 1 đến 10
    console.log(i)
// For in để duyệt pt trong {} [] và string
var info = {
    Ho: 'Bao',
    Ten: 'Quan',
    Age: 20,
    Address: '01 Hoàng Diệu'
}

for (var thuoctinh in info){
    console.log(info['thuoctinh]'])              // Xuất ra Key của info[]
    console.log(info.thuoctinh)   // Xuất ra nội dung Key của info[]
}
// For of để duyệt pt trong [] và string
var info = [
    'Ngo',
    'Quan',
     20,
    '01 Hoàng Diệu'
]

Object.keys(info)   // Nếu là {} thì cần dòng này để lấy Key tạo thành []
Object.values(info)     // Lấy nội dung của Key để tạo thành []

for (var pt of info){     
    console.log(pt)        // Xuất nội dung từng pt của info[]
}

// Khác biệt: 
// for in: dùng đc {}                 / [] ra index của pt    / string
// for of: dùng đc {} cần dòng Object / [] ra nội dung của pt / string,

// While gần như là giống For
var i = 0;   // Phải khai báo biến i ngoài while
while (i < 100){
    i++
    console.log(i)
}
//  Do - while chạy lệnh 1 lần r check đk => dù đk sai cx chạy 1 lần đã
var i = 0;

do{
    i++;
    console.log(i);
} while (i  < 10)

// Break - Continue
for (var i = 1; i <= 10; i++){
    console.log(i)

    if (i >= 5)      
        break          // Chỉ xuất từ 1 - 5   
}

////// Bài toán: Xuất mỗi số chẵn từ 1 - 10
for (var i = 1; i <= 10; i++){
    if (i % 2 !== 0)        // i chia 2 mà dư 1 = số lẻ
        continue            // Thỏa mãn đk thì bỏ qua code tới lặp tiếp theo
    console.log(i)
}

// Nested Loop - vòng lặp trong vòng lặp  // Hiểu là mảng 2 chiều
////// Bài toán: Xuất 1 - 6
var myArray = [
    [1, 2],   
    [3, 4],
    [5, 6]
]

for (var i = 0; i < myArray.length; i++){   // Chạy từ 0 - 2
    for (var j = 0; j < myArray[i].length; j++){  // Chạy từ 0 - 1 của 0 - 2
        console.log(myArray[i][j])       // Xuất myArray00, 01, 10, 11, 20, 21
    }
}

// ----------------------------------------------- Array Method
// Các hàm dùng cho array
var shopMeo =[
    {
        id: 1,
        name: 'Mèo ốm',
        coin: 100
    },
    {
        id: 2,
        name: 'Mèo vừa',
        coin: 0
    },
    {
        id: 3,
        name: 'Mèo mập',
        coin: 0
    },
    {
        id: 4,
        name: 'Mèo siu mập',
        coin: 400
    },
    {
        id: 5,
        name: 'Mèo BÉO',
        coin: 500
    }
]
// forEach() xét từng pt trong []  
shopMeo.forEach(function(Meo, STT){   // tham số 1 là tên tự đặt cho pt, 2 là index
    console.log(STT , Meo)       // Xuất ra index trước pt cho hợp lý 
})                      // Note: if (this.hasOwnProperty(index)) để bỏ pt thừa cuối
// every() xét 1 đk đúng với tất cả pt thì true, chỉ 1 pt sai thì false = dừng
var isFree = shopMeo.every(function(Meo, STT){
    return Meo.coin === 0   // nếu tất cả coin = 0 thì true, chỉ 1 sai thì false
})
// some() giống every nhưng chỉ cần 1 pt đúng đk thì true = dừng, tất cả sai thì false
var isFree = shopMeo.some(function(Meo, STT){
    return Meo.coin === 0   // chỉ cần 1 coin = 0 thì true , tất cả sai thì false
})
// find() tìm nội dung 'x' có trong pt nào, tìm ra = dừng, k tìm ra = undefined
var timKiem = shopMeo.find(function(Meo, STT){
    return Meo.name === 'Mèo BÉO'
})
console.log(timKiem)   // Xuất ra pt 5 có name = Mèo BÉO
// filter() giống find() nhưng trả ra tất cả pt có nội dung 'x' thay vì pt đầu 
var timKiem = shopMeo.filter(function(Meo, STT){
    return Meo.name === 'Mèo'
})
// map() chỉnh sửa hoặc thêm vào các pt
// return 'x' thì x sẽ được map() dùng làm pt trong array updateShopMeo
var updateShopMeo = shopMeo.map(function(Meo, STT){
    return {
        id: Meo.id,
        name: 'Mèo này là: ' + Meo.name,
        coin: Meo.coin,
        giaCoin: Meo.coin + ' đồng'
    }
})
// reduce() để  trả về 1 giá trị khi đã tính toán/ xử lý array
////// Bài toán: Tính tổng coin của các Mèo
var totalCoin = shopMeo.reduce(function(bienlt, Meo, STT){ // reduce có thêm tham số đầu là biến lưu trữ
    return bienlt + Meo.coin
},0)   // giá trị ban đầu của biến lưu trữ = giống với kiểu dl muốn nhận (ở đây là number nên = 0)
////// Bài toán: Làm phẳng Array
var Ar = [1, 2, [3, 4], 5, 6, [7, 8, 9]]  

var newAr = Ar.reduce(function(so, Ar, index){
    return so.concat(Ar)
},[])
// Gt: Nó sẽ nối (concat) từng pt vào newAr, tới đoạn [3, 4] là nó sẽ nối [1, 2] và [3, 4] ...

//// Bài toán: Nối các object trong 2 array con thành 1 array
var shopMeo =[
    {
       
        type: [
            {
                id: 1,
                name: 'Mèo ốm',
                coin: 100
            },
            {
                id: 2,
                name: 'Mèo vừa',
                coin: 0
            },
        ]
    },
    {
        
        type: [
            {
                id: 3,
                name: 'Mèo mập',
                coin: 0
            },
            {
                id: 4,
                name: 'Mèo siu mập',
                coin: 400
            },
            {
                id: 5,
                name: 'Mèo BÉO',
                coin: 500
            }
        ]
    }
]

var newShop = shopMeo.reduce(function(bien, Loai, STT){ 
    return bien.concat(Loai.type)
},[])
// Gt: Nối bien[] với từng object trong 2 array con = cách gọi nó 'Loai.type'

// ------------------------------------------- Math Object
console.log(Math.PI)        // Xuất số Pi

console.log(Math.round(2.5))  // Làm tròn

console.log(Math.abs(-6))     // Trị tuyệt đối |-6| = 6

console.log(Math.ceil(4.0001))  // Làm tròn cao = 5

console.log(Math.floor(7.9999))  // Làm tròn thấp = 7

console.log(Math.random())   // random 1 số thập phân từ 0 - 1

for (var i = 0; i < 100; i++){     // Roll 100 lần
    var rate = Math.floor(Math.random() * 100)  // Hàm gacha vs 1% vàng 8% tím và xanh
    if (rate < 1)                           // random từ 0 - 99
        console.log('Bạn đã nổ Vàng !!')
    else if (rate < 8)
        console.log('Nổ Tím')
    else
        console.log('Eww')
}

console.log(Math.min(x, y, z, a, b, c))   // Xuất số bé nhất trong đám

console.log(Math.max(x, y, z, a, b, c))   // Xuất số lớn nhất trong đám

// --------------------------------------------- Call back (Custom hàm)
////// Bài toán: Tạo hàm filter2 có chứng năng giống filter (tìm kiếm các pt)
var loaiMeo = [
    'Béo',
    'Mập',
    'Mũm mĩm',
    'Vừa',
    'Ốm',
    'Mập'
]
// Hàm filter2 tự tạo
Array.prototype.filter2 = function(callback){
    var temp = []
    for (var index in this){      // duyệt từng pt trong loaiMeo
        if (this.hasOwnProperty(index)){  // bỏ qua pt filter2 dư cuối mảng
            var result = callback(this[index], index)   // gán result = pt[i]
            if (result == true){     // nếu so sánh đúng aka true
                temp.push(this[index])      // thêm pt đó vào array mới
            }
        }
    }
    return temp   // trả array mới
}

var ketqua = loaiMeo.filter2(function(Meo, index){ 
    return Meo === 'Mập'
})
console.log(ketqua)
// Hàm filter có sẵn
var ketqua = loaiMeo.filter(function(Meo, index){
    return Meo === 'Mập'
})

console.log(ketqua)

// ---------------------------------------------------- Set và (...) (lọc pt trùng)
////// Bài toán: Lọc pt trùng trong [] và trả ra [] mới
var array = ['a', 'b', 'c', 'c', 'a', 'a', 'b']

console.log(new Set(array))  // trả ra 1 Set (object) có mỗi pt chỉ 1 lần
console.log([...new Set(array)])  // chuyển thành array []

// ---------------------------------------------------- HTML DOM
////// HTML DOM có 3 thành phần chính
// Element : các loại tag từ head body div h1 a .......
// Attribute : thuộc tính của tag như class href scr ......
// Text : dòng chữ text, label ......

// 3 thành phần này gọi chung là Node
// Javascript có thể can thiệp, thay đổi cả 3 thành phần aka cả web 

// ---------------------------------------------------- Get element
////// ** Có thể lấy Element qua: 
// ID
var getNode = document.getElementById('heading')  // lấy Element có id 'heading'
// Class
var getNode = document.getElementsByClassName('heading') // Lấy Ele có class'heading'
// Tag
var getNode = document.getElementsByTagName('h1') // Lấy Ele có tag là h1
// CSS selector ** Dùng nhiều, chủ yếu **
var getNode = document.querySelector('.heading') // Lấy Ele như bên css '.heading'
                                    // Nếu trùng class thì chỉ lấy cái đầu
var getNode = document.querySelectorAll('.heading') // Lấy tất cả Ele có class '.heading'  

var getNode = document.querySelector('.box1')  // Có thể lấy Ele cha trước
console.log(getNode.querySelectorAll('li'))  // Xong call Ele cha để lấy Ele con

// HTML collection
// ** Chả ai dùng nên bỏ qua
console.log(getNode)

console.log(getNode[i])  // Lấy pt 'i' trong NodeList nếu có dùng queryall 

////// ** Có thể thêm/xóa Attribute qua:
var getNode = document.querySelector('h1')  // Lấy Ele h1

getNode.title = 'heading'   // Thêm Attri tittle = 'heading
getNode.className = 'heading'   // Thêm Class tittle = 'heading
// Có thể gắn Attri custom hoặc Attri k hợp lệ vs tag vào
getNode.setAttribute('href', 'heading')  // Attri, giá trị

getNode.setAttribute('xinchao', 'heading') 
// Lấy giá trị của Attri
console.loggetNode.getAttribute('class')   // Attri muốn lấy

console.log(getNode)

////// ** Có thể lấy nội dung của Text qua:
var getNode = document.querySelector('h1')  // Gọi Ele chứa text trước

getNode.innerText = 'Cưới anh đi' // Có thể thay đổi nd text của Ele

console.log(getNode.innerText)      // Xuất ra nd text của Ele

console.log(getNode.textContent)   // Xuất ra nd nguyên bản bên html (kể cả code và note)

////// ** Thêm Ele vào một Ele khác (vd như thêm h1 vào div)
var getNode = document.querySelector('.box-ele')  

getNode.innerHTML = '<h2>Xin chào inner</h2>'    // Thêm thẻ h2 vào div.box-ele
                                                // Ghi đè tất cả nd có trc
getNode.innerHTML = '<h2 class="heading2">Xin chào inner</h2>' // Có thể thêm cả Attri

getNode.outerHTML = '<h2>Xin chào outer</h2>'  // Ghi đè cả cái thẻ được gọi (div.box-ele)

console.log(getNode.innerHTML)

////// ** Các propeties hữu dụng của Node
// Attri: 
// contenteditable: Tag có attri này có thể chỉnh sửa như input
// draggable: có thể kéo thả (kinda)

// ** Thuộc tính style
var getNode = document.querySelector('.box-ele')

getNode.style.height = '100px'       // Giống CSS nhưng bên JS
getNode.style.width = '100px'       // cú pháp khác một tẹo
getNode.style.backgroundColor = 'red'  // bgColor thay vì bg-color bên CSS

Object.assign(getNode.style, {   // Hoặc dùng object assign để viết nhìu thuộc tính
    height: '100px',
    width: '100px',
    backgroundColor: 'blue'
})
// dùng để thêm css thiếu or sth chứ nên dùng file CSS như bth

// ------------------------------------------------------- Thuộc tính classlist (vjp)
var getNode = document.querySelector('.box-ele')

console.log(getNode.classList)   // Xuất list các class

console.log(getNode.classList.length)  // Số lượng class

console.log(getNode.classList[0])  // Lấy class index 0

console.log(getNode.classList.value)  // Xuất string class

getNode.classList.add('red')  // Thêm class red

getNode.classList.remove('red')  // Xóa class red

getNode.classList.toggle('red')  // K có thì thêm, có thì xóa

console.log(getNode.classList.contains('red'))  // Check t - f có class red ko

// ------------------------------------------------------- Dom event
// Dùng cho event đơn giản. k có ý định hủy bỏ event
// Gán Attri thẳng bên html
// <h1 onclick="console.log('Hello event click')>Đáng iu rạng ngời</h1>

// Hoặc tạo event bên JS
var getNode = document.querySelector('h1')

getNode.onclick = function(){
    console.log("Hello event click")  // Khi click h1 thì chạy hàm
}

// Khi ấn vào thẻ h1 nào thì in ra thẻ h1 đó
var getNode = document.querySelectorAll('h1')

for (var i = 0; i < getNode.length; ++i){
    getNode[i].onclick = function(){
        console.log(this)   
    }
}
// **function(e)  e.target = this

// Các event phổ biến:
getNode.onclick = function(){} // Click vào Ele chạy hàm

getNode.onchange = function(){} // Thay đổi Ele (input/checkbox) chạy hàm
// check box true false
console.log(this.checked)  // t - f

getNode.oninput = function(){} // Nhập/Sửa tới đâu chạy hàm tới đó

getNode.onkeyup = function(){} // Thả phím sau khi nhấn thì chạy hàm
getNode.onkeydown = function(){} // Nhấm phím thì chạy hàm (trễ 1 cái)

// keyboard event để làm thứ như Esc để thoát, trái phải chuyển focus, enter chấp nhận
getNode.onkeyup = function(e){
    console.log(e.which)     // Lấy mã số của key press

    switch (e.which){
        case 27:
            console.log('Exit!')  // 27 = Esc thì xuất Exit!
            break
    }
}

// Thuộc tính preventDefault
var getNode = document.querySelector('a')

getNode.onclick = function(e){
    // Nếu href html ko bắt đầu bằng link này 
    if (!e.target.href.startsWith('https://tetr.io'))   
        e.preventDefault()   // Ko cho phép chuyển sang trang đó
}

// Vd 2
var getNode = document.querySelector('ul')

getNode.onmousedown = function(e){   // Bỏ đi default bỏ focus thì mất list ul
    e.preventDefault()
}

getNode.onclick = function(e){      // Xuất ra tag li đã ấn
    console.log(this)
}

// Thuộc tính stopPropagation
// Hiện tượng nổi bọt là khi có hàm event vd:onlick của 1 tag thì khi bấm tag con 
// bên trong để chạy hàm thì sau khi chạy chính nó, nó sẽ chạy thêm tag cha nữa
document.querySelector('.btn-stoppro').onclick =   // Gọi btn là con của div
    function(e){
        e.stopPropagation()       // Bỏ nổi bọt để sau khi chạy hàm nó chỉ chạy chính nó,
        console.log('Click Me!')  // k chạy cha là tag div
    }

// Có thể dùng setTimeout sau is gán 1 func trống để ghi đè aka mất chức năng
// ------------------------------------------------------- Event listener
// dùng cho event thực hiện nhiều việc, có nhu cầu gỡ 1 event cụ thể trong trg
// hợp cụ thể
var getNode = document.querySelector('.btn')

function viec1(){
    console.log('Ây daaa !')
}
function viec2(){
    console.log(Date())
}

getNode.addEventListener('click', viec1)  // Thêm event 'ten', hàm

getNode.addEventListener('click', viec2)

getNode.removeEventListener('click', viec2) // Xóa event
// setTimeout sau is gán remove 1 event aka mất chức năng











