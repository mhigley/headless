<script>
    export let data;
    const { posts } = data;

    // console.log(posts);
</script>

<h1>Media Mentions</h1>
{#each posts as post}
    <h2><a href={`/newsroom/media_mentions/${post.slug}`}>{post.title}</a></h2>
{/each}