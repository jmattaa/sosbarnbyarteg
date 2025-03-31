<script>
    export let tableData;
</script>

<div class="overflow-x-auto p-4">
    <table class="table-auto w-full border-collapse border border-gray-300 min-w-max rounded-lg">
        <thead>
            <tr>
                {#each Object.keys(tableData[0]) as columnHeading}
                    <th class="px-6 py-3 border border-gray-300 text-left text-sm font-semibold uppercase">
                        {columnHeading}
                    </th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each Object.values(tableData) as row, index}
                <tr class="{index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-blue-100 transition duration-200">
                    {#each Object.values(row) as cell}
                        <td class="px-6 py-3 border border-gray-300 text-sm text-gray-700">
                            {cell}
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

