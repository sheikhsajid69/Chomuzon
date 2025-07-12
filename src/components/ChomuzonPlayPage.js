import React, { useState, useEffect } from 'react';
import './ChomuzonPlayPage.css';
import Header from './Header';
import Footer from './Footer';

const ChomuzonPlayPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerSlides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Banner slides data
  const bannerSlides = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_PPP/84cfbf61-9973-4e2a-85ed-6ec9f59d8d3b.__SX1900__SY1069__QL60__._TTW_.jpeg",
      title: "Panchayat",
      description: "Watch Now"
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_mShop_Battleground/2d61ccdc-54ca-4384-a869-6590e7631fb2.__SX1900__SY1069__QL60__._TTW_.jpeg",
      title: "Battleground",
      description: "Watch for FREE"
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_HHIS2/fcf51135-c932-4b16-b4f2-a3dc7e2707cd.__SX1900__SY1069__QL60__._TTW_.jpeg",
      title: "Hip Hop India",
      description: "Watch Now"
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_KillDill/83cc82ca-7da6-4857-868b-57c75dd2a386.__SX1900__SY1069__QL60__._TTW_.jpeg",
      title: "Kill Dil",
      description: "Watch Now"
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_home_AashramP2/5e29b7df-c416-4a4b-8b07-764f14a37fde.__SX1900__SY1069__QL60__._TTW_.jpeg",
      title: "Aashram",
      description: "Watch Now"
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_RopeADope/1ae60b39-d138-4804-a2db-1929ee5f150c.__SX1900__SY1069__QL60__._TTW_.jpeg",
      title: "Rope A Dope",
      description: "Watch Now"
    }
  ];

  // Trending shows data
  const trendingShows = [
    {
      id: 1,
      title: "Playground",
      image: "https://m.media-amazon.com/images/S/pv-target-images/39660298480c44c966a896724e490bd216c112ca32be5835c7cc22d951c8a422.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 2,
      title: "Our Secret",
      image: "https://m.media-amazon.com/images/S/pv-target-images/eea40c4b11a95a3dcf5f7f5b275e1d121fe88b2980c417e14bd57ade61c954b5.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 3,
      title: "Girlfriend",
      image: "https://m.media-amazon.com/images/S/pv-target-images/3f2015773f9da2215fcd98b491bb3389f46042ea4dede2a7950f59a0ad26f9dc.__SX336__SY189__QL60__._TTW_.png"
    },
    {
      id: 4,
      title: "P2",
      image: "https://m.media-amazon.com/images/S/pv-target-images/2ce243bd5b20fdfff161d0b1e234fca73d0a484ce412a0614028ea66582301e7.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 5,
      title: "Miss Lucky Go",
      image: "https://m.media-amazon.com/images/S/pv-target-images/b9ac5b6b77c174351162a3cc01c776289e7aafebb064f19ee7285dc83c223ff4.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 6,
      title: "My Deskmate",
      image: "https://m.media-amazon.com/images/S/pv-target-images/82dea341a63c0cb117f9971d909a5ec0bdb96223ccce79dc5c0f991e7664cdfb.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 7,
      title: "School Days",
      image: "https://m.media-amazon.com/images/S/pv-target-images/4524df59b8e408fc35106fce1ddbc496fad69e47ac2f5110d4d61508c753c29e.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 8,
      title: "Love Story",
      image: "https://m.media-amazon.com/images/S/pv-target-images/1ec65082c2b9ccf0938baae48108a67228694e02f1632bdaa7c7c445523ebf19.__SX336__SY189__QL60__._TTW_.jpg"
    }
  ];

  // Popular web series data
  const popularSeries = [
    {
      id: 1,
      title: "Heartbeats",
      image: "https://m.media-amazon.com/images/S/pv-target-images/63eafac1297d2f0b17082076825178675c04f54ac68f0bd3e49fc9ab447ff346.__SX336__SY189__QL60__._TTW_.png"
    },
    {
      id: 2,
      title: "Amber Girls School",
      image: "https://m.media-amazon.com/images/S/pv-target-images/73fa2a0d8f99ee449b9c91652c11495d98c086115c137fb0cf2aef973cdfe01c.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 3,
      title: "Physics Wallah",
      image: "https://m.media-amazon.com/images/S/pv-target-images/a92ee34010d3314f0007fdfb4b19954c61414ac8ee1b5d2ec570b6fcec1cc39f.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 4,
      title: "JantarPaar",
      image: "https://m.media-amazon.com/images/S/pv-target-images/7f80d52741de8c288db96b5d3c9006c3e852a507b5c8050e333528f41f435209.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 5,
      title: "School Friends",
      image: "https://m.media-amazon.com/images/S/pv-target-images/ee5a31fb2cbcf41159c41d6d93af2164a1ae524230e2563136a146e0732390bb.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 6,
      title: "Half CA",
      image: "https://m.media-amazon.com/images/S/pv-target-images/dc43ab2db5261d6ecfca452115896a465a624e7d2a40c4c8181a321b3de8819a.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 7,
      title: "Panchayat",
      image: "https://m.media-amazon.com/images/S/pv-target-images/f1fc67605e6f7c938fb02067b273745a16e68f28e63737bc9f9dce400dd10abb.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 8,
      title: "Mirzapur",
      image: "https://m.media-amazon.com/images/S/pv-target-images/4d94e46250adab0a1be4f2efa728a07617bb3613759d3d92f3a9d9b481620646.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 9,
      title: "The Family Man",
      image: "https://m.media-amazon.com/images/S/pv-target-images/374608c6fa2032181ad1713ec3a74d35c8e8959975013d59c2e1905f7d0eb90d.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 10,
      title: "Paatal Lok",
      image: "https://m.media-amazon.com/images/S/pv-target-images/e3149bbb29ceccfa3efa54c470f21614178537eabed99bfe0b49db3fdcfad668.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 11,
      title: "Made In Heaven",
      image: "https://m.media-amazon.com/images/S/pv-target-images/ea5cbde969dfbbb92b0ac905326ad08c664f197511f355d26252834bf090a80d.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 12,
      title: "Four More Shots Please",
      image: "https://m.media-amazon.com/images/S/pv-target-images/1676b7f59e815c5b28209b10f6987b894ebd25960da0e384c9887d0904f61cfa.__SX336__SY189__QL60__._TTW_.jpg"
    }
  ];

  // Dubbed series data
  const dubbedSeries = [
    {
      id: 1,
      title: "Money Heist",
      image: "https://m.media-amazon.com/images/S/pv-target-images/ba856aec824022f51b6b730683582bc206cda9d6bec774b9349707a4cdcc2e78.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 2,
      title: "Squid Game",
      image: "https://m.media-amazon.com/images/S/pv-target-images/b50c37a36da882e1af613fd4e343459ff7a2f646a28301563684930d6ae43f5d.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 3,
      title: "Dark",
      image: "https://m.media-amazon.com/images/S/pv-target-images/cabc55f5fd884f80594f69baa3758f898b77718c2973608b18b4d91b7ee0def6.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 4,
      title: "Elite",
      image: "https://m.media-amazon.com/images/S/pv-target-images/b1a199b33830de222daaa4ac2970e6df91241303dbb194740e87e9ba759d6adf.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 5,
      title: "Lupin",
      image: "https://m.media-amazon.com/images/S/pv-target-images/3ff50f9cb622d3ea470878bd2646371281ef2631394feb2ea20dd8862b9c2593.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 6,
      title: "Kingdom",
      image: "https://m.media-amazon.com/images/S/pv-target-images/47bf62ef4e1c30471a72c2134b9bc1827dd3373a88142db996d777a7fa39a902.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 7,
      title: "The Rain",
      image: "https://m.media-amazon.com/images/S/pv-target-images/cb63b2bf1e1e4df8aeb7912fb5029a8a8e82a36e0c28f512199975f7a62ae112.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 8,
      title: "Alice in Borderland",
      image: "https://m.media-amazon.com/images/S/pv-target-images/23e7b45fb65600aa5569c126341e11c6ae7b32eb5d04a1c1b4f5b9b655583d16.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 9,
      title: "3%",
      image: "https://m.media-amazon.com/images/S/pv-target-images/a2f7afd199477533922d820255aa5fb9aecef4c2d497f761c89df00371fc4088.__SX336__SY189__QL60__._TTW_.jpg"
    },
    {
      id: 10,
      title: "Narcos",
      image: "https://m.media-amazon.com/images/S/pv-target-images/e0d51ae811a1ad9af8fe44a85b03e7a7ecd04e02239362f915ec7d0e9f363d7e.__SX336__SY189__QL60__._TTW_.jpg"
    }
  ];

  return (
    <div className="play-page">
      <Header />
      
      {/* Play Header */}
      <div className="play-header">
        <div className="play-logo-container">
          <img 
            src="https://github.com/sheikhsajid69/MediaAssist.v1/blob/main/chomozon.png?raw=true" 
            alt="Chomuzon Logo" 
            className="play-logo"
          />
          <span className="play-text">play</span>
        </div>
        <nav className="play-nav">
          <ul>
            <li className="active">Home</li>
            <li>New & Hot</li>
            <li>Web Series</li>
            <li>Movies</li>
            <li>VOssi</li>
            <li>Romance</li>
            <li>Comedy</li>
            <li>Tamil</li>
            <li>Telugu</li>
          </ul>
        </nav>
        <div className="play-search">
          <i className="fas fa-search"></i>
        </div>
      </div>
      
      {/* Main Banner Slider */}
      <div className="play-banner-slider">
        {bannerSlides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`play-banner-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="play-banner-content">
              <h2>{slide.title}</h2>
              <button className="play-watch-btn">
                <i className="fas fa-play"></i> Watch for FREE
              </button>
            </div>
          </div>
        ))}
        
        <div className="play-slider-dots">
          {bannerSlides.map((_, index) => (
            <span 
              key={index} 
              className={`play-slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      
      {/* Trending Section */}
      <section className="play-content-section">
        <h2 className="section-title">Trending Top 10</h2>
        <div className="play-content-row">
          {trendingShows.map(show => (
            <div key={show.id} className="play-content-card">
              <img src={show.image} alt={show.title} />
              <div className="play-content-overlay">
                <h3>{show.title}</h3>
                <button className="play-watch-now">Watch Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Popular Web Series */}
      <section className="play-content-section">
        <h2 className="section-title">Popular Web Series</h2>
        <div className="play-content-row">
          {popularSeries.map(show => (
            <div key={show.id} className="play-content-card">
              <img src={show.image} alt={show.title} />
              <div className="play-content-overlay">
                <h3>{show.title}</h3>
                <button className="play-watch-now">Watch Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Dubbed Series */}
      <section className="play-content-section">
        <h2 className="section-title">New in Dubbed Series</h2>
        <div className="play-content-row">
          {dubbedSeries.map(show => (
            <div key={show.id} className="play-content-card">
              <img src={show.image} alt={show.title} />
              <div className="play-content-overlay">
                <h3>{show.title}</h3>
                <button className="play-watch-now">Watch Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChomuzonPlayPage;