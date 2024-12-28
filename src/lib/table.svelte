<script>
    export let tableData;
</script>

<table class="table-auto w-full border-collapse border border-gray-300">
    <thead>
        <tr class="bg-gray-100">
            {#each Object.keys(tableData[0]) as columnHeading}
                <th class="px-4 py-2 border border-gray-300 text-left text-sm
                font-medium text-gray-600"
                >
                    {columnHeading}
                </th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each Object.values(tableData) as row}
            <tr class="hover:bg-gray-50">
                {#each Object.values(row) as cell}
                    <td class="px-4 py-2 border border-gray-300 text-sm
                    text-gray-700"
                    >
                        {cell}
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
