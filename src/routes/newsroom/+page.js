import { PUBLIC_WORDPRESS_API_URL } from '$env/static/public';

export const load = async ({ fetch }) => {
    const fetchPosts = async () => {
        const query = `
            query getPosts {
                posts (first:100) {
                    nodes {
                        title
                        excerpt
                    }
                }
            }
        `;

        const postsRes = await fetch(PUBLIC_WORDPRESS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        if(postsRes.ok){
            const postsData = await postsRes.json();
            const posts = postsData.data.posts.nodes;
            return posts;
        }
    }

    const fetchUsers = async () => {
        const query = `
            query getUsers {
                users (first: 100) {
                    nodes {
                        firstName
                        lastName
                        userId
                        slug
                    }
                }
            }
        `;

        const usersRes = await fetch(PUBLIC_WORDPRESS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        if(usersRes.ok){
            const usersData = await usersRes.json();
            const users = usersData.data.users.nodes;
            return users;
        }
    }

    return {
        posts: fetchPosts(),
        // users: fetchUsers()
    }
}

/**
    export async function load({ fetch, params }) {
        const res = await fetch(`/api/items/${params.id}`);
        const item = await res.json();
         
        return { item };
    }
*/
/*
export async function load({ fetch, params }) {
    const query = `
        query NewQuery {
            posts {
                nodes {
                databaseId
                uri
                title
                excerpt
                date
                featuredImage {
                    node {
                    sourceUrl
                    altText
                    mediaDetails {
                        width
                        height
                    }
                    }
                }
                }
            }
        }
    `;
    const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query }),
    });


    if (response.ok) {
        const responseObj = await response.json();
        const posts = responseObj.data.posts.nodes;

        return {
            props: {
                posts
            }
        };
    }

    return {
        status: response.status,
        error: new Error(`Could not load ${url}`)
    };
}
*/