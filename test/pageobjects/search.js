class Search {

    get searchInput() { return $("div#search > input[name='search']"); }
    get searchButton() { return $(".fa-search"); }

    searchStore(item) {
        this.searchInput.addValue(item)
        this.searchButton.click();
    }
}

export default new Search;