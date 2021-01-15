import React from "react";
import InputText from "./components/InputText";
import Languages from "./components/Languages";
import TranslatedText from "./components/TranslatedText";
import Description from "./components/Description";
import Footer from "./basic/components/Footer";

const TranslatorPage: React.FC = () => {
    return (
        <div className="translator">
            <Languages />
            <InputText />
            <TranslatedText />
            <Description />
            <Footer />
        </div>
    );
};

export default TranslatorPage;
