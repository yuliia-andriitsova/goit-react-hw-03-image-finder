import { Component } from 'react';
// import { ReactComponent as MyIcon } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getPhoto } from './Api/Fetch';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
    searchImage: '',
    isLoading: false,
    isError: false,
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   const data = await getPhoto();
  //   console.log(data);
  //   this.setState({
  //     images: data,
  //     isLoading: false,
  //   });
  // }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const data = await getPhoto();
      console.log(data);
      this.setState({ images: data });
    } catch {
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchImage !== this.state.searchImage &&
      this.searchImage !== ''
    ) {
      this.setState({ isLoading: true });
      const data = await getPhoto(this.state.searchImage);

      this.setState({
        images: data,
        isLoading: false,
      });
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    const { isError, images } = this.state;
    if (isError || !images) {
      return 'Not found';
    }
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: 16,
          paddingBottom: 24,
        }}
      >
        <Searchbar
          handleChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ImageGallery
          images={this.state.images}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}
