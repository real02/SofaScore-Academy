export async function checkStatus(response) {
  if (response.status === 204) {
    return {};
  }

  if (response.status === 403) {
    // redirect to /login
  }

  // is error or something, status code

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
}
