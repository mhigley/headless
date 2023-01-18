<script>
    export let data;
    const { stories } = data;

    console.log(stories);
</script>

<h1>Blog</h1>

{#if stories}
    <ul>
        {#each stories as story}
            <li>
                <picture>
                    <img src={story.ACFstories.image.srcSet} alt={story.ACFstories.image.altText}>
                </picture>
                <p>{story.title}</p>
            </li>
        {/each}
    </ul>
{:else}
    <p>No posts found.</p>
{/if}
