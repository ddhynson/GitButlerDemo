function TemplateData (data) {
  const INPUT = JSON.parse(data).TemplateData;
  const OUTPUT = {};

  OUTPUT.FieldOne = INPUT.ComponentOne;
  OUTPUT.FieldTwo = INPUT.ComponentTwo;
  OUTPUT.FieldThree = INPUT.ComponentThree;

  return JSON.stringify(OUTPUT) || "";
}
