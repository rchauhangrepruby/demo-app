const of = async (statement) => {
  let result = [];
  try {
    const response = await statement();
    result.push(response);
  } catch (error) {
    result = [undefined, error];
  }
  return result;
};

module.exports = of;


