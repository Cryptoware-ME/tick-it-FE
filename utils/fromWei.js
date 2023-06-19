export function fromWei(wei) {
  console.log("wei: ", wei);
  const weiValue = BigInt(wei);
  console.log("weiValue: ", weiValue);
  const etherValue = weiValue / BigInt("1000000000000000000");
  console.log("etherValue: ", etherValue.toString());
  return etherValue.toString();
}
