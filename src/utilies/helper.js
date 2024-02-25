import * as XLSX from 'xlsx';

export const printDiv = (divName) => {
    // Clone the content from the specified div
    const contentToPrint = document.querySelector(`#${divName}`).cloneNode(true);

    // Apply additional styles for printing
    applyPrintStyles(contentToPrint);

    // Create a hidden iframe to contain the content
    const iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'position:absolute;width:0;height:0;border:0;');
    document.body.appendChild(iframe);
    const iframeDoc = iframe.contentWindow.document;

    // Append the content to the iframe document
    iframeDoc.body.appendChild(contentToPrint);

    // Wait for iframe to load before printing
    // iframe.onload = function() {
        iframe.contentWindow.print();

        // Remove the iframe after printing
        setTimeout(function() {
            document.body.removeChild(iframe);
        }, 100);
    // };
};

// Apply additional print styles
function applyPrintStyles(contentToPrint) {
    // Example styles for tables
    const printHeader = contentToPrint.querySelectorAll('table.print_header');

    for (let ph = 0; ph < printHeader.length; ph++) {
        const phTable = printHeader[ph];
        phTable.style.width = '100%';
        phTable.style.borderCollapse = 'collapse';
        phTable.style.marginBottom = '10px';
        // phTable.style.border = '1px solid #e5e7eb';
    }
    const tables = contentToPrint.querySelectorAll('table.table');
    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        
        // hide element to table class (hip)
        const hElms = table.querySelectorAll('.hip');
        for (let h = 0; h < hElms.length; h++) {
            hElms[h].style.display = 'none';
        }
        // show hidden elements of class (sip)
        const sElms = table.querySelectorAll('.sip');
        for (let s = 0; s < sElms.length; s++) {
            sElms[s].style.display = 'block';
        }
        // Apply styles to table headers (th)
        const theads = table.getElementsByTagName('thead');
        for (let i = 0; i < theads.length; i++) {
            const ths = theads[i].getElementsByTagName('th');
            for (let j = 0; j < ths.length; j++) {
                ths[j].style.border = '1px solid #e5e7eb';
                ths[j].style.backgroundColor = '#fde047'; // Example background color
                ths[j].style.padding = '5px'; // Example padding
            }
        }
        
        // Apply styles to table data cells (td)
        const tds = table.getElementsByTagName('td');
        for (let j = 0; j < tds.length; j++) {
            tds[j].style.border = '1px solid #e5e7eb';
        }
        
        // Apply styles to table rows (tr)
        // const trs = table.getElementsByTagName('tr');
        // for (let j = 0; j < trs.length; j++) {
        //     trs[j].style.backgroundColor = '#f9f9f9'; // Example background color
        // }

        // Apply general table styles
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.border = '1px solid #e5e7eb';
    }

    // Example styles for headings
    // const headings = contentToPrint.querySelectorAll('h1, h2, h3, h4, h5, h6');
    // for (let i = 0; i < headings.length; i++) {
    //     headings[i].style.backgroundColor = '#f2f2f2'; // Example background color
    //     headings[i].style.padding = '5px'; // Example padding
    // }
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