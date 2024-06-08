let counter = 0;
let ele = document.querySelector(".output");

let poll = function() {
    fetch('/poll/'+counter)
    .then((resp) => {
        counter = resp.count;
        ele.textContent += resp.append;
        poll();        
    })
    .catch((err) => alert(err))
}

poll();