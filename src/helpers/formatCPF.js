/*** CPF formatation ***/
export const formatCPF = cpfValue => {
  let numeric = cpfValue.replace(/[^0-9]+/g, '');
  let cpfLength = numeric.length;

  let partOne = numeric.slice(0, 3) + '.';
  let partTwo = numeric.slice(3, 6) + '.';
  let partThree = numeric.slice(6, 9) + '-';

  let cpfInput = document.getElementById('cpf-id'); // here is the CPF ID of the input

  if (cpfLength < 4) {
    cpfInput.value = numeric;
  } else if (cpfLength >= 4 && cpfLength < 7) {
    let formatCPF = partOne + numeric.slice(3);
    cpfInput.value = formatCPF;
  } else if (cpfLength >= 7 && cpfLength < 10) {
    let formatCPF = partOne + partTwo + numeric.slice(6);
    cpfInput.value = formatCPF;
  } else if (cpfLength >= 10 && cpfLength < 12) {
    let formatCPF = partOne + partTwo + partThree + numeric.slice(9);
    cpfInput.value = formatCPF;
  } else if (cpfLength >= 12) {
    let formatCPF = partOne + partTwo + partThree + numeric.slice(9, 11);
    cpfInput.value = formatCPF;
  }

  return cpfInput.value;
};
