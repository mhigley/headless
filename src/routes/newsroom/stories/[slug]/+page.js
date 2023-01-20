import { PUBLIC_LOCAL_WP_API_URL } from '$env/static/public';

export async function load({ fetch, params }) {
    const fetchStory = async () => {
        const query = `
            query SingleStory {
                storyBy( slug: "${params.slug}" ) {
                    id
                    title
                }
            }
        `;
        
        const storyRes = await fetch(PUBLIC_LOCAL_WP_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ query }),
        });
        

        if(storyRes.ok){
            const storyData = await storyRes.json();
            const story = storyData.data.storyBy;
            return story;
        }
    };

    return {
        story: fetchStory(),
    }
}