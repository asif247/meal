function searchFood(){
    const searchField=document.getElementById('search-field')
    const searchText=searchField.value;
    //console.log(searchText)
    searchField.value=''
    const url=`
    https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(response=>response.json())
    .then(data =>displaysearchresult(data.meals))
}
function displaysearchresult(meals){
    const searchResult=document.getElementById('search-result')
    for(const meal of meals){
        console.log(meal)
        const div=document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(1,99)}</p>
            </div>
          </div>
        `
        searchResult.appendChild(div)
    }
}
