
    alert("hihi"); ///alert - hiện thông báo

    console.log("abcd"); ///console - hiện giá trị biến - nằm trong inspect F12 của trang web 

    let x = 5;  ///let - gán biến int, string, ...
    let str = "defgh";
    console.log(str); ///console - hiện giá trị biến 
    console.log(x);

    let y = 5+5;
    console.log(y);
    let z = "5"+"5";
    console.log(z);

    let g = 5/5;
    console.log(g);
    g = 10; ///thay giá trị
    console.log(g);


    let h = prompt("nhap lieu"); ///let x = promt("") - để người dùng nhập giá trị và hiện lên console
    console.log(h);

    let i = prompt("nhap lieu");
    console.log(i + 5); //vì i là string nên sẽ ra string

    let j = prompt("nhap lieu");
    j = Number(j); //chuyển kiểu dữ liệu string -> number
    console.log(j )
    console.log(j + 5);

    let k = 100;
    console.log(typeof k); ///typeof - hiện kiểu dữ liệu
    k = String(k); //k = k + "" - chuyển dữ liệu number -> string 
    console.log(typeof k);


    // let a = 5;
    // a = 10;
    // let a - là let nên có thể thay đổi

    // const b = 5;
    // b = 10; 
    // const b - là const nên ko thể thay đổi

    //var phạm vi rộng hơn let
    //<script>
        //{
            //let x = 5;
            //var y = 5;
        //}
        //console.log(x); -> ko hiện vì x bên trong {}
        //console.log(y); -> hiện vì phạm vi mọi nơi
    //</>

    let input = prompt("Nhap input = ");
    input = Number(input);
    let tuoi = 2021 - input;
    alert ("Hung nam nay" + tuoi);
    alert(`Hung nam nay ${2021 - input} tuoi`); ///String literal


    //!Ví dụ về Convert String To Number:
    let movie = {
        title: 'The dark knight rises',
        year: 2012,
        rate: 8.4,
    };

    console.log(movie);

    nhapKey = prompt('What you want to update? ');

    if (  nhapKey !== null && nhapKey !== undefined){
     
        console.log(`${nhapKey} does not exist in our data`);

        let nhapNewData = prompt('Enter the new data: ');

        //Cách 1:
        let nhapNewDataNumber = Number(nhapNewData);
        let nhapNewDataString = String(nhapNewData);

        if ( nhapNewData = nhapNewDaNumbetaNumber ){
            movie[nhapKey] = Number(nhapNewData);
        }
        else if ( nhapNewData = nhapNewDataString ){
            movie[nhapKey] = String(nhapNewData);
        }

        //Cách 2:
        // if (isNaN(nhapNewData)){
        //     movie[nhapKey] = String(nhapNewData);
        // }
        // else{
        //     movie[nhapKey] = Number(nhapNewData);
        // }

        
        console.log(movie);

    }
    
