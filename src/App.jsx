import "./App.css";
import React from "react";
import "./styles.css";
import Searchbar from "./components/Searchbar";

export default class App extends React.Component {
  state = {
    searchQuery: "",
    images: [],
    page: 1,
  };

  handleSearch = (inputValue) => {
    this.setState({ searchQuery: inputValue, page: 1, images: [] });
  };

  fetchImages = async () => {
    const APIKEY = "46861510-78e6e4a0e2cd6077f83d9b926";
    const { searchQuery, page } = this.state;

    try {
      const res = await fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await res.json();

      this.setState((prev) => ({
        images: [...prev.images, ...data.hits],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  componentDidUpdate(prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  loadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
      </>
    );
  }
}
