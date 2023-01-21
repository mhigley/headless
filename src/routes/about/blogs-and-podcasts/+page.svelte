<script>
	export let data;
    const { coworkBlog, techConsultingBlog, workforceBlog } = data;

    function blogsCustomObj (obj) {
        let blogs = [];
        Object.entries(obj).forEach( entry => {
            const [key, value] = entry;
            if(value.length){
                blogs.push({
                    "slug": key.replace( /([A-Z])/g, '-$1' ).toLowerCase(),
                    "nicename": key.replace( /([A-Z])/g, ' $1' ).replace( /^./, str => str.toUpperCase() ),
                    "data": value
                });
            }
        });
        return blogs;
    }
</script>




<h1>Blogs & Podcasts</h1>
{#if blogsCustomObj(data)}
    <ul class="nav">
    {#each blogsCustomObj(data) as blogTitle}
        <li><p>{blogTitle.nicename}</p></li>
    {/each}
    </ul>

    <div>
        {#each blogsCustomObj(data) as postLinks}
        <ul>
            {#each postLinks.data as link}
                <li><p><a href={`/about/blogs-and-podcasts/${link.slug}`}>{link.title}</a></p></li>
            {/each}
        </ul>
        {/each}
    </div>
{/if}

<style>
    h1 {
        text-align: center;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    ul.nav {
        display: flex;
        justify-content: space-evenly;
    }
    div {
        display: flex;
    }
    div ul {
        flex: 1;
    }
</style>


