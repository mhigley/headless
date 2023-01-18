import { PUBLIC_LOCAL_WP_API_URL } from '$env/static/public';


export const load = async ({ fetch }) => {
    const fetchStories = async () => {
        const query = `
        {
            stories(first: 10) {
              nodes {
                ...StoryFields
              }
            }
          }
          
          fragment StoryFields on Stories {
            id
            storiesCPT {
                name
                content
                image {
                altText
                srcSet
                }
            }
            title
            slug
          }
        `;
        
        const storiesRes = await fetch(PUBLIC_LOCAL_WP_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ query }),
        });

        if(storiesRes.ok){
            const storiesData = await storiesRes.json();
            console.log(storiesData);
        }
    }
    return {
        stories: fetchStories(),
    }
}