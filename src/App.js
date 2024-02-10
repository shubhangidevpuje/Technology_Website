
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './MainComponents/Header';
import Homepage from './Pages/Homepage/Homepage';
import Wordplug from './Pages/SeriviceComponent/WordPressPluginDevelopment';
import Themecustom from './Pages/SeriviceComponent/Themecustomization';
import Supportmaintain from './Pages/SeriviceComponent/supportMaintaines';
import psdhtohtml from './Pages/SeriviceComponent/Psdtohtml';
import DesignBranding from './Pages/SeriviceComponent/Design';
import Corporate from './Pages/SeriviceComponent/Corporateidentity';
import Woocomm from './Pages/SeriviceComponent/Woocommerce';
import Shopify from './Pages/SeriviceComponent/Shopifydevelopment';
import Magento from './Pages/SeriviceComponent/Magentodevelopement';
import Volusion from './Pages/SeriviceComponent/Volusiondevelopement';
import Androids from './Pages/SeriviceComponent/Androidapp';
import IOSAPP from './Pages/SeriviceComponent/IOSApp';
import Ionic from './Pages/SeriviceComponent/Ionicapp';
import Flutter from './Pages/SeriviceComponent/Flutter';
import Digital from './Pages/SeriviceComponent/Digitalmarketing';
import Seoservice from './Pages/SeriviceComponent/Seoservice';
import Offshore from './Pages/SeriviceComponent/Offshoresoftware';
import Quality from './Pages/SeriviceComponent/Quality';
import DevOpes from './Pages/SeriviceComponent/DevOpsservice';
import comm from './Pages/ProductComponent/Woocommerce';
import Nodejs from './Pages/SeriviceComponent/Node';
import Pythondev from './Pages/SeriviceComponent/Pythondev';
import Webdesigning from './Pages/SeriviceComponent/Webdesigning';
import Angulardev from './Pages/SeriviceComponent/Angulardev';
import Phpdev from './Pages/SeriviceComponent/PHPdev';
import Wordpress from './Pages/SeriviceComponent/Wordpress';
import Shippingpro from './Pages/ProductComponent/Woocommerceshipping';
import Canadapost from './Pages/ProductComponent/Canadapost';
import EasyPostshipping from './Pages/ProductComponent/Easypostshipping';
import Quickbookintegration from './Pages/ProductComponent/Quickbook';
import Getway from './Pages/ProductComponent/Getwaywoocom';
import Proforups from './Pages/ProductComponent/ProforUPS';
import Proforusps from './Pages/ProductComponent/Proforusps';
import About from './Pages/AboutComponent/About';
import Automotive from './Pages/IndustriesComponent/Automotive';
import Banking from './Pages/IndustriesComponent/Banking';
import CapitalMarkets from './Pages/IndustriesComponent/CapitalMarkets';
import MediaTechnology from './Pages/IndustriesComponent/MediaTechnology';
import ConsumerGoods from './Pages/IndustriesComponent/ConsumerGoods';
import Education from './Pages/IndustriesComponent/Education';
import HealthCare from './Pages/IndustriesComponent/HealthCare';
import InformationServices from './Pages/IndustriesComponent/Informationservices';
import Insurence from './Pages/IndustriesComponent/Insurence';
import LifeSciences from './Pages/IndustriesComponent/LifeSciences';
import ManuFacturing from './Pages/IndustriesComponent/ManuFacturing';
import OilGas from './Pages/IndustriesComponent/OilGas';
import Retail from './Pages/IndustriesComponent/Retail';
import TransportaionLogistics from './Pages/IndustriesComponent/TransportaionLogistics';
import TravelHospitality from './Pages/IndustriesComponent/TravelHospitality';
import Utilities from './Pages/IndustriesComponent/Utilities';
import Applicationservice from './Pages/SeriviceComponent/Applicationservice';
import ArtifialIntelligence from './Pages/SeriviceComponent/Artifialintelligent';
import BusinessProcess from './Pages/SeriviceComponent/Businessprocess';
import CloudSolutions from './Pages/SeriviceComponent/CloudSolution';
import CoreModernization from './Pages/SeriviceComponent/CoreModernization';
import DigitalExperience from './Pages/SeriviceComponent/Digitalexperience';
import EnterpriseApplication from './Pages/SeriviceComponent/Enterpriceapplication';
import Infrastructureservices from './Pages/SeriviceComponent/Infrastructureservices';
import Intelligentprocess from './Pages/SeriviceComponent/Intelligentprocess';
import InternetofThings from './Pages/SeriviceComponent/Internetofthings';
import QualityEngineering from './Pages/SeriviceComponent/QualityEngenineering';
import Security from './Pages/SeriviceComponent/Security';
import SoftwareProduct from './Pages/SeriviceComponent/SoftwareProduct';


