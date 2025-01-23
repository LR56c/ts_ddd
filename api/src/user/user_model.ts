import {  t } from 'elysia'
export const userRequest = t.Object({
  id: t.String(),
  email: t.String(),
  name: t.String(),
})

export type UserRequest = typeof userRequest.static
