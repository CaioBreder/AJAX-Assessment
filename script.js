let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", onSubmit);

let profileDiv = document.createElement("div");
document.body.appendChild(profileDiv);

function constructProfile(data)
{
    profileDiv.innerHTML = "";

    constructProfileImage(data["avatar_url"]);

    constructProfileElement("Location", data["location"]);
    constructProfileElement("Followers", data["followers"]);
    constructProfileElement("Following", data["following"]);
    constructProfileElement("Name", data["name"]);
    constructProfileElement("Login", data["login"]);
    constructProfileElement("Company", data["company"]);
}
function onSubmit(event)
{
    let username = document.getElementById("uT").value;

    fetch(`https://api.github.com/users/${username}`).then
    (
        (response) => response.json()
    ).then
    (
        constructProfile
    );

    event.preventDefault();
}
function constructProfileImage(url)
{
    let avatar = document.createElement("img");
    avatar.setAttribute("src", url);
    avatar.setAttribute("alt", "Avatar not available");
    avatar.setAttribute("width", "100");
    avatar.setAttribute("height", "100");
    profileDiv.appendChild(avatar);
}
function constructProfileElement(name, value)
{
    if(value != null)
    {
        let element = document.createElement("p");
        let textValue = document.createTextNode(name + ":  " + value);
        element.appendChild(textValue);
        profileDiv.appendChild(element);
    }
}