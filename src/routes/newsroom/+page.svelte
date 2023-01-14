<script>
    export let data;
    const { posts } = data;

    console.log(posts);
</script>

<h1>Blog</h1>
<!--
{#if posts}
    <ul>
        {#each posts as post}
            <li>
                <p>{post.title}</p>
            </li>
        {/each}
    </ul>
{:else}
    <p>No posts found.</p>
{/if}
-->