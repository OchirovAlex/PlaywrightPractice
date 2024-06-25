import {expect, test} from '@playwright/test'

const url = 'https://reqres.in'

test.describe('API', ()=>{
    test('testing GET request', async ({request})=>{
        const res = await request.get(`${url}/api/users/2`);
        //console.log(res, 'response');
        expect(res.status()).toBe(200);
        const resBody = JSON.parse(await res.text());
        console.log(resBody);
        expect.soft(resBody.data.id, `Id should be: ${resBody.data.id}`).toBe(3)
        expect(resBody.data.email).toBe('janet.weaver@reqres.in')
    })
    test('testing POST request', async ({request})=>{
        const res = await request.post(`${url}/api/user`, {
            data:{
                id: 123
            }
        });
        console.log(res, 'response');
        const resBody = JSON.parse(await res.text());
        console.log(resBody);
        // expect.soft(resBody.data.id, `Id should be: ${resBody.data.id}`).toBe(3)
        // expect(resBody.data.email).toBe('janet.weaver@reqres.in')
    })
    test('testing POST request for registration', async ({request})=>{
        const res = await request.post(`${url}/api/register`, {
            data:{
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        });
        console.log(res, 'response');
        const resBody = JSON.parse(await res.text());
        console.log(resBody);
    })
    test('testing PUT request for registration', async ({request})=>{
        const res = await request.put(`${url}/api/users/2`, {
            data:{
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        });
        console.log(res, 'response');
        const resBody = JSON.parse(await res.text());
        console.log(resBody);
    })
    test('testing DELETE request', async ({request})=>{
        const res = await request.delete(`${url}/api/users/2`);
        console.log(res, 'response');
        expect(res.status()).toBe(204)
        // const resBody = JSON.parse(await res.text());
        // console.log(resBody);
    })
    test.only('testing PATCH request for registration', async ({request})=>{
        const res = await request.put(`${url}/api/users/2`, {
            data:{
                "email": "eve.holt@reqres.in",
                "password": "pistol",
                "123":"qwerty"
            }
        });
        console.log(res, 'response');
        const resBody = JSON.parse(await res.text());
        console.log(resBody);
    })
})