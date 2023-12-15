function main() {
  fetchUserInfo("js-primer-example");
}

function fetchUserInfo(userId) {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then((response) => {
      console.log(response.status);

      if (!response.ok) {
        console.error("エラーレスポンス", response);
      } else {
        return response.json().then((userInfo) => {
          const view = createView(userInfo);
          displayView(view);
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function createView(userInfo) {
  return escapeHTML`
  <h4>${userInfo.name} (@${userInfo.login})</h4>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
  <dl>
    <dt>Location</dt>
    <dd>${userInfo.location}</dd>
    <dt>Repositories</dt>
    <dd>${userInfo.public_repos}</dd>
  </dl>
  `;
}

function displayView(view) {
  const result = document.getElementById("result");
  result.innerHTML = view;
}
