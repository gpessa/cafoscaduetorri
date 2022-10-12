import Script from "next/script";
import { useEffect, useState } from "react";

const Tripadvisor = () => {

    const [client, setClient] = useState<boolean>();

    useEffect(() => {
        setClient(true)
    }, []);

    return client ? <>
        <div
            id="TA_cdsratingsonlywide999"
            className="TA_cdsratingsonlywide">
            <ul
                id="lKGnJn"
                className="TA_links 7wUsaUK2">
                <li id="nb34CQiq" className="N6szyp">
                    <a rel="noreferrer" target="_blank" href="https://www.tripadvisor.com/Hotel_Review-g187801-d617462-Reviews-Ca_Fosca_due_Torri-Bologna_Province_of_Bologna_Emilia_Romagna.html">
                        <img src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" alt="TripAdvisor" />
                    </a>
                </li>
            </ul>
        </div>

        <Script strategy="lazyOnload" src="https://www.tripadvisor.com/wejs?wtype=cdsratingsonlywide&uniq=999&locationId=617462&lang=en_US&border=false&shadow=false&backgroundColor=white&display_version=2" data-loadtrk onload="this.loadtrk=true"></Script>
    </> : null;
}

export default Tripadvisor;