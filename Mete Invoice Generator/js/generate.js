function passValue(){
    var Name = document.getElementById("Name").value;
    var Date = document.getElementById("date").value;
    var Price = document.getElementById("price").value;
    var Price2 = document.getElementById("price2").value;
    var Desc = document.getElementById("desc").value;
    var Desc2 = document.getElementById("desc2").value;
    var Discount = document.getElementById("disco").value;
    var QT = document.getElementById("qt").value;
    var QT2 = document.getElementById("qt2").value;

    var Paid = document.getElementById("paid").value;
    
    var Total = (Price * QT);
    var Total2 = (Price2 * QT2);

    
 
    localStorage.setItem("Name" , Name);
    localStorage.setItem("Date" , Date);
    localStorage.setItem("Price" , Price);
    localStorage.setItem("Price2" , Price2);
    localStorage.setItem("Desc" , Desc);
    localStorage.setItem("Desc2" , Desc2);
    localStorage.setItem("Discount" , Discount);
    // localStorage.setItem("Numb" , Numb);
    localStorage.setItem("QT" , QT);
    localStorage.setItem("QT2" , QT2);
    localStorage.setItem("Total" , Total);
    localStorage.setItem("Total2" , Total2);
    localStorage.setItem("Paid" , Paid);
   
    

    var Discon = Discount / 100;
    var Disi = Total += Total2;
    var result = parseFloat(Disi - (Disi * Discon));
    var Owing = result - Paid;
    localStorage.setItem("result" , result);
    localStorage.setItem("Owing" , Owing);
   
    return false;
}


//subTotal = value by id + value by id

