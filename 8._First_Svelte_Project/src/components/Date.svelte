<script>
    let date = new Date();

    let dates = [date];

    function updateDate() {
        date = new Date();
        /* dates.push(date);
        dates = dates; */
        dates = [...dates, date];
    }
</script>

<div>currentdate: {date}</div>
<button on:click={updateDate}>Click on me</button>

<div>{JSON.stringify(dates)}</div>
