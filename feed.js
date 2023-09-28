const news = [
    { headline: "<b>Russia and Ukraine in conflict</b>", body: "Detailed news content here...<br><br>", date: new Date() }
];

// Display selected news item
function showFeed(index) {
    for (let i = 0; i < news.length; i++) {
        document.getElementById(`body${i}`).style.display = "none";
    }
    document.getElementById(`body${index}`).style.display = "inline";
}

// Hide displayed news item
function hideFeed(index) {
    document.getElementById(`body${index}`).style.display = "none";
}

// Populate the news list on the page
function populateNews() {
    let newsList = "";
    for (let i = 0; i < news.length; i++) {
        newsList += `<li id="n${i}" onclick="showFeed(${i})" class="headline">${news[i].headline}</li>
                     <div style="display:none" onclick="hideFeed(${i})" id="body${i}">${news[i].body}${news[i].date}</div>`;
    }
    return newsList;
}

document.getElementById("mainList").innerHTML = `<ol>${populateNews()}</ol>`;

// Show add news form
function showAddNewsForm() {
    document.getElementById("addForm").style.display = "inline";
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("btnContainer").style.display = "none";
}

// Read user inputs and return as an object
function readFields() {
    return {
        headline: `<b>${document.getElementById("addHeadline").value}</b>`,
        body: `${document.getElementById("addBody").value}<br><br>`,
        date: new Date()
    };
}

// Validate user inputs
function validateFields() {
    let msg = "";
    const fields = readFields();
    if (fields.headline === "<b></b>") {
        msg += "Please enter a headline.\n";
        document.getElementById("addHeadline").style.border = "1px solid red";
    }
    if (fields.body === "<br><br>") {
        msg += "Please enter the body of the news.\n";
        document.getElementById("addBody").style.border = "1px solid red";
    }
    if (msg) {
        alert(msg);
        return false;
    }
    alert("News posted successfully.");
    return true;
}

// Save the news if validation succeeds
function saveNews() {
    if (validateFields()) {
        news.push(readFields());
        document.getElementById("mainList").innerHTML = `<ol>${populateNews()}</ol>`;
        document.getElementById("addForm").style.display = "none";
        document.getElementById("addHeadline").value = "";
        document.getElementById("addBody").value = "";
        document.getElementById("btnContainer").style.display = "inline-block";
        document.getElementById("addBtn").style.display = "inline-block";
    }
}

// Cancel button logic
function cancel() {
    document.getElementById("addForm").style.display = "none";
    document.getElementById("addBtn").style.display = "inline-block";
    document.getElementById("addHeadline").value = "";
    document.getElementById("addBody").value = "";
    document.getElementById("btnContainer").style.display = "inline-block";
}

// Sort news by date
function sortByDate() {
    news.sort((a, b) => a.date - b.date);
    document.getElementById("mainList").innerHTML = `<ol>${populateNews()}</ol>`;
}

// Sort news alphabetically
function sortAlphabetically() {
    news.sort((a, b) => a.headline.localeCompare(b.headline));
    document.getElementById("mainList").innerHTML = `<ol>${populateNews()}</ol>`;
}
