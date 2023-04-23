import React, { PureComponent } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import AnimeList from "./AnimeList";
class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      animeData: {
        data: [],
      },
    };
  }
  fetchAnimeData = async () => {
    const options = this.getOptions("searching");
    const res = await axios.request(options);
    return res.data;
  };
  getOptions = (x) => {
    let genres = "",
      search = "";
    if (x === "searching") {
      search = this.state.searchString;
    } else {
      genres =
        "Fantasy,Drama,Action,Comedy,Historical,Psychological,Isekai,Thriller";
    }
    return {
      method: "GET",
      url: "https://anime-db.p.rapidapi.com/anime",
      params: {
        page: "1",
        size: "20",
        search: `${search}`,
        genres: `${genres}`,
        sortBy: "ranking",
        sortOrder: "asc",
      },
      headers: {
        "X-RapidAPI-Key": "ef70eaa255msh3678aee7dee59c1p1a338cjsn35d74e7366e9",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };
  };
  submitHandler = async (event) => {
    console.log(this.state.searchString);
    event.preventDefault();
    if (this.state.searchString !== "") {
      const data = await this.fetchAnimeData();
      this.setState({
        animeData: data,
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      searchString: event.target.value,
    });
  };
  componentDidMount() {
    console.log("did mount ");
    const options = this.getOptions("");
    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        this.setState({
          animeData: res.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <>
        <SearchInput
          changeHandler={this.changeHandler}
          subitHandler={this.submitHandler}
          searchString={this.state.searchString}
        />
        <AnimeList animeData={this.state.animeData} />
      </>
    );
  }
}

export default MainPage;
