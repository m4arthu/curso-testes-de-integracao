import { app } from "app"
import supertest from "supertest"

const server  =  supertest(app)

describe("tests to  router /health",()=>{
    it("shold  return the status 200 when get /health is called",async()=>{
        const {status}  = await server.get("/health")
        expect(status).toBe(200)
    })
})