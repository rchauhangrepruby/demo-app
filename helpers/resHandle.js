const resHandle = (response, result, message, error) => {
  const responseObj = {};
  if (result) {
    responseObj['data'] = result;
    responseObj['error'] = false;
    responseObj['message'] = message;
  } else {
    responseObj['error'] = true;
    responseObj['message'] = error.message || error || 'Something Went Wrong';
    responseObj['data'] = [];
  }

  response.status(responseObj['error'] ? 500 : 200).send(responseObj);

}

module.exports = resHandle;