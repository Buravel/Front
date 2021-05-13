import React from 'react';
import ReactDOM from 'react-dom';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';

const SearchPlace = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
    }),
    lifecycle({
        componentWillMount() {
            const refs = {};

            this.setState({
                places: [],
                onSearchBoxMounted: (ref) => {
                    refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();

                    this.setState({
                        places,
                    });
                },
            });
        },
    }),
    withScriptjs,
)((props) => (
    <div data-standalone-searchbox="">
        <StandaloneSearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            onPlacesChanged={props.onPlacesChanged}
        >
            <input
                type="text"
                placeholder="주소입력"
                className="input-blue input-location"
            />
        </StandaloneSearchBox>
    </div>
));

export default SearchPlace;
