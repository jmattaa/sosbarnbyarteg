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
         {
            namn: "Ottilia Thoresson",
            roll: " Vice Ordförande",
            klass: "D23a",
            email: "ottilia.thoresson@student.tabyenskilda.se",
        },
         {
            namn: "Olivia Markhill",
            roll: " sSkreterare",
            klass: "N22c",
            email: "olivia.markhill@student.tabyenskilda.se",
        },
         {
            namn: "Lakira Sasnima",
            roll: " Vice Sekreterare",
            klass: "N23b",
            email: "lakira.meddegoda@student.tabyenskilda.se",
        },
         {
            namn: "Clara Lindqvist",
            roll: " Ekonomiansvarig",
            klass: "S22b",
            email: "clara.lindqvist@student.tabyenskilda.se",
        },
         {
            namn: "Alexander Wåge",
            roll: " Fika Ansvarig",
            klass: "T23",
            email: "alexander.wage@student.tabyenskilda.se",
        },
         {
            namn: "Viggo Karlsson",
            roll: " Försäljningsansvarig",
            klass: "N23b",
            email: "viggo.karlsson@student.tabyenskilda.se",
        },
         {
            namn: "Elias Galmén",
            roll: " Inköpsansvarig",
            klass: "N23a",
            email: "elias.galmen@student.tabyenskilda.se",
        },
         {
            namn: "Livia Galsgaard",
            roll: " Superiggare",
            klass: "N23c",
            email: "livia.galsgaard@student.tabyenskilda.se",
        },
    ]);
</script>

<main class="container mx-auto">
    <h1 class="text-3xl">Vilka är vi?</h1>
    <p>Vi är en förening som vill göra något för samhället</p>
    <h2 class="text-2xl">Styrelse</h2>
    <Table tableData={$styrelsen} />
</main>
