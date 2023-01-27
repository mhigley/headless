<script>
    import Navigation from './Navigation.svelte';
    import '../layout.css';

    import { page } from '$app/stores';
    $: routeId = $page.route.id;

    function handle_click(e){
        e.preventDefault();
        console.log(e, this);
    }
</script>

<header>
    <div>
        <h1><a href="/" class:active={routeId == '/'}>Bitwise Industries</a></h1>
    </div>
    <Navigation />
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