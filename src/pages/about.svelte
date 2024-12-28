<script>
    import { writable } from "svelte/store";
    import Table from "../lib/table.svelte";

    const styrelsen = writable([
        {
            namn: "Ester Rosén",
            roll: "Ordförande",
            klass: "N22c",
            email: "ester.rosen@student.tabyenskilda.se",
        },
        {
            namn: "Tova Löfgren",
            roll: "Ordförande",
            klass: "N22c",
            email: "tova.lofgren@student.tabyenskilda.se",
        },
    ]);
</script>

<main class="container mx-auto">
    <h1 class="text-3xl">Vilka är vi?</h1>
    <p>Vi är en förening som vill göra något för samhället</p>
    <h2 class="text-2xl">Styrelse</h2>
    <Table tableData={$styrelsen} />
</main>
