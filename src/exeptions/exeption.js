const exeption = (err, req, res, next) => {
  console.log(err)
  res.status(err.status || 500)
  res.json({
    status: err.status,
    message: err.message,
  })
}


export default exeption