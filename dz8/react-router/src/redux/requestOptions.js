export const requestOptions = (user) => {
  const jsonArray = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user }),
  };
  return jsonArray
};

