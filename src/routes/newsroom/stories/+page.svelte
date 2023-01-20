<script>
    export let data;
    // const { stories } = data;
    $: ({ stories } = data);
</script>

<h1>Blog</h1>

{#if stories}
    <ul>
        {#each stories as story}
            <li>
                <h1>{story.title}</h1>
                <a href={`/newsroom/stories/${story.slug}`}>{story.title}</a>
                <picture>
                    <img src={story.ACFstories.image.sourceUrl} srcset={story.ACFstories.image.srcSet} alt={story.ACFstories.image.altText}>
                </picture>
                <h2>{story.ACFstories.name}</h2>
                <p>{@html story.ACFstories.content}</p>
            </li>
        {/each}
    </ul>
{:else}
    <p>No posts found.</p>
{/if}
