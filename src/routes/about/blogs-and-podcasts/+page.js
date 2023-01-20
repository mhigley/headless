import { PUBLIC_WORDPRESS_API_URL, PUBLIC_LIVE_WP_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
    const fetchCoworkBlog = async () => {
        const query = `
            query coworkBlogQuery {
                posts(first: 5, where: {categoryName: "cowork-blog", categoryIn: "5"}) {
                    nodes {
                        title
                        slug
                        featuredImage {
                            node {
                                altText
                                srcSet
                            }
                        }
                    }
                }
            }
        `;

        const coworkBlogRes = await fetch(PUBLIC_WORDPRESS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        });

        if(coworkBlogRes.ok){
            const coworkBlogData = await coworkBlogRes.json();
            const coworkBlog = coworkBlogData.data.posts.nodes;
            return coworkBlog;

            // const stories = storiesData.data.stories.nodes;
            // return stories;
        }
    }

    const fetchWorkforceBlog = async () => {
        const query = `
            query workforceBlogQuery {
                posts(first: 5, where: {categoryName: "workforce-training-blog", categoryIn: "5"}) {
                    nodes {
                        title
                        slug
                        featuredImage {
                            node {
                                altText
                                srcSet
                            }
                        }
                    }
                }
            }
        `;

        const workforceBlogRes = await fetch(PUBLIC_WORDPRESS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        });

        if(workforceBlogRes.ok){
            const workforceBlogData = await workforceBlogRes.json();
            const workforceBlog = workforceBlogData.data.posts.nodes;
            return workforceBlog;
        }
    }

    const fetchTechConsultingBlog = async () => {
        const query = `
            query techConsultingBlogQuery {
                posts(first: 5, where: {categoryName: "technology-consulting-blog", categoryIn: "5"}) {
                    nodes {
                        title
                        slug
                        featuredImage {
                            node {
                                altText
                                srcSet
                            }
                        }
                    }
                }
            }
        `;

        const techConsultingBlogRes = await fetch(PUBLIC_WORDPRESS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        });

        if(techConsultingBlogRes.ok){
            const techConsultingBlogData = await techConsultingBlogRes.json();
            const techConsultingBlog = techConsultingBlogData.data.posts.nodes;
            return techConsultingBlog;
        }
    }
    return {
        coworkBlog: fetchCoworkBlog(),
        workforceBlog: fetchWorkforceBlog(),
        techConsultingBlog: fetchTechConsultingBlog()
    }
}
