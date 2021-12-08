//ERROR

//IMPORTING
//DATABASE
import db from './db';

//GET ERROR
const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

//ON ERROR
const onError = async (err, req, res, next) => {
  await db.disconnect();
  res.status(500).send({ message: err.toString() });
};

//EXPORTING ALL
export { getError, onError };
