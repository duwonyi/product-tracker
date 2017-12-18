const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

router.get('/', async (req, res) => {
  const { rows } = await db.query(
    `SELECT
      a.id as l_id,
      b.id as p_id,
      b.description,
      a.datetime,
      a.longitude,
      a.latitude,
      a.elevation
      FROM locations_products a INNER JOIN products b
      ON a.product_id = b.id`,
  )
  res.send(rows)
})

router.post('/', async (req, res) => {
  const newLocation = req.body
  const query = `
    INSERT INTO
      locations_products(
        id, datetime, longitude, latitude, elevation, product_id
      )
      VALUES($1, $2, $3, $4, $5, $6)`
  const values = [
    newLocation.id,
    newLocation.datetime,
    newLocation.longitude,
    newLocation.latitude,
    newLocation.elevation,
    newLocation.product.id,
  ]
  const { rows } = await db.query(query, values)
  console.log(rows)
  res.send(rows)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const updateLocation = req.body
  const query = `
    UPDATE locations_products SET
      datetime = $1,
      longitude = $2,
      latitude = $3,
      elevation = $4,
      product_id = $5
      WHERE id = $6`
  const values = [
    updateLocation.datetime,
    updateLocation.longitude,
    updateLocation.latitude,
    updateLocation.elevation,
    updateLocation.product.id,
    id,
  ]
  const { rows } = await db.query(query, values)
  console.log(rows)
  res.send(rows)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const query = `
    DELETE FROM locations_products 
    WHERE id = $1`
  const { rows } = await db.query(query, [id])
  console.log(rows)
  res.send(rows)
})