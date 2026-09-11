import { test, expect } from '@playwright/test';

test('Simple Get Request', async ({ request }) => {

    const response = await request.get(
        'https://conduit-api.bondaracademy.com/api/tags'
    );

    const responseObject = await response.json();

    console.log(responseObject);

    expect(responseObject.tags[0]).toEqual('Test');

    expect(responseObject.tags).toHaveLength(10);


    // Change Done 

});

test('Simple Post ReQUEST', async ({ request }) => {

    const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/' ,{
        headers : {
            Authorization : 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo2ODk0Nn0sImlhdCI6MTc4ODg5OTgyMCwiZXhwIjoxNzk0MDgzODIwfQ.5aT8wScU2dkAnuJYnrJJF9qrYsud6P0xcCKYfi6-cl4',
        },
        data : {
            "article": 
               {title: "Hi im shetty", description: "sads", body: "Huhahahah ", tagList: ["Pubg"]}
            
        }   
    });

    
});