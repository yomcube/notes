function save() {
    const downloadFile = () => {
        const link = document.createElement("a");
        const content = document.getElementById("mainBox").value;
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "notes.txt";
        link.click();
        URL.revokeObjectURL(link.href);
     };
}