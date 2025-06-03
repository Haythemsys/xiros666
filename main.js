// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Preloader animation
    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
    }, 6000);

    // Language switching functionality
    const languageButtons = document.querySelectorAll('.language-button');
    const translations = {
        ar: {
            title: "عالم الغموض والأسرار",
            enterButton: "الدخول إلى العالم الخفي",
            nav: {
                home: "الرئيسية",
                astrology: "الأبراج",
                magic: "السحر والطقوس",
                tarot: "التارو والتنبؤ",
                news: "أخبار غامضة",
                library: "المكتبة السرية",
                about: "حول الموقع"
            },
            sections: {
                astrology: "الأبراج والتنجيم",
                magic: "السحر والطقوس",
                tarot: "التارو والتنبؤ"
            },
            cards: {
                dailyHoroscope: "توقعات يومية",
                starMap: "خريطة النجوم",
                compatibility: "توافق الأبراج",
                whitemagic: "السحر الأبيض",
                elementalMagic: "السحر العنصري",
                magicSymbols: "الرموز السحرية",
                dailyReading: "قراءة اليوم",
                arcanaSecrets: "أسرار الأركانا",
                alternativeDivination: "طرق التنبؤ البديلة"
            },
            copyright: "جميع الحقوق محفوظة"
        },
        fr: {
            title: "Monde de Mystère et de Secrets",
            enterButton: "Entrer dans le Monde Caché",
            nav: {
                home: "Accueil",
                astrology: "Astrologie",
                magic: "Magie & Rituels",
                tarot: "Tarot & Divination",
                news: "Actualités Mystiques",
                library: "Bibliothèque Secrète",
                about: "À Propos"
            },
            sections: {
                astrology: "Astrologie et Horoscopes",
                magic: "Magie et Rituels",
                tarot: "Tarot et Divination"
            },
            cards: {
                dailyHoroscope: "Prédictions Quotidiennes",
                starMap: "Carte des Étoiles",
                compatibility: "Compatibilité Astrologique",
                whitemagic: "Magie Blanche",
                elementalMagic: "Magie Élémentale",
                magicSymbols: "Symboles Magiques",
                dailyReading: "Lecture du Jour",
                arcanaSecrets: "Secrets des Arcanes",
                alternativeDivination: "Méthodes Divinatoires Alternatives"
            },
            copyright: "Tous droits réservés"
        },
        en: {
            title: "World of Mystery and Secrets",
            enterButton: "Enter the Hidden World",
            nav: {
                home: "Home",
                astrology: "Astrology",
                magic: "Magic & Rituals",
                tarot: "Tarot & Divination",
                news: "Mystical News",
                library: "Secret Library",
                about: "About"
            },
            sections: {
                astrology: "Astrology and Horoscopes",
                magic: "Magic and Rituals",
                tarot: "Tarot and Divination"
            },
            cards: {
                dailyHoroscope: "Daily Predictions",
                starMap: "Star Map",
                compatibility: "Astrological Compatibility",
                whitemagic: "White Magic",
                elementalMagic: "Elemental Magic",
                magicSymbols: "Magical Symbols",
                dailyReading: "Daily Reading",
                arcanaSecrets: "Arcana Secrets",
                alternativeDivination: "Alternative Divination Methods"
            },
            copyright: "All rights reserved"
        }
    };

    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Update active button
            languageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update HTML direction attribute
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            
            // Update content based on selected language
            document.querySelector('.site-subtitle').textContent = translations[lang].title;
            document.querySelector('.enter-button').textContent = translations[lang].enterButton;
            
            // Update navigation items
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                const section = item.getAttribute('data-section');
                item.textContent = translations[lang].nav[section];
            });
            
            // Update section titles
            Object.keys(translations[lang].sections).forEach(section => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    sectionElement.querySelector('.section-title').textContent = translations[lang].sections[section];
                }
            });
            
            // Update card titles
            const cardTitles = {
                'astrology': ['dailyHoroscope', 'starMap', 'compatibility'],
                'magic': ['whitemagic', 'elementalMagic', 'magicSymbols'],
                'tarot': ['dailyReading', 'arcanaSecrets', 'alternativeDivination']
            };
            
            Object.keys(cardTitles).forEach(section => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const cards = sectionElement.querySelectorAll('.card-title');
                    cards.forEach((card, index) => {
                        card.textContent = translations[lang].cards[cardTitles[section][index]];
                    });
                }
            });
            
            // Update copyright
            document.querySelector('.copyright').innerHTML = `&copy; 2025 Occult Esoteric - ${translations[lang].copyright}`;
        });
    });

    // Enter button functionality
    const enterButton = document.querySelector('.enter-button');
    enterButton.addEventListener('click', function() {
        document.querySelector('.portal').style.display = 'none';
        document.querySelector('.main-content').style.display = 'block';
        
        // Animate sections into view
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, 300 * index);
        });
    });

    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            if (section === 'home') {
                document.querySelector('.portal').style.display = 'flex';
                document.querySelector('.main-content').style.display = 'none';
                return;
            }
            
            const targetSection = document.getElementById(section);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Create mystical floating symbols
    const symbols = ['✧', '☽', '☿', '♃', '♄', '⚹', '⚶', '♆', '⚸'];
    const container = document.querySelector('body');
    
    for (let i = 0; i < 15; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'mystical-symbol';
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.left = `${Math.random() * 100}%`;
        symbol.style.top = `${Math.random() * 100}%`;
        symbol.style.fontSize = `${Math.random() * 20 + 10}px`;
        symbol.style.animationDelay = `${Math.random() * 10}s`;
        symbol.style.animationDuration = `${Math.random() * 10 + 10}s`;
        container.appendChild(symbol);
    }

    // Smoke effect animation
    function createSmokeEffect() {
        const smoke = document.querySelector('.smoke');
        smoke.style.backgroundImage = 'url("https://assets.codepen.io/3364143/smoke.png")';
        smoke.style.backgroundSize = 'cover';
        
        let posX = 0;
        let posY = 0;
        
        setInterval(() => {
            posX += 0.2;
            posY += 0.1;
            smoke.style.backgroundPosition = `${posX}% ${posY}%`;
        }, 50);
    }
    
    createSmokeEffect();
});
