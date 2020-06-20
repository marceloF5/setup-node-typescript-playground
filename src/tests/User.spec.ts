import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  expect(user.name).toEqual('Marcelo')
})
