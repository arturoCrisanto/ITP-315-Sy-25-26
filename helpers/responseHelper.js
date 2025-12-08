// inen helper for pag handle it success la na error
export const successResponse = (
  res,
  statusCode = 200,
  message,
  data = null
) => {
  //nag create ak hin response object
  const response = {
    success: true,
    message,
  };
  // kon may data, i-include ini ha response object
  if (data !== null) {
    response.data = data;
  }
  // pag return it response ha client
  return res.status(statusCode).json(response);
};

// inen helper for pag handle it error responses
export const errorResponse = (res, statusCode = 500, message, error = null) => {
  // nag create ak hin response object
  const response = {
    success: false,
    message,
  };

  // kon may error, i-include ini ha response object
  if (error !== null && process.env.NODE_ENV === "development") {
    response.error = error;
  }

  // pag return it response ha client
  return res.status(statusCode).json(response);
};
