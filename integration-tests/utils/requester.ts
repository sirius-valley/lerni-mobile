// GraphQL request example
/*export const createTestUser = async (data: any) => {
  console.log(
    `*** CREATE TEST USER ***", "Creating test user with data: ${JSON.stringify(data)}`,
  );
  const response = await fetch('process.env.APPIUM_TEST_INTERNAL_API_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'process.env.APPIUM_TEST_ADMIN_API_KEY',
    },
    body: JSON.stringify({
      query: `mutation createTestUser($data: TestUserConfigInput!)
          {createTestUser(data: $data){
            id
          }
        }`,
      variables: {
        data: data,
      },
    }),
  });
  const res = await response;
  const printData = await res.json();
  console.log('*** CREATE TEST USER ***', 'response', printData);
  return res;
};*/
