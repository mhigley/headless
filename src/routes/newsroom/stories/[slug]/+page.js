import { PUBLIC_LIVE_WP_API_URL } from '$env/static/public';

export async function load({ fetch, params }) {
    const fetchStory = async () => {
        const query = `
            query SingleStory {
                story( id: "${params.slug}", idType:SLUG) {
                    id
                    title
                }
            }
        `;
        
        const storyRes = await fetch(PUBLIC_LIVE_WP_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ query }),
        });
        

        if(storyRes.ok){
            const storyData = await storyRes.json();
            const story = storyData.data.story;
            return story;
        }
    };

    return {
        story: fetchStory(),
    }
}