import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { DataContext } from './context/DataContext';
import forms from './constants/forms';
import AfterSubmitting from './components/AfterSubmitting';
import { ConfigProvider } from 'antd';
import Steps from './components/shared/Steps';
import Header from './components/Header';
import Footer from './components/Footer';
import CMS from './pages/CMS';

const App: React.FC = () => {
  const { currentStep, isSubmitted, previousStep } = useContext(DataContext);

  if (isSubmitted) return <AfterSubmitting />;

  return (
    <Router>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'gold',
          },
        }}
      >
        <Header />
        <Steps />
        <div className="max-w-5xl p-4 mx-auto">
          {currentStep > 0 && (
            <div className="my-2">
              <button onClick={previousStep}>
                <i className="bi bi-arrow-left text-3xl"></i>
              </button>
            </div>
          )}
          <div className="mt-6">
            {forms[currentStep]}
          </div>
        </div>
        <Footer className="footer" />
      </ConfigProvider>

      <Switch>
        <Route path="/cms">
          <CMS />
        </Route>
        <Route exact path="/">
          {/* Default route: Redirect to CMS or any other default behavior */}
          <CMS />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
