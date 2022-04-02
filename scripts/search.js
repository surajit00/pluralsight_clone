
async function search(){
    try {
        let key = document.getElementById("searchInput").value;

        let api = `https://pluralsightfw15.herokuapp.com/course/search/${key}`;

        let res = await fetch(api);
        let data = await res.json();
        // console.log(data);
        return(data);
    } catch (e) {
        console.log(e);
    }
}

async function main(){
    let data = await search();
    if(data == undefined){
        document.getElementById("displaysearch").innerHTML = null;
        return false;
    }
    displayData(data);
}

function displayData(data){
    // console.log(data);
    document.getElementById("displaysearch").innerHTML = "";
    let div = document.createElement('div');
    div.setAttribute("id","coursediv");

    data.forEach(element => {
        let title = document.createElement("p");
        title.setAttribute("style","cursor:pointer");
        title.innerText = element.title;
         console.log(element);
         
        title.onclick = ()=>{
            localStorage.setItem("course", JSON.stringify(element));
            location.href = "course.html";
        }

        div.append(title);
    });
    document.getElementById("displaysearch").append(div);
}

let timerId;

function debounce(func, delay){
    if(timerId){
        clearTimeout(timerId);
    }
    timerId = setTimeout(()=>{
        func();
    },delay);
}


