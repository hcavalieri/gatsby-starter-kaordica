export const printVariableToConsole = (value: any, name?: string) => {
  console.log(
    `%c ===${name || 'Chosen variable'}===`,
    'font-weight: bold;font-size:1.2em'
  );
  console.log(value);
  console.log(
    `%c ===End of ${name || 'Chosen variable'}===`,
    'font-weight: bold;font-size:1.2em'
  );
};
