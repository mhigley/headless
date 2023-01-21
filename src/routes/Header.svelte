<script context="module">
    import '../layout.css';
</script>

<header>
    <div>
        <h1>Welcome to CodeComplete</h1>
    </div>
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
</header>

<style>
    header div {
        background-color: #333;
        padding: 2em;
    }
    h1 {
        font-size: 16px;
        color: white;
    }
</style>