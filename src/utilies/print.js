export const printDiv = (divName) => {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    setTimeout(() => {
        window.location.reload();
    }, 1000); // Reload after 1 second (adjust as needed)
}
