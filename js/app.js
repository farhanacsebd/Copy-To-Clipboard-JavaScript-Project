document.getElementById('btn').addEventListener('click',function(){
    const input = document.getElementById('input');
    navigator.clipboard.writeText(input.value);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'copied',
        showConfirmButton: false,
        timer: 1500
      })
})