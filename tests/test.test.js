const request = require('supertest')
const app = require('../index');



describe("Test suite 1:", ()=>{
    test("test 1:", async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
    })
    test("test 2:", async () => {
        const res = await request(app).get('/1234')
        expect(res.statusCode).toEqual(404)
    })
    test("test 3:", async () => {
        const res = await request(app)
            .post('/submit-form')
            .send({
                fullName: 'Test',
                grade1: 95,
                grade2: 88,
                grade3: 95,
            })
        expect(res.statusCode).toEqual(302)
    })
    test("test 4:", async () => {
        const response = await request(app).get('/get-grades')

        expect(response.statusCode).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
    })
})
