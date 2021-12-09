#!/usr/bin/env node
const { stdout } = require('process')

const chars =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')

const rand = arr => arr[Math.floor(Math.random() * arr.length)]

const makeString = (donor, lng, res = '', i = 0) =>
  i > lng ? res : makeString(donor, lng, res + rand(donor), i + 1)

const base64 = (uid, password) =>
  Buffer.from(`${uid}:${password}`).toString('base64')

const run = () => {
  const userID = makeString(chars, 50)
  const password = makeString(chars, 50)
  return [
    `userID = ${userID}`,
    `password = ${password}`,
    new Array(149).fill('=').join(''),
    `base64 = ${base64(userID, password)}`,
  ]
}

run().forEach(line => stdout.write(line + '\n'))
