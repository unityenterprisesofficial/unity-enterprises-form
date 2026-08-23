const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const p = e.parameter;

    sheet.appendRow([
      new Date(),
      p.fullName || "",
      p.fatherName || "",
      p.mobile || "",
      p.email || "",
      p.instagram || "",
      p.telegram || "",
      p.dob || "",
      p.gender || "",
      p.maritalStatus || "",
      p.address || "",
      p.education || "",
      p.technical || "",
      p.experience || "",
      p.jobChoice || "",
      p.timeChoice || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
