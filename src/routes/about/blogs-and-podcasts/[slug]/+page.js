import { PUBLIC_WORDPRESS_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {

    console.log(params);

    const fetchBlog = async () => {
        const query = `
            query SingleBlog {
                post( id: "${params.slug}", idType:SLUG) {
                    id
                    title
                }
            }
        `;
        
        const blogRes = await fetch(PUBLIC_WORDPRESS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ query }),
        });
        

        if(blogRes.ok){
            const blogData = await blogRes.json();
            const blog = blogData.data.post;
            return blog;
        }
    };

    return {
        blog: fetchBlog()
    }
};