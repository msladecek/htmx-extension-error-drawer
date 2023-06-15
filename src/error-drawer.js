htmx.defineExtension('error-drawer', {
    onEvent: function (name, evt) {
        if (name !== 'htmx:beforeOnLoad') {
            return true;
        }
        if (evt.detail.xhr.status < 400) {
            return true;
        }
        var errorDrawer = document.getElementById("htmx-error-drawer");
        if (!errorDrawer) {
            errorDrawer = document.createElement("div", {id: "htmx-error-drawer"});
            var body = document.querySelector("body");
            body.insertBefore(errorDrawer, body.firstChild);
        }
        var errorSummary = document.createElement("summary");
        var errorDetailsElement = document.createElement("details");
        var errorDetailsText = document.createElement("div");
        errorDetailsText.innerHTML = evt.detail.xhr.responseText;
        var errorSummaryText = document.createTextNode(`${evt.detail.xhr.status} - ${evt.detail.xhr.statusText}`);
        function dismiss() { errorDetailsElement.remove() };
        var dissmissButton = document.createElement("button");
        dissmissButton.addEventListener("click", dismiss);
        dissmissButton.innerText = "Dismiss";
        errorSummary.appendChild(errorSummaryText);
        errorSummary.appendChild(dissmissButton);
        errorDetailsElement.appendChild(errorSummary);
        errorDetailsElement.appendChild(errorDetailsText)
        errorDrawer.appendChild(errorDetailsElement);
        return true;
    }
});
