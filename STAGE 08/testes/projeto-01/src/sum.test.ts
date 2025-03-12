import { sum } from "./sum";

describe("Sum", () => {
   beforeAll(() => {
      console.log("função que ocorre antes dos testes")
   })

   it("should do sum of 5+9 must be 14", () => {
      const result = sum(5,9)
   
      expect(result).toBe(14)
   })

   test("sum of 10+8 must be 18", () => {
      const result = sum(10,8)
   
      expect(result).toBe(18)
   })

   afterAll(() => {
      console.log("Função que ocorre depois dos testes")
   })
})

