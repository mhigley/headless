<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
</script>

<Header />

<main>
    <slot />
</main>

<Footer />

<style>
    main {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
    }
</style>