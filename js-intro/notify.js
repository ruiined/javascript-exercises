const notify = (string, notifyFunction) => {
  return notifyFunction(string);
}

const emailNotify = (string) => {
  return `E-mail sent to: ${string}`;
}

const textNotify = (string) => {
  return `Text sent to: ${string}`;
}

console.log(notify('00000000', textNotify));
console.log(notify('makers@makers.com', emailNotify));