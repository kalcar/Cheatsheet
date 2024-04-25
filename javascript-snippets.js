// using node, express, axios, ejs


{ // in ejs template, sample fetch using a node endpoint
    fetch('/forms/postjob', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            "jobdata": job_data,
            "tooldata": filledTools})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        //console.log('Success:', data);
        showToast("Job report submitted successfully"); // Show success toast
        form = document.getElementById("jobReportForm")
        form.reset()
    })
    .catch(error => {
        console.error('Error:', error);
        showToast("Error submitting job report"); // Show error toast
    });
    }

    