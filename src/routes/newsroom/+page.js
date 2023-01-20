import { PUBLIC_LIVE_WP_API_URL } from '$env/static/public';

export const load = async ({ fetch }) => {
    const fetchStories = async () => {
        const query = `
            query NewQuery {
                stories {
                    nodes {
                        ...StoryFragment
                        title
                        slug
                    }
                }
            }

            fragment StoryFragment on Story {
                ACFstories {
                    name
                    content
                    fieldGroupName
                    image {
                        altText
                        srcSet
                        sourceUrl
                    }
                }
            }
        `;
        
        const storiesRes = await fetch(PUBLIC_LIVE_WP_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ query }),
        });

        if(storiesRes.ok){
            const storiesData = await storiesRes.json();
            const stories = storiesData.data.stories.nodes;
            return stories;
        }
    }
    return {
        // stories: fetchStories(),
    }
}