<script>
    export let data;

    // $: ({ blog } = data)
    const { blog } = data;

    // const copy = blog.blocksJSON;
    console.log(blog.blocksJSON.stringify());
</script>

<h1>Single Blog Post</h1>
<h2>{blog.title}</h2>