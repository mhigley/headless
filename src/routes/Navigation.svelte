<script>
    import { page } from '$app/stores';
    $: routeId = $page.route.id;

    const primaryLinks = [
        {
            primaryTitle: 'Services',
            primaryHref: '/services',
            secondaryLinks: []
        },
        {
            primaryTitle: 'About',
            primaryHref: '/about',
            secondaryLinks: [
                {
                    secondaryTitle: 'First',
                    secondaryHref: '/first'
                },
                {
                    secondaryTitle: 'Second',
                    secondaryHref: '/second'
                }
            ]
        },
        {
            primaryTitle: 'Spaces',
            primaryHref: '/spaces',
            secondaryLinks: [
                {
                    secondaryTitle: 'Third',
                    secondaryHref: '/third'
                }
            ]
        },
        {
            primaryTitle: 'Newsroom',
            primaryHref: '/newsroom',
            secondaryLinks: []
        }
    ];


</script>

<nav>
    {#if primaryLinks.length}
    <ul>
        {#each primaryLinks as {primaryTitle, primaryHref, secondaryLinks}}
        <li><a href={primaryHref} class:active={routeId == primaryHref} title={primaryTitle}>{primaryTitle}</a>
            {#if secondaryLinks.length}
            <ul>
                {#each secondaryLinks as {secondaryTitle, secondaryHref}}
                <li><a href={primaryHref}{secondaryHref} class:active={routeId == secondaryHref} title={secondaryTitle}>{secondaryTitle}</a></li>
                {/each}
            </ul>
            {/if}
        </li>
        {/each}
    </ul>
    {/if}
</nav>

<style>
    .active {
        color: red;
    }
</style>