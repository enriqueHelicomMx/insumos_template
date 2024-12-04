export function counterProduct(){

    let countProductValue = $(".count-product .value");
    let countProductInc = $(".count-product .plus");
    let countProductDec = $(".count-product .minus");
    
    $(countProductInc).on("click", function(){
        if((countProductValue.text() * 1 ) < 5){
            countProductValue.text((countProductValue.text() * 1) + 1);
        }
    });

    $(countProductDec).on("click", function(){
        if((countProductValue.text() * 1 ) > 0){
            countProductValue.text((countProductValue.text() * 1) - 1);
        }else{
            countProductValue.text("0");
        }
    });

}