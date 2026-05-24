(function () {
  const input = document.getElementById("resume-sheet");
  const preview = document.getElementById("excel-preview");

  if (!input || !preview) return;

  function renderMessage(message) {
    preview.textContent = message;
  }

  function parseWorkbook(file) {
    if (!window.XLSX) {
      renderMessage("Excel parser not loaded. Add SheetJS if you want live Excel parsing.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = window.XLSX.read(data, { type: "array" });
      const firstSheet = workbook.SheetNames[0];
      const rows = window.XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet], { defval: "" });
      renderMessage(JSON.stringify(rows.slice(0, 5), null, 2));
    };
    reader.readAsArrayBuffer(file);
  }

  input.addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      renderMessage("");
      return;
    }
    parseWorkbook(file);
  });
})();
