/*Add the JavaScript here for the function billingFunction(). It is
 responsible for setting and clearing the fields in Billing Information*/

function billingFunction() {
    var name, zip;
    if (document.getElementById("same").checked) {
        name = document.getElementById("shippingName").value;
        zip = document.getElementById("shippingZip").value;

        document.getElementById("billingName").value = name;
        document.getElementById("billingZip").value = zip;
    }
    else {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}