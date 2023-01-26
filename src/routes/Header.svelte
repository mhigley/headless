<script context="module">
    import '../layout.css';

    /*
    const dropdowns = Array.from(document.querySelectorAll('.dropdown > a'));
    dropdowns.forEach(el => {
        el.addEventListener('click', function(e){
            e.preventDefault();
            console.log(e, this);
        });
    });
    */
</script>

<header>
    <div>
        <h1><a href="/">Bitwise Industries</a></h1>
    </div>
    <nav>
        <ul>
            <li><a href="/">Services</a></li>
            <li class="dropdown"><a href="/">About</a>
                <ul>
                    <li><a href="/about/blogs-and-podcasts">Blogs & Podcasts</a></li>
                </ul>
            </li>
            <li><a href="/">Spaces</a></li>
            <li class="dropdown"><a href="/newsroom">Newsroom</a>
                <ul>
                    <li><a href="/newsroom/stories" data-sveltekit-preload-data>Bitwise Stories</a></li>
                    <li><a href="/newsroom/media-mentions">Media Mentions</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>

<button tabindex="-1">Can I haz focus??</button>

<form action="#">
    <input type="text" placeholder="plain text" required />
    <select name="alpha" id="alpha">
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
    </select>
    <textarea name="area" id="area" cols="30" rows="10" placeholder="plain text area"></textarea>
    <input type="submit" value="Submit Button" />
    <input type="reset" value="Reset Button">
    

</form>

<style>
    header div {
        background-color: #333;
        padding: 2em;
    }
    h1 {
        font-size: 16px;
        color: white;
    }
    nav ul ul {
        display: none;
    }
    button {
        margin-bottom: 20px;
    }

    form {
        max-width: 200px;
        display: flex;
        flex-direction: column;
    }
    form input,
    form select  {
        margin: 20px;
    }
</style>