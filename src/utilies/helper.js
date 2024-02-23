import * as XLSX from 'xlsx';

export const printDiv = (divName) => {
    const printContents = document.getElementById(divName).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    setTimeout(() => {
        window.location.reload();
    }, 1000); // Reload after 1 second (adjust as needed)
}

export const ExportToExcel = (fileName, fn, dl) => {
    // Create a hidden element to hold the table content for export
    const hiddenElement = document.createElement('div');
    hiddenElement.style.display = 'none';
    document.body.appendChild(hiddenElement);

    // Clone the table to preserve the original content
    const tableToExport = document.querySelector('.tbl_exporttable_to_xls').cloneNode(true);
    
    // Remove unwanted elements from the cloned table
    tableToExport.querySelectorAll('td.hip').forEach(element => element.remove());
    tableToExport.querySelectorAll('th.hip').forEach(element => element.remove());
    tableToExport.querySelectorAll('tr.hip').forEach(element => element.remove());

    // Append the modified table to the hidden element
    hiddenElement.appendChild(tableToExport);

    if (!fileName) {
        fileName = 'File';
    }
    fileName += '-' + Date.now();

    // Convert the modified table to Excel format
    const wb = XLSX.utils.table_to_book(hiddenElement, {sheet: "sheet1"});

    // Remove the hidden element from the DOM
    document.body.removeChild(hiddenElement);

    // Perform the export operation
    return dl ?
            XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'base64'}) :
            XLSX.writeFile(wb, fn || ((fileName || 'MySheetName') + ('.xlsx')));
}