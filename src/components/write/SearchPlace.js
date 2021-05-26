import React from 'react';
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
                places: this.props.location,
                onSearchBoxMounted: (ref) => {
                    refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                    const [place] = refs.searchBox.getPlaces();
                    const {
                        formatted_address,
                        geometry: { location },
                    } = place;
                    this.props.addPlace({
                        name: formatted_address,
                        lat: location.lat(),
                        lng: location.lng(),
                    });
                },
            });
        },
    }),
    withScriptjs,
)((props) => {
    return (
        <div data-standalone-searchbox="">
            <StandaloneSearchBox
                ref={props.onSearchBoxMounted}
                bounds={props.bounds}
                onPlacesChanged={props.onPlacesChanged}
            >
                <input
                    type="text"
                    placeholder={props.location.name}
                    className="input-blue input-location"
                    // value={props.location.name}
                />
            </StandaloneSearchBox>
        </div>
    );
});

export default SearchPlace;
