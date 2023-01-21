<script>
    export let data;
    $: ({ blog } = data)
</script>

<h1>Single Blog Post</h1>
<h2>{blog.title}</h2>