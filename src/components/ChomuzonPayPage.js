import React from 'react';
import './ChomuzonPayPage.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // Import Footer component

const ChomuzonPayPage = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />
      
      <div className="pay-wrapper">
        {/* Pay Logo Header */}
        <div className="pay-logo-header">
          <div className="pay-logo">
            <img 
              src="https://github.com/sheikhsajid69/MediaAssist.v1/blob/main/chomozon.png?raw=true" 
              alt="Chomuzon Logo" 
              className="chomuzon-logo"
            />
            <span className="pay-text">pay</span>
          </div>
        </div>
        
        <div className="pay-content-wrapper">
          {/* Left Sidebar */}
          <div className="pay-sidebar">
            <div className="balance-card">
              <h3>Chomuzon Pay Balance</h3>
              <div className="balance-amount">₹0.00</div>
              <div className="sidebar-options">
                <div className="sidebar-option">
                  <i className="fas fa-plus-circle"></i>
                  <span>Add Money</span>
                </div>
                <div className="sidebar-option">
                  <i className="fas fa-gift"></i>
                  <span>Add Gift Card</span>
                </div>
                <div className="sidebar-option">
                  <i className="fas fa-cog"></i>
                  <span>Account Settings</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="pay-main">
            {/* Travel Section */}
            <section className="pay-section">
              <h2>Travel</h2>
              <div className="service-grid">
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Flight._CB616315948_.png" alt="Flights" className="service-img" />
                  <p>Flights</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Bus._CB616315948_.png" alt="Bus Tickets" className="service-img" />
                  <p>Bus Tickets</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Train._CB616315951_.png" alt="Trains" className="service-img" />
                  <p>Trains</p>
                </div>
              </div>
            </section>
            
            {/* Recharges Section */}
            <section className="pay-section">
              <h2>Recharges</h2>
              <div className="service-grid">
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png" alt="Mobile Recharge" className="service-img" />
                  <p>Mobile Recharge</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Apple_code._CB616315948_.png" alt="App Store Code" className="service-img" />
                  <p>App Store Code</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_DTH._CB616315948_.png" alt="DTH Recharge" className="service-img" />
                  <p>DTH Recharge</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/APD_icon_GPRC._CB594689751_.png" alt="Google Play Recharge" className="service-img" />
                  <p>Google Play Recharge</p>
                </div>
              </div>
            </section>
            
            {/* Bill Payments Section */}
            <section className="pay-section">
              <h2>Bill Payments</h2>
              <div className="service-grid">
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Elec._CB616315948_.png" alt="Electricity" className="service-img" />
                  <p>Electricity</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_M_Postoaid._CB616315951_.png" alt="Mobile Prepaid" className="service-img" />
                  <p>Mobile Prepaid</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_CC_Bill._CB616315951_.png" alt="Credit Card Bill" className="service-img" />
                  <p>Credit Card Bill</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Laon_Rep._CB616315951_.png" alt="Loan Repayment" className="service-img" />
                  <p>Loan Repayment</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_LPG._CB616315951_.png" alt="LPG" className="service-img" />
                  <p>LPG</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Ins_Premium._CB616315948_.png" alt="Insurance Premium" className="service-img" />
                  <p>Insurance Premium</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Pipegas._CB616315948_.png" alt="Piped Gas" className="service-img" />
                  <p>Piped Gas</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Water._CB616315951_.png" alt="Water Bill" className="service-img" />
                  <p>Water Bill</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Landline._CB616315951_.png" alt="Landline" className="service-img" />
                  <p>Landline</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Braodband._CB616315948_.png" alt="Broadband" className="service-img" />
                  <p>Broadband</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_M_Tax._CB616315951_.png" alt="Municipal Tax" className="service-img" />
                  <p>Municipal Tax</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_CableTV._CB616315948_.png" alt="Cable TV" className="service-img" />
                  <p>Cable TV</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Edu_fee._CB616315948_.png" alt="Education Fees" className="service-img" />
                  <p>Education Fees</p>
                </div>
              </div>
            </section>
            
            {/* Daily Transit Section */}
            <section className="pay-section">
              <h2>Daily Transit</h2>
              <div className="service-grid">
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/APD_icon_Amazon_Pay_ICICI_Fastag._CB600226984_.png" alt="Chomuzon Pay FASTag" className="service-img" />
                  <p>Chomuzon Pay FASTag</p>
                </div>
              </div>
            </section>
            
            {/* Insurance Section */}
            <section className="pay-section">
              <h2>Insurance (chomuzonpayinsurance.in)</h2>
              <div className="service-grid">
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Car_Ins._CB616315948_.png" alt="Car Insurance" className="service-img" />
                  <p>Car Insurance</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Bike_Ins._CB616315948_.png" alt="Bike Insurance" className="service-img" />
                  <p>Bike Insurance</p>
                </div>
              </div>
            </section>
            
            {/* Gift Cards and Vouchers Section */}
            <section className="pay-section">
              <h2>Gift Cards and Vouchers</h2>
              <div className="service-grid">
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_AddGC._CB616315948_.png" alt="Add Gift Card" className="service-img" />
                  <p>Add Gift Card</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_All_GC._CB616315948_.png" alt="Gift Cards" className="service-img" />
                  <p>Gift Cards</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/125x125_icon_Subtle_Yellow_copy1_Amazon_Voucher._CB617212892_.png" alt="Amazon Vouchers" className="service-img" />
                  <p>Chomuzon Vouchers</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Brand_vouchers._CB616315948_.png" alt="Brand Vouchers" className="service-img" />
                  <p>Brand Vouchers</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_BGC._CB616315948_.png" alt="Birthday Giftcards" className="service-img" />
                  <p>Birthday Giftcards</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/125x125_icon_Subtle_Yellow_copy1_Wedding_Giftcards._CB617212892_.png" alt="Wedding Giftcards" className="service-img" />
                  <p>Wedding Giftcards</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/125x125_icon_Subtle_Yellow_copy1_CorporateGC._CB617212892_.png" alt="Corporate Gifting" className="service-img" />
                  <p>Corporate Gifting</p>
                </div>
              </div>
            </section>
            
            {/* Manage Section */}
            <section className="pay-section">
              <h2>Manage</h2>
              <div className="service-grid">
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/Desktop/Desktop_APD_view-statement._CB612762929_.png" alt="Your Transactions" className="service-img" />
                  <p>Your Transactions</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/Desktop/Desktop_APD_your-rewards._CB612762929_.png" alt="Your Rewards" className="service-img" />
                  <p>Your Rewards</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/Desktop/Desktop_APD_covid._CB612762929_.png" alt="COVID-19 Donation" className="service-img" />
                  <p>COVID-19 Donation</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/Desktop/Desktop_APD_EMI-new._CB612762929_.png" alt="EMI" className="service-img" />
                  <p>EMI</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/Desktop/Desktop_APD_saved-cards._CB612762929_.png" alt="Your Saved Cards" className="service-img" />
                  <p>Your Saved Cards</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/Desktop/Desktop_APD_help-desktop._CB612762929_.png" alt="Help and FAQs" className="service-img" />
                  <p>Help and FAQs</p>
                </div>
                <div className="service-card">
                  <img src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/Desktop/Desktop_APD_help-desktop._CB612762929_.png" alt="Help and FAQs" className="service-img" />
                  <p>Lodge a complaint</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    
  
  );
};

export default ChomuzonPayPage;