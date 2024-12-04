import { counterProduct } from "./count.js";
import { cartShopping } from "./cart.js";
import { TypeButton } from "./whatsapp.js";


$(document).ready(function ($) {

    /** shop.html counter product detail */
    counterProduct();

    /** product detail  */
    cartShopping();

    /** whatsapp validate */
    let btn_whats = $("#btn-wh");

    btn_whats.on("click", function(){
        let dataAttribute = $(this).attr("data-type");
        TypeButton(dataAttribute);
    });





})