import { PUBLIC_WORDPRESS_API_URL } from '$env/static/public';

export const load = async ({ fetch }) => {
    const fetchPosts = async () => {
        const query = `
            query getPosts {
                posts(first: 100, where: {categoryName: "cowork"}) {
                    nodes {
                        title
                        slug
                    }
                }
            }
        `;
        const postsRes = await fetch(PUBLIC_WORDPRESS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });
        if(postsRes.ok){
            const postsData = await postsRes.json();
            const posts = postsData.data.posts.nodes;
            return posts;
        }
    }

    return {
        posts: fetchPosts(),
    }
}