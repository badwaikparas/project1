import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import map from './assets/image.png'

// Fix for missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function PanToLocation({ latitude, longitude }) {
    const map = useMap();
    map.setView([latitude, longitude], 150);
    return null;
}

const Map = ({ latitude, longitude }) => {
    return (
        <div style={{ height: "100vh", width: "100vw", position: "absolute" }}>
            <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
            >

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <PanToLocation latitude={latitude} longitude={longitude} />
                <ZoomControl position="bottomright" />
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        A pretty popup! <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
