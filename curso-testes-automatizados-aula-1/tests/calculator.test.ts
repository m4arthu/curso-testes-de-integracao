import calculator from "calculator"

describe("testes caucalator suite", ()=>{
    it("shold return 4",()=>{
        expect(calculator.sum(2,2)).toEqual(4)
    })
})