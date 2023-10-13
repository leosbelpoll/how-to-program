export const getIpAddress = async () => {
  const response = await fetch("https://api.ipify.org/?format=json");
  const jsonData = await response.json();

  return jsonData.ip;
};
