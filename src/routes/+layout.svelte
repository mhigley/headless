<script context="module">
    import '../layout.css';
</script>

<nav>
    <ul>
        <li><a href="/">Services</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Spaces</a></li>
        <li>Newsroom
            <ul>
                <li><a href="/newsroom/media_mentions">Media Mentions</a></li>
            </ul>
        </li>
    </ul>
</nav>

<main>
    <slot />
</main>

<style>
    main {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
    }
</style>