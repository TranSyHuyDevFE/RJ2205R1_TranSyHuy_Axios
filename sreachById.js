const key_api = "YsUb7YmHAxVkxVLsutBVDrKCaTu4H2sH";

const searchAxios = async (keyword) => {
  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${key_api}`
    );
    const responseList = response.data;
    console.log(responseList);
    var contentHTML = " ";
    responseList.data.forEach((item) => {
      contentHTML += `
      <div>
      <div class="col-md-2">
          <img src='${item.images.original.url}'></img>
        
        </div>
      </div>
      `;
    });
    var imgShow = document.querySelector("#show");
    imgShow.innerHTML = contentHTML;
  } catch (error) {
    console.log(error);
  }
};

function search() {
  var searchInput = document.querySelector("#searchID").value;
  searchAxios(searchInput);
}
function clear_show() {
  var imgShow = document.querySelector("#show");
  imgShow.innerHTML = " ";
}
