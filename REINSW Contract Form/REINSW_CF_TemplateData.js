function REINSW_CF_TemplateData (data) {
  const INPUT = JSON.parse(data).TemplateData;
  const OUTPUT = {};

  OUTPUT.BuyerOneName = INPUT.BuyerOne;
  OUTPUT.BuyerTwoName = INPUT.BuyerTwo;
  
  OUTPUT.IsBuyerCompany = INPUT.IsBuyerOneCompany
    ? "Yes"
    : "No";

  return JSON.stringify(OUTPUT) || "";
}
