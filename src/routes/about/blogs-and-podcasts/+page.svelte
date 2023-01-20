<script>
    export let data;
    const { coworkBlog, techConsultingBlog, workforceBlog } = data;
    let blogs = [];

    Object.keys(data).forEach(key => {
        if(data[key].length){
            blogs.push(key);
        }
    });
</script>

<h1>Blogs & Podcasts</h1>
{#if blogs}
<ul>
    {#each blogs as blog}
    <li><p>{blog}</p></li>
    {/each}
</ul>
{/if}


