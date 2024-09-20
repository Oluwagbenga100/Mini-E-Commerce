cart = [];
showItems()




function addItems(){
    var cartItem = items.value;
    if(cartItem !=""){
        cart.push("cartItem");
        items.value ="";
        document.getElementById("showErr").style.display = "none";
        showItems()
    }
    else{
        errorMessage()
    }
}

function errorMessage(){
    document.getElementById("showErr").style.display = "block";
}

function showItems(){
    if (cart == "" ){
        showMyCart.innerHTML = "No Items yet";
        document.getElementById("showMyCart") .style.display ="block";
        document,getElementById("myTable").style.display = "none"
        doccument.getElementById("allButtons").style.display = "none"

    
    }
    else{

        showMyCart.innerHTML = ""
        document.getElementById("showMyCart") .style.display = "none"
        document.getElementById("myTable").style.display = ""
        document.getElementById("allButtons").style.display = "block"
        myTable.innerHTML = `
        
    <tr>
        <td class="col-1">S/N</td>
        <td class="col-6">Products</td>
    </tr>
        `

        for (i=0; i<cart.length; i++) {
            myTable.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${cart[i]}</td>
            </tr>
            `
        }


    }
}