function App() {



  return (
    <>
      <Router>

        <Header />
        <Switch>
          <div style={{ paddingTop: '4em' }}>


            <Route exact path="/" component={Homepage} />
            {/* <Route path="/servicepage/:serviceName" component={ServicePage} /> */}
            <Route path="/pythondev" component={Pythondev}></Route>
            <Route path="/nodejs" component={Nodejs}></Route>
            <Route path='/about' component={About}></Route>
            <Route path="/webdesigning" component={Webdesigning}></Route>
            <Route path="/angulardev" component={Angulardev}></Route>
            <Route path="/phpdev" component={Phpdev}></Route>
            <Route path="/wordpress" component={Wordpress}></Route>
            <Route path="/wordpressplugin" component={Wordplug} />
            <Route path="/themecustomization" component={Themecustom}></Route>
            <Route path="/supportmaintain" component={Supportmaintain}></Route>
            <Route path="/psdtohtml" component={psdhtohtml}></Route>
            <Route path="/design" component={DesignBranding}></Route>
            <Route path="/corporate" component={Corporate}></Route>
            <Route path="/woocomm" component={Woocomm}></Route>
            <Route path="/shopify" component={Shopify}></Route>
            <Route path="/magento" component={Magento}></Route>
            <Route path="/volusion" component={Volusion}></Route>
            <Route path="/androids" component={Androids}></Route>
            <Route path="/iosapp" component={IOSAPP}></Route>
            <Route path="/ionic" component={Ionic}></Route>
            <Route path="/flutter" component={Flutter}></Route>
            <Route path="/digital" component={Digital}></Route>
            <Route path="/seoservice" component={Seoservice}></Route>
            <Route path="/offshore" component={Offshore}></Route>
            <Route path="/quality" component={Quality}></Route>
            <Route path="/devopes" component={DevOpes}></Route>
            <Route path="/applicationservice" component={Applicationservice}></Route>
            <Route path="/artifialintelligent" component={ArtifialIntelligence}></Route>
            <Route path="/businessprocess" component={BusinessProcess}></Route>
            <Route path="/cloudsolutions" component={CloudSolutions}></Route>
            <Route path="/coremodernization" component={CoreModernization}></Route>
            <Route path="/digitalexperience" component={DigitalExperience}></Route>
            <Route path="/Enterprise" component={EnterpriseApplication}></Route>
            <Route path="/infasrtucture" component={Infrastructureservices}></Route>
            <Route path="/intelligent" component={Intelligentprocess}></Route>
            <Route path="/internetofthings" component={InternetofThings}></Route>
            <Route path="/qualityengineering" component={QualityEngineering}></Route>
            <Route path="/security" component={Security}></Route>
            <Route path="/softwareproduct" component={SoftwareProduct}></Route>
 
            {/* ---------------------------------------------- End ServiceComponent -------------------------------------------------       */}

            <Route path="/comm" component={comm}></Route>
            <Route path="/shippingpro" component={Shippingpro}></Route>
            <Route path="/canadapost" component={Canadapost}></Route>
            <Route path="/easypostshipping" component={EasyPostshipping}></Route>
            <Route path="/quickbookintegration" component={Quickbookintegration}></Route>
            <Route path="/getway" component={Getway}></Route>
            <Route path="/proforups" component={Proforups}></Route>
            <Route path="/proforusps" component={Proforusps}></Route>

            {/* ---------------------------------------------- End ProductComponent -------------------------------------------------       */}

            <Route path="/automotive" component={Automotive}></Route>
            <Route path="/banking" component={Banking}></Route>
            <Route path="/capitalmarket" component={CapitalMarkets}></Route>
            <Route path="/commediatech" component={MediaTechnology}></Route>
            <Route path="/consumergoods" component={ConsumerGoods}></Route>
            <Route path="/education" component={Education}></Route>
            <Route path="/healthcare" component={HealthCare}></Route>
            <Route path="/informservices" component={InformationServices}></Route>
            <Route path="/insurence" component={Insurence}></Route>
            <Route path="/lifesciences" component={LifeSciences}></Route>
            <Route path="/manufacturing" component={ManuFacturing}></Route>
            <Route path="/oilgas" component={OilGas}></Route>
            <Route path="/retail" component={Retail}></Route>
            <Route path="/transportaionlogistics" component={TransportaionLogistics}></Route>
            <Route path="/travelhospitality" component={TravelHospitality}></Route>
            <Route path="/utilities" component={Utilities}></Route> 


            {/* ---------------------------------------------- End IndustriesComponent -------------------------------------------------       */}

          </div>

        </Switch>

      </Router>


    </>

  );
}

export default App;
