const { response, reverseJoinDate } = require("../helpers/helpers")
const { rulesTest, carrierTest, correctReturn, object } = require("./helpersParameters")

test("Function reverseJoinDate with falsey 'date' parameter must return false ", () => {

    expect(reverseJoinDate(undefined)).toBe(false)

})

test("Function reverseJoinDate with '2022-12-20' 'date' parameter must return '20-12-2022' ", () => {

    expect(reverseJoinDate('2022-12-20')).toBe("20-12-2022")

})

test("Function reverseJoinDate with '2022/12/20' 'date' parameter must return '20-12-2022' ", () => {

    expect(reverseJoinDate('2022/12/20')).toBe("20-12-2022")

})

test("Function reverseJoinDate with '20/12/2022' 'date' parameter must return '20-12-2022' ", () => {

    expect(reverseJoinDate('20/12/2022')).toBe("20-12-2022")

})

test("Function reverseJoinDate with '{}' 'date' parameter must return 'false' ", () => {

    expect(reverseJoinDate({})).toBe(false)

})


