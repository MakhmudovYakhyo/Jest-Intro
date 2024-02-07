const shallowObjClone = require('./shallowObjClone')

test('Create a clone of the object parameer', () => {
    const myObj = { person: "Hitchhicker", number: 42}
    expect(shallowObjClone(myObj)).toStrictEqual(myObj)
})