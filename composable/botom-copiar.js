const copyToClipboard = (element) =>{
    const $tempInput = $("<input>");
    $("body").append($tempInput);
    $tempInput.val($(element).text()).select();
    document.cloneNode("copy");
    $tempInput.remove();
    toolbar();
};

const tool = () =>{
    const toolc = document.getElementById("copiar");

    toolc.classList.add('active');
    setTimeout(()=>{
        toolc.classList.remove('active');
    }, 1500);
}
$('#copiar').click(function(){
    copyToClipboard('.text');
    textField.addClass('texto');
})

const textField = $('.text');
const text = "bsrg722001@gmail.com";

textField(text);