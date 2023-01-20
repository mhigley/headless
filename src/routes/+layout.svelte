<script context="module">
    import '../layout.css';
</script>

<nav>
    <ul>
        <li><a href="/">Services</a></li>
        <li><a href="/">About</a>
            <ul>
                <li><a href="/about/blogs-and-podcasts">Blogs & Podcasts</a></li>
            </ul>
        </li>
        <li><a href="/">Spaces</a></li>
        <li><a href="/newsroom">Newsroom</a>
            <ul>
                <li><a href="/newsroom/stories" data-sveltekit-preload-data>Bitwise Stories</a></li>
                <li><a href="/newsroom/media-mentions">Media Mentions</a></li>
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