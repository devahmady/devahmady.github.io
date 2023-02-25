$(document).on('click','.send_form', function(){
var input_blanter = document.getElementById('wa_name');
var input_blanter = document.getElementById('wa_textarea');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '6285746434463',
    walink2 = 'Halo Dany',
    walink3 = 'Reseler : BH',
    baris = '=====================',
    text_yes = 'Terkirim.',
    text_no = 'Isi semua Formulir lalu klik Kirim.';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" != input_blanter.value){

 /* Call Input Form */
var input_select1 = $("#wa_select :selected").text(),
    input_name1 = $("#wa_name").val(),
    input_textarea1 = $("#wa_textarea").val();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A' + walink3 + '%0A%0A' + baris + '%0A' +
    'Nama : ' + input_name1 + '%0A' +
    'Beli Vpn : ' + input_select1 + '%0A' +
    'Pesan : ' + input_textarea1 + '%0A';

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
}
});