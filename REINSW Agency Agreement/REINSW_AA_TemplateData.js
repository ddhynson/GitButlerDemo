function REINSW_AA_TemplateData (data) {
  const INPUT = JSON.parse(data).TemplateData;
  const OUTPUT = {};

  OUTPUT.VendorOneName = INPUT.VendorOne;
  OUTPUT.VendorTwoName = INPUT.VendorTwo;
  
  OUTPUT.IsVendorCompany = INPUT.IsVendorOneCompany
    ? "Yes"
    : "No";

  OUTPUT.TestOutput = "test";

  return JSON.stringify(OUTPUT) || "";
}
