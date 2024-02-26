import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import rightimg from "../assets/rightimg.svg";
import { useTranslation } from "react-i18next";

function Card() {
    const selectRef = useRef(null);
    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "dark") {
            enableDarkMode();
        }
    }, []);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("i18nextLng");
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            if (selectRef.current) {
                selectRef.current.value = savedLanguage;
            }
        }
    }, [i18n]);


    function enableDarkMode() {
        document.body.classList.add("darkMode");
        updateModeTextAndImage(true);
    }

    function disableDarkMode() {
        document.body.classList.remove("darkMode");
        updateModeTextAndImage(false);
    }

    function updateModeTextAndImage(isDarkMode) {
        const modeText = document.querySelector(".dark");
        const sunImg = document.querySelector(".sunImg");

        if (modeText && sunImg) {
            if (isDarkMode) {
                modeText.textContent = "Dark Mode";
                sunImg.src = moon;
            } else {
                modeText.textContent = "Light Mode";
                sunImg.src = sun;
            }
        }

        localStorage.setItem("darkMode", isDarkMode ? "dark" : "light");
    }

    function handleModeToggle() {
        const isDarkModeActive = document.body.classList.contains("darkMode");

        if (isDarkModeActive) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }

    function handleLanguage() {
        const selectedLanguage = selectRef.current.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem("i18nextLng", selectedLanguage);
    }

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, []);

    async function fetchData() {
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    return (
        <div className={`container ${loading ? 'loading' : ''}`}>
            {loading ? (
                <div className="loader"></div>
            ) : (
                <>
                    <header>
                        <nav>
                            <li>
                                <a href="#">{t("About")}</a>
                            </li>
                            <li>
                                <a href="#">{t("Skills")}</a>
                            </li>
                            <li>
                                <a href="#">{t("Project")}</a>
                            </li>
                            <li>
                                <a href="#">{t("Contact")}</a>
                            </li>
                        </nav>
                        <select onChange={handleLanguage} ref={selectRef}>
                            <option value="uzb">uzb</option>
                            <option value="eng">eng</option>
                            <option value="rus">rus</option>
                        </select>
                        <div className="darkMode" onClick={handleModeToggle}>
                            <p className="dark">{t("Dark")}</p>
                            <img className="sunImg" src={sun} alt="" />
                        </div>
                    </header>
                    <div className="content">
                        <div className="left">
                            <h1>{t("hello")}</h1>
                            <p>{t("text")}</p>
                            <div className="buttons">
                                <button className="btn1">{t("button1")}</button>
                                <button className="btn2">{t("button2")}</button>
                            </div>
                        </div>
                        <div>
                            <img src={rightimg} alt="" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
