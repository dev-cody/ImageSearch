import React from 'react';
import unsplash from '../API/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

//Access Key P7GxzTFODnO7VpFjm8Rav9M07vk2hoORqniRg5RdTX8
//Secret Key Pv6MrcvPcvNhaoH-Lic8Hwc4Z5LxtA2dwZWqBSqzma0
class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const res = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        this.setState({ images: res.data.results });
    }

    render() {
        return(
            <div className="ui container" style={{marginTop: '5%'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;