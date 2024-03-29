const userInput = document.getElementById("user-input");

const checkBtn = document.getElementById("check-btn");

const resultsDiv = document.getElementById("results-div");

const clearBtn = document.getElementById("clear-btn");

const regex = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;


const mobileNumCheck = str => {
    str = userInput.value;
    const testNum = regex.test(str);
    const isValidOrInavlid = testNum ? `Valid US number: ${str}` : `Invalid US number: ${str}`;
    if (!str) {
        alert("Please provide a phone number");
    } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = isValidOrInavlid;
        resultsDiv.appendChild(paragraph);
        userInput.value = "";
        //resultsDiv.insertAdjacentText("beforeend",isValidOrInavlid);
    }
}

const clearResults = () => {
    resultsDiv.innerHTML = "";
}

checkBtn.addEventListener("click", mobileNumCheck);

clearBtn.addEventListener("click", clearResults);