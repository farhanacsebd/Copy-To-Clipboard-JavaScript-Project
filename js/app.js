document.getElementById('btn').addEventListener('click',function(){
    const input = document.getElementById('input');
    navigator.clipboard.writeText(input.value);
})