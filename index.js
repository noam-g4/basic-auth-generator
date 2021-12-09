#!/usr/bin/env node
const { stdout } = require('process')

const chars =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')

const rand = arr => arr[Math.floor(Math.random() * arr.length)]

const makeString = (donor, lng, res = '', i = 0) =>
  i > lng ? res : makeString(donor, lng, res + rand(donor), i + 1)

const base64 = (uid, secret) =>
  Buffer.from(`${uid}:${secret}`).toString('base64')

const run = () => {
  const userID = makeString(chars, 70)
  const secret = makeString(chars, 75)
  return [
    `userID = ${userID}`,
    `secret = ${secret}`,
    new Array(100).fill('=').join(''),
    `base64 = ${base64(userID, secret)}`,
  ]
}

run().forEach(line => stdout.write(line + '\n'))
